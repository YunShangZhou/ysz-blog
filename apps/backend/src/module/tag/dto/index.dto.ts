import { IsInt, IsString } from "class-validator";


export class CreateTagDto {
    @IsString()
    tag: string
}

export class PaginationDto {
    @IsString()
    tag: string;
    @IsInt()
    page: number;
    @IsInt()
    pageSize: number;
}