import { Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/index.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reply } from './reply.entity';

import { Repository } from 'typeorm';

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(Reply) private readonly replyRepository: Repository<Reply>
  ) {}

  create(id, params: CreateReplyDto) {}
}
