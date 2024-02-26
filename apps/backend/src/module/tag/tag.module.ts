import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagService } from './tag.service';

import { Tag } from './tag.entity';
import { Paper } from '@/module/paper/paper.entity';
import { Reply } from '@/module/reply/reply.entity';
import { TagController } from './tag.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Tag, Paper])],
  controllers: [TagController],
  providers: [TagService],
})
export class TagModule {}
