import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { Reply } from "./reply.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Reply])], // 导入Comment实体
})

export class  ReplyModule {}