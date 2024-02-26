import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCommentDto } from './dto/index.dto';
import { CommentService } from './comment.service';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('create/:id')
  async create(
    @Param('id') id: string,
    @Body() createCommentDto: CreateCommentDto
  ) {
    return this.commentService.create(id, createCommentDto);
  }

  @Get('getAll/:id')
  async getAll(@Param('id') paperId:string) {
    return this.commentService.getAll(paperId);
  }
}
