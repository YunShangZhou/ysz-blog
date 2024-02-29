import { Module } from '@nestjs/common';
import { PaperController } from './paper.controller';
import { PaperService } from './paper.service';
import { Paper } from './paper.entity';
import { Comment } from '@/module/comment/comment.entity';

import { TypeOrmModule } from '@nestjs/typeorm';
import { Tag } from '../tag/tag.entitiy';
import { Label } from '../label/entities/label.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Paper,
      Comment,
      Tag,
      Label
    ]),
  ],
  controllers: [PaperController],
  providers: [PaperService],
})
export class PaperModule { }
