import { Body, Controller, Post } from "@nestjs/common"
import { CreateCommentDto } from "./dto/index.dto";


@Controller('comment')
export class CommentController {


    @Post("create")
    async create(@Body() createCommentDto: CreateCommentDto) {

    }
}