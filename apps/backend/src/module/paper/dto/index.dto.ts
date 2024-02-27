import { IsString, IsOptional, ValidateNested, IsInt } from 'class-validator';
import { Type } from 'class-transformer';

export class CreatePaperDto {
  @IsString()
  title: string;

  @IsString()
  content: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsString()
  @IsOptional()
  cover?: string;
}

export class UpdatePaperDto {
  @IsString()
  id: string;

  @ValidateNested()
  @Type(() => CreatePaperDto)
  data: CreatePaperDto;
}

export class GetPaperListByPageDto {
  @IsInt()
  page: number;

  @IsInt()
  pageSize: number;
}
