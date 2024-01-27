import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

//
export class RightCreateDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

//
export class RightUpdateDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

//
export class RightFilterDto {
  @IsNumber()
  id?: number;

  @IsString()
  name?: string;

  @IsString()
  description?: string;
}
