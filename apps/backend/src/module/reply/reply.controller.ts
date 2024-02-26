import { Controller ,Post,Param,Body } from "@nestjs/common";
import { CreateReplyDto } from "./dto/index.dto";
import { ReplyService } from './reply.service'

@Controller('reply')
export class ReplyController {
  constructor(private readonly ReplyService: ReplyService){}

  @Post('/create/:commentId')
  async create(@Param('commentId') commentId: string, @Body() createReplyDto: CreateReplyDto) {
    return this.ReplyService.create(commentId, createReplyDto);
  }
}
