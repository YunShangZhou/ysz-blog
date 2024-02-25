import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";




@Module({
    imports: [TypeOrmModule.forFeature([Comment])], // 导入Comment实体
})

export class CommentModule {}