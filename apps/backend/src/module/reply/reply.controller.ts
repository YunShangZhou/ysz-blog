import { Controller ,Post,Param,Body } from "@nestjs/common";
import { CreateReplyDto } from "./dto/index.dto";
import { ReplyService } from './reply.service'

@Controller('reply')
export class ReplyController {
  constructor(private readonly ReplyService: ReplyService){}

  @Post('/create/:id')
  async create(@Param('id') id: string, @Body() createReplyDto: CreateReplyDto) {
    return this.ReplyService.create(id, createReplyDto);
  }
}
