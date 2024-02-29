import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LabelService } from './label.service';
import { CreateLabelDto } from './dto/index.dto';

@Controller('label')
export class LabelController {
  constructor(private readonly labelService: LabelService) {}

  @Post()
  create(@Body() createLabelDto: CreateLabelDto) {
  }
}
