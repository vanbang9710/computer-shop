import {
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateProductDto {
  @IsNumberString()
  @IsNotEmpty()
  quantity: number;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  thumb: string;

  @IsNumberString()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsOptional()
  manufacturer: string;

  @IsString()
  @IsOptional()
  model: string;

  @IsString()
  @IsOptional()
  color: string;

  @IsString()
  @IsOptional()
  processor: string;

  @IsString()
  @IsOptional()
  maxMemory: string;

  @IsString()
  @IsOptional()
  graphicProcessor: string;

  @IsString()
  @IsOptional()
  hardDrives: string;

  @IsString()
  @IsOptional()
  optDrives: string;

  @IsString()
  @IsOptional()
  securities: string;

  @IsString()
  @IsOptional()
  display: string;

  @IsString()
  @IsOptional()
  webcam: string;

  @IsString()
  @IsOptional()
  audio: string;

  @IsString()
  @IsOptional()
  wiredConnection: string;

  @IsString()
  @IsOptional()
  wirelessConnection: string;

  @IsString()
  @IsOptional()
  ports: string;

  @IsString()
  @IsOptional()
  battery: string;

  @IsString()
  @IsOptional()
  dimensions: string;

  @IsString()
  @IsOptional()
  weight: string;

  @IsString()
  @IsOptional()
  os: string;

  @IsString()
  @IsOptional()
  accessories: string;
}
