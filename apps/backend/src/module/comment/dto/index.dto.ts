import { IsString , isInt ,ValidateNested  } from "class-validator";
import { Type } from "class-transformer";

export class CommentDto {
    @IsString()
    text: string;

    @IsString()
    user: string;
}

export class CreateCommentDto {
    
    @IsString()
    id: string;
    
    @ValidateNested()F
    @Type(() => CommentDto)
    data: CommentDto;
}