import { Injectable } from "@nestjs/common";
import { CreateTagDto } from "./dto/index.dto";
import { Repository } from "typeorm";
import { Tag } from "./tag.entitiy";
import { InjectRepository } from "@nestjs/typeorm";
import { Paper } from "../paper";

@Injectable()
export class TagService {
    constructor(
        @InjectRepository(Tag) private readonly tagRepository: Repository<Tag>,
        @InjectRepository(Paper) private readonly paperRepository: Repository<Paper>
    ) { }

    async create(paperId: string, params: CreateTagDto) {
        console.log(`==== run async create(paperId:`)
        const relatedPaper = await this.paperRepository.findOneBy({ id: paperId })
        console.log(`=== relatedPaper`, relatedPaper)

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

}