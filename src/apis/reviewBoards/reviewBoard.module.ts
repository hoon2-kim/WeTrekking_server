import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReviewBoardImage } from '../reviewBoardImages/entities/reviewBoardImage.entity';
import { ReviewBoardImageService } from '../reviewBoardImages/reviewBoardImage.service';
import { ReviewComment } from '../reviewComments/entities/reviewComment.entity';
import { ReviewCount } from '../reviewCount/reviewCount.entity';
import { User } from '../users/entities/user.entity';
import { ReviewBoard } from './entities/reviewBoard.entity';
import { ReviewBoardResolver } from './reviewBoard.resolver';
import { ReviewBoardService } from './reviewBoard.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ReviewBoard, //
      ReviewBoardImage,
      User,
      ReviewCount,
      ReviewComment,
    ]),
  ],
  providers: [
    ReviewBoardResolver, //
    ReviewBoardService,
    ReviewBoardImageService,
  ],
})
export class ReviewBoardModule {}
