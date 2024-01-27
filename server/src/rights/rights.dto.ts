import { IsNumber, IsString } from 'class-validator';

//
export class RightCreateDto {
  @IsString()
  name: string;

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
