import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Label } from './label.entity';

@Injectable()
export class LabelService {
    constructor(@InjectRepository(Label) private readonly labelRepository: Repository<Label>) { }

    async getCategories() {
        const result = await this.labelRepository.createQueryBuilder('label')
            .select('label.label as label')
            .addSelect('COUNT(*)', 'count')
            .groupBy('label')
            .getRawMany();

        return result
    }

    async getPaperListPaginationByLabel(params: { label: string, page: number, pageSize: number }) {
        const { page, pageSize, label } = params;

        const [items, total] = await this.labelRepository.findAndCount({
            select: ['papers'],
            where: {
                label
            },
            relations: ['papers'],
            skip: (page - 1) * pageSize,
            take: pageSize,
            order: {
                id: "DESC"
            }
        })

        return {
          items,
          total,
        };
    }
}
