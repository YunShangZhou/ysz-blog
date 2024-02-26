import { Module } from '@nestjs/common';
import { PaperController } from './paper.controller';
import { PaperService } from './paper.service';
import { Paper } from './paper.entity';
import { Comment } from '@/module/comment/comment.entity';

import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Paper , Comment])],
  controllers: [PaperController],
  providers: [PaperService],
})
export class PaperModule {}
