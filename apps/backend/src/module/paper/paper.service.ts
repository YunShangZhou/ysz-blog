import { Inject, Injectable } from '@nestjs/common';
import { createParamProps } from '../../type/paper';
import { Like, Repository } from 'typeorm';
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

  async getPaper(id: string) {
    const current = await this.paperRepository.findOneOrFail({
      where: { id },
    });
    const { createdAt: currentPaperCreatedAt } = current;

    const previous = await this.paperRepository
      .createQueryBuilder('paper')
      .select(['paper.id', 'paper.title'])
      .where('paper.createdAt < :currentPaperCreatedAt', {
        currentPaperCreatedAt,
      })
      .orderBy('createdAt', 'DESC')
      .take(1)
      .getOne();

    const next = await this.paperRepository
      .createQueryBuilder('paper')
      .select(['paper.id', 'paper.title'])
      .where('paper.createdAt > :currentPaperCreatedAt', {
        currentPaperCreatedAt: new Date(currentPaperCreatedAt.getTime() + 1000), // 需要手动加一秒，否则查询会包括当前文章
      })
      .orderBy('createdAt', 'ASC')
      .take(1)
      .getOne();

    return {
      previous,
      current,
      next,
    };
  }

  getPaperList() {
    return this.paperRepository.find();
  }

  async getPaperListByTag(tag: string) {
    // notice: 这是一个异步结果，必须加await获取。
    return await this.paperRepository
      .createQueryBuilder('paper')
      .where('paper.tags LIKE :tag')
      .setParameter('tag', `%${tag}%`)
      .getMany();
  }

  // findAndCount 分页获取 & 条件获取
  async getPaperListByPage(page: number, pageSize: number, tag?: string) {
    const params: Record<string, any> = {
      skip: (page - 1) * pageSize,
      take: pageSize,
      order: {
        id: 'DESC',
      },
    };

    const where = {};
    if (tag) {
      where['tags'] = Like(`%${tag}%`);
      Object.assign(params, {
        where,
      });
    }

    const [items, total] = await this.paperRepository.findAndCount(params);

    return {
      items,
      total,
    };
  }

  async getCategories() {

  }
}
