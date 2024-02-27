import { Body, Controller, Get, Inject, Param, Post, Query, ValidationPipe, forwardRef } from "@nestjs/common";
import { TagService } from "./tag.service";
import { CreateTagDto, PaginationDto } from "./dto/index.dto";

@Controller('tag')
export class TagController {
    constructor(
        @Inject(forwardRef(() => TagService))
        private readonly tagService: TagService) { }

    @Post('create/:paperId')
    async create(
        @Param('paperId') paperId: string,
        @Body() createTagDto: CreateTagDto
    ) {
        return this.tagService.create(paperId, createTagDto)
    }

    @Get('getCategories')
    getCategories() {
        return this.tagService.getCategories();
    }

    @Post('getPaperListByTagAndCount')
    getPaperListByTagAndCount(@Body() paginationDto: PaginationDto) {
        return this.tagService.getPaperListByTagAndCount(paginationDto);
    }
}