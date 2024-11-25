import { Transform } from 'class-transformer';
import { IsString, MaxLength, IsOptional, IsInt } from 'class-validator';
import { _parseInt } from '../transformer';

export class UpdateUserDto {
  @Transform(({ value }) => _parseInt(value), { toClassOnly: true })
  @IsInt()
  id: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  email: string;

  @Transform(({ value }) => _parseInt(value), { toClassOnly: true })
  @IsInt()
  age: number;
}
