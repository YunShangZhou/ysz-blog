import { Module } from '@nestjs/common';
import { LabelService } from './label.service';
import { LabelController } from './label.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Label } from './entities/label.entity';
import { Paper } from '../paper';

@Module({
  imports: [TypeOrmModule.forFeature([Label, Paper])],
  controllers: [LabelController],
  providers: [LabelService],
})
export class LabelModule { }
