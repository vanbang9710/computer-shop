import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsString, Min } from 'class-validator';

const booleanValues = ['true', '1', 'yes'];
export class GetProductsFilterDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsString()
  @IsOptional()
  manufacturer: string;

  @Type(() => Number)
  @Min(0)
  @IsInt()
  @IsOptional()
  limit: number;

  @Type(() => Number)
  @Min(0)
  @IsInt()
  @IsOptional()
  offset: number;

  @Type(() => (val) => booleanValues.includes(val))
  @IsOptional()
  count: boolean;
}
