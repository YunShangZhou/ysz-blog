import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentDto } from './dto/index.dto';
import { Repository } from 'typeorm';
import { Paper } from '../paper/paper.entity';
import { Comment } from './comment.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
    @InjectRepository(Paper)
    private readonly paperRepository: Repository<Paper>
  ) {}

  async create(id: string, params: CreateCommentDto) {
    const relatedPaper = await this.paperRepository.findOneBy({
      id,
    });

    if (!relatedPaper) {
      throw new Error('Related paper not found');
    }

    const { text, user } = params;
    const newComment = this.commentRepository.create({
      text,
      user,
      paper: relatedPaper,
    });

    this.commentRepository.save(newComment);
  }

  async getAll(paperId: string) {
    const relatedComment = await this.paperRepository.findOne({
      where: { id: paperId },
      relations: ['comment', 'comment.reply'],
    });

    return relatedComment;
  }
}
