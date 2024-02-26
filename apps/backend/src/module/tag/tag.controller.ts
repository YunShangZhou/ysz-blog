import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateTagDto } from './dto/index.dto';
import { TagService } from './tag.service';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Post('create/:paperId')
  async create(
    @Param('paperId') paperId: string,
    @Body() createTagDto: CreateTagDto
  ) {
    return this.tagService.create(paperId, createTagDto);
  }

  @Get('getCatagories/:paperId')
  async getCatagories(@Param('paperId') paperId:string) {
    return this.tagService.getCatagories(paperId);
  }
}
