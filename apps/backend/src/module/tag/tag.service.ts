import { Injectable } from "@nestjs/common";
import { CreateTagDto } from "./dto/index.dto";
import { EntityManager, Repository } from "typeorm";
import { Tag } from "./tag.entitiy";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { Paper } from "../paper";


@Injectable()
export class TagService {
    private paperRepository: Repository<Paper>
    private tagRepository: Repository<Tag>

    constructor(
        @InjectEntityManager() manager: EntityManager
    ) {
        this.paperRepository = manager.getRepository(Paper);
        this.tagRepository = manager.getRepository(Tag);
    }

    async create(paperId: string, params: CreateTagDto) {
        const relatedPaper = await this.paperRepository.findOneBy({ id: paperId })

        if (!relatedPaper) {
            throw new Error('paper not found')
        }

        const { tag } = params
        const newTag = await this.tagRepository.create({
            tag,
            paper: relatedPaper
        })
        this.tagRepository.save(newTag)
    }

    async getCategories() {
        const result = await this.tagRepository.createQueryBuilder('tag')
            .select('tag.tag')
            .addSelect('COUNT(*)', 'count')
            .groupBy('tag')
            .getRawMany();

        return result.map(item => ({
            tag: item.tag_tag,
            count: item.count
        }))
    }

    async getPaperListByTagAndCount(params: {
        page: number,
        pageSize: number,
        tag: string
    }) {
        const { tag, page, pageSize } = params;

        const [items, total] = await this.tagRepository.findAndCount({
            skip: pageSize * (page - 1),
            take: pageSize,
            where: {
                tag,
            },
            relations: ['paper'],
            order: {
                id: 'DESC'
            }
        })

        return {
            items, total
        };
    }
}