import { Injectable } from '@nestjs/common';
import { CreateReplyDto } from './dto/index.dto';
import { InjectRepository } from '@nestjs/typeorm';

import { Reply } from './reply.entity';
import { Comment } from '@/module/comment';

import { Repository } from 'typeorm';

@Injectable()
export class ReplyService {
  constructor(
    @InjectRepository(Reply)
    private readonly replyRepository: Repository<Reply>,
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>
  ) {}

  async create(commentId: string, params: CreateReplyDto) {
    const relatedComment = await this.commentRepository.findOneBy({
      id: commentId,
    });

    if (!relatedComment) {
      throw Error('Related comment not found!');
    }

    const { text, user } = params;
    const newReply = this.replyRepository.create({
      text,
      user,
      comment: relatedComment,
    });

    this.replyRepository.save(newReply)
  }
}
