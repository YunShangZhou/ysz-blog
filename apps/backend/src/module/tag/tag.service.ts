import { InjectRepository } from '@nestjs/typeorm';
import { CreateTagDto } from './dto/index.dto';
import { Repository } from 'typeorm';
import { Paper } from '../paper/paper.entity';
import { Tag } from './tag.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,

  ) {}

  async create(id: string, params: CreateTagDto) {
    // const relatedPaper = await this.paperRepository.findOneBy({
    //   id,
    // });

    // if (!relatedPaper) {
    //   throw new Error('Related paper not found');
    // }

    // const { label } = params;
    // const newTag = this.tagRepository.create({
    //   label,
    //   paper: relatedPaper,
    // });

    // this.tagRepository.save(newTag);
  }

  async getCatagories(paperId: string) {
    // const relatedTag = await this.paperRepository.findOne({
    //   select: ['tag'],
    //   where: { id: paperId },
    //   relations: ['tag'],
    // });
    // return relatedTag;
  }
}
