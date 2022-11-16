import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Dib } from './entities/dib.entity';

@Injectable()
export class DibService {
  constructor(
    @InjectRepository(Dib)
    private readonly DibRepository: Repository<Dib>,
  ) {}

  async findAll({ userId }) {
    const result = [];
    const user = await this.DibRepository.find({
      where: { user: { id: userId } },
      relations: ['user', 'crewBoard', 'crewBoard.user'],
    });

    user.map((el) => (el.user.id === userId ? result.push(el) : el));
    return result;
  }

  async findOne({ crewBoardId }) {
    return await this.DibRepository.findOne({
      where: { crewBoard: { id: crewBoardId } },
      relations: ['crewBoard', 'user', 'crewBoard.user'],
    });
  }

  create({ userId, crewBoardId }) {
    return this.DibRepository.save({
      user: userId,
      crewBoard: crewBoardId,
    });
  }

  async delete({ crewBoardId }) {
    return await this.DibRepository.delete({
      crewBoard: crewBoardId,
    });
  }
}