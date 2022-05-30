import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty } from 'class-validator';

export class CreateOrderDetailDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  orderId: number;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  productId: number;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  quantity: number;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  @IsNotEmpty()
  orderLine: number;
}
