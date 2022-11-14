import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrewBoardImageService } from '../crewBoardImages/crewBoardImage.service';
import { CrewBoardImage } from '../crewBoardImages/entities/crewBoardImage.entity';
import { User } from '../users/entities/user.entity';
import { CrewBoardResolver } from './crewBoard.resolver';
import { CrewBoardService } from './crewBoard.service';
import { CrewBoard } from './entities/crewBoard.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CrewBoard, //
      CrewBoardImage,
      User,
    ]),
    ElasticsearchModule.register({
      node: 'http://elasticsearch:9200',
    }),
  ],
  providers: [
    CrewBoardResolver,
    CrewBoardService, //
    CrewBoardImageService,
  ],
})
export class CrewBoardModule {}
