import { Module, } from '@nestjs/common'
import { Paper } from '../paper';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';
import { Tag } from './tag.entitiy';

@Module({
    imports: [TypeOrmModule.forFeature([Tag, Paper])],
    controllers: [TagController],
    providers: [TagService],
})

export class TagModule { }