import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/index.dto';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create/:paperId')
  async create(
    @Param('paperId') paperId: string,
    @Body() createCommentDto: CreateCommentDto
  ) {
    return this.commentService.create(paperId, createCommentDto);
  }

  @Get('getAll/:paperId')
  async getAll(@Param('paperId') paperId:string) {
    return this.commentService.getAll(paperId);
  }
}
