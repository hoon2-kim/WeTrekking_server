import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { InjectRepository } from '@nestjs/typeorm';
import { GqlAuthAccessGuard } from 'src/commons/auth/gql-auth.guard';
import { IContext } from 'src/commons/type/context';
import { Repository } from 'typeorm';
import { CrewBoard } from '../crewBoards/entities/crewBoard.entity';
import { EmailService } from '../email/email.service';
import { PointHistory } from '../pointHistory/entities/pointHistory.entity';
import { User } from '../users/entities/user.entity';
import { CrewUserListService } from './crewUserList.service';
import { CrewUserList } from './entities/crewUserList.entity';

@Resolver()
export class CrewUserListResolver {
  constructor(
    private readonly crewUserListService: CrewUserListService, //
    private readonly emailService: EmailService, //

    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(CrewBoard)
    private readonly crewBoardRepository: Repository<CrewBoard>,

    @InjectRepository(PointHistory)
    private readonly pointHistoryRepository: Repository<PointHistory>,
  ) {}

  // 크루 신청 리스트 조회
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => [[CrewUserList]])
  async fetchCrewUserList(
    @Context() context: IContext, //
  ) {
    const userId = context.req.user.id;
    const user = await this.crewUserListService.findAll({ userId });
    const userList = [];

    user.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));
    while (user.length > 0) {
      userList.push(user.splice(0, 10));
    }

    return userList;
  }

  @UseGuards(GqlAuthAccessGuard)
  @Query(() => [CrewUserList])
  async fetchApplyList(
    @Context() context: IContext, //
    @Args('crewBoardId') crewBoardId: string,
  ) {
    const result = await this.crewUserListService.findApplyList({
      crewBoardId,
    });

    if (result.length === 0) {
      throw new Error('신청자가 없습니다.');
    }

    return result;
  }

  @Query(() => [CrewUserList])
  async fetchAcceptedList(
    @Context() context: IContext, //
    @Args('crewBoardId') crewBoardId: string,
  ) {
    const accept = await this.crewUserListService.findAcceptedList({
      crewBoardId,
    });
    const finish = await this.crewUserListService.findFinshListByBoardId({
      crewBoardId,
    });
    const result = accept.concat(finish);

    result.unshift(
      result.splice(
        result.findIndex((x) => x.crewBoard.user.id === x.user.id),
        1,
      )[0],
    );
    return result;
  }

  // 방장인 올린 게시글 조회
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => [[CrewBoard]])
  async fetchHostCrewList(
    @Context() context: IContext, //
  ) {
    const userId = context.req.user.id;
    const result = [];
    const list = await this.crewUserListService.findHostList({ userId });

    list.sort((a, b) => Number(b.createdAt) - Number(a.createdAt));

    while (list.length > 0) {
      result.push(list.splice(0, 10));
    }
    return result;
  }

  // 크루 리스트 추가
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async createCrewUserList(
    @Context() context: IContext,
    @Args('crewBoardId') crewBoardId: string, //
  ) {
    // 1. 정보 가져오기
    const userId = context.req.user.id;
    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    const crewBoard = await this.crewBoardRepository.findOne({
      where: { id: crewBoardId },
      relations: ['user'],
    });

    // 2. 중복 신청 체크
    const find = await this.crewUserListService.findCrewList({
      crewBoardId,
      userId,
    });
    if (find.length !== 0) {
      throw new Error('이미 신청한 게시글입니다.');
    }

    // 3. 모집 완료여부 확인
    const count = await this.crewUserListService.findAcceptedList({
      crewBoardId,
    });
    if (crewBoard.peoples === count.length) {
      throw new Error('모집 완료된 게시글입니다.');
    }

    // 4. 성별 체크
    // 4-1. 게시글이 남자만인데 신청자가 여자이면
    if (crewBoard.gender === 'male' && user.gender === 'female') {
      throw new Error('남자만 신청 가능합니다!');
    }
    // 4-2. 게시글이 여자만인데 신청자가 남자이면
    if (crewBoard.gender === 'female' && user.gender === 'male') {
      throw new Error('여자만 신청 가능합니다!');
    }

    // 5. 돈 체크
    if (user.point < 200) {
      throw new Error('포인트가 부족합니다! 포인트를 충전해주세요');
      // console.log('포인트가 부족하지만 개발 중이기에 넘어가준다.');
    }
    await this.userRepository.update(
      { id: userId },
      { point: user.point - 200 },
      // { point: user.point }, // 개발중으로 아직 포인트 안뻇어감
    );
    await this.pointHistoryRepository.save({
      amount: -200,
      user: { id: userId },
    });

    // 6. 리스트 신청
    await this.crewUserListService.create({
      userId,
      crewBoardId,
    });

    // 7. email 전송
    const nickname = user.nickname;
    const crewBoardTitle = crewBoard.title;
    const email = crewBoard.user.email;

    const result = await this.emailService.getApplyTemplate({
      nickname,
      crewBoardTitle,
    });
    const comment = '새로운 신청자가 있습니다!!';
    this.emailService.sendTemplateToEmail({ email, result, comment });

    return ' 크루 리스트에 추가 되었습니다.';
  }

  // 크루 리스트 신청 취소
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => String)
  async deleteCrewUserList(
    @Context() context: IContext,
    @Args('crewBoardId') crewBoardId: string, //
  ) {
    const userId = context.req.user.id;
    await this.crewUserListService.delete({ crewBoardId });

    const user = await this.userRepository.findOne({
      where: { id: userId },
    });
    await this.userRepository.update(
      { id: userId },
      { point: user.point + 200 },
      // { point: user.point }, // 개발중으로 아직 포인트 안뻇어감
    );
    return '크루 신청이 취소 되었습니다.';
  }

  // 크루 수락
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => CrewUserList)
  async acceptCrew(
    @Args('id') id: string, //
  ) {
    const crewUserList = await this.crewUserListService.update({
      id,
      status: '수락',
    });
    const crewUserId = await this.crewUserListService.findOne({ id });

    const email = crewUserId.user.email;
    const nickname = crewUserId.user.nickname;
    const crewBoardTitle = crewUserId.crewBoard.title;
    const result = await this.emailService.getApplyTemplate({
      nickname,
      crewBoardTitle,
    });
    const comment = '크루에 등록되었습니다.';
    this.emailService.sendTemplateToEmail({ email, result, comment });

    return crewUserList;
  }

  // 크루 거절
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => CrewUserList)
  async rejectCrew(
    @Args('id') id: string, //
  ) {
    const crewUserList = await this.crewUserListService.update({
      id,
      status: '거절',
    });
    const crewUserId = await this.crewUserListService.findOne({ id });
    const email = crewUserId.user.email;
    const nickname = crewUserId.user.nickname;
    const crewBoardTitle = crewUserId.crewBoard.title;

    await this.pointHistoryRepository.save({
      amount: 200,
      user: { id: crewUserId.user.id },
    });

    const result = await this.emailService.getRejectTemplate({
      nickname,
      crewBoardTitle,
    });
    const comment = '크루에 거절되었습니다.';
    this.emailService.sendTemplateToEmail({ email, result, comment });
    return crewUserList;
  }

  // 반장이 출석체크 하면 status를 완료로 변경
  @UseGuards(GqlAuthAccessGuard)
  @Mutation(() => CrewUserList)
  async finishCrew(
    @Args('id') id: string, //
  ) {
    const checkAlready = this.crewUserListService.findFinshList({ id });
    if (checkAlready[0]) {
      throw new Error('이미 완료 처리 되었습니다.');
    }
    return this.crewUserListService.update({
      id,
      status: '완료',
    });
  }

  // 갔던 산 리스트 조회 (status를 완료로 변경된 사항만 조회 가능)
  @UseGuards(GqlAuthAccessGuard)
  @Query(() => [CrewUserList])
  async fetchVisitList(
    @Context() context: IContext, //
  ) {
    const userId = context.req.user.id;

    const finishList = await this.crewUserListService.findVisitToList({
      userId,
    });

    return finishList;
  }
}
