import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PaperService } from './paper.service';
import { createParamProps } from '../../type/paper';

@Controller('paper')
export class PaperController {
  constructor(private readonly paperService: PaperService) {}

  @Post('create')
  create(@Body() body: createParamProps) {
    return this.paperService.create(body);
  }

  @Post('update')
  update(@Body() { id, data }: { id: string; data: createParamProps }) {
    return this.paperService.update(id, data);
  }

  @Post('delete')
  delete(@Body() { id }: { id: string }) {
    return this.paperService.delete(id);
  }

  @Get('getList')
  getList() {
    return this.paperService.getList();
  }

  @Post('getPaper')
  getPaper(@Body() { id }: { id: string }) {
    return this.paperService.getPaper(id);
  }
}
