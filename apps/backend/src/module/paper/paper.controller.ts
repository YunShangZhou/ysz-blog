import {
  Body,
  Controller,
  Get,
  Inject,
  Param,
  ParseIntPipe,
  Post,
  UseFilters,
  ValidationPipe,
} from '@nestjs/common';
import { PaperService } from './paper.service';
import { createParamProps } from '../../type/paper';
import { TypeORMExceptionFilter } from '../../exception/typeormException';
import {
  CreatePaperDto,
  GetPaperListByPageDto,
  UpdatePaperDto,
} from './dto/index.dto';
import { EntityNotFoundExceptionFilter } from '../../exception/entityException';

@Controller('paper')
@UseFilters(EntityNotFoundExceptionFilter)
export class PaperController {
  constructor(private readonly paperService: PaperService) {}

  @Post('create')
  create(@Body(new ValidationPipe()) createPaperDto: CreatePaperDto) {
    return this.paperService.create(createPaperDto);
  }

  @Post('update')
  update(@Body() updatePaperDto: UpdatePaperDto) {
    const { id, data } = updatePaperDto;

    return this.paperService.update(id, data);
  }

  @Get('delete/:paperId')
  delete(@Param('paperId') paperId: string) {
    return this.paperService.delete(paperId);
  }

  @Get('getPaper/:paperId')
  getPaper(@Param('paperId') paperId: string) {
    return this.paperService.getPaper(paperId);
  }

  @Get('getPaperList')
  getPaperList() {
    return this.paperService.getPaperList();
  }

  @Get('getPaperListByTag/:tag')
  getPaperListByTag(@Param('tag') tag: string) {
    return this.paperService.getPaperListByTag(tag);
  }

  @Post('getPaperListByPage')
  getPaperListByPage(
    @Body(new ValidationPipe())
    getPaperListByPageDto: GetPaperListByPageDto
  ) {
    const { page, pageSize, tag } = getPaperListByPageDto;
    return this.paperService.getPaperListByPage(page, pageSize, tag);
  }
}
