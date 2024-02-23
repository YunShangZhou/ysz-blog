import { Inject, Injectable } from '@nestjs/common';
import { createParamProps } from '../../type/paper';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Paper } from './paper.entity';

@Injectable()
export class PaperService {
  constructor(
    @InjectRepository(Paper)
    private paperRepository: Repository<Paper>
  ) {}

  create(params: createParamProps) {
    return this.paperRepository.save(params);
  }

  delete(id: string) {
    return this.paperRepository.delete(id);
  }

  update(id: string, params: createParamProps) {
    return this.paperRepository.update(id, params);
  }

  getPaper(id: string) {
    return this.paperRepository.findOne({ where: { id } });
  }

  getPaperList() {
    return this.paperRepository.find();
  }
}
