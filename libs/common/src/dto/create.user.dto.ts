import { Transform } from 'class-transformer';
import { IsString, IsEmail, MaxLength, IsInt } from 'class-validator';
import { _parseInt } from '../transformer';

export class CreateUserDto {
  @IsString()
  @MaxLength(100)
  name: string;

  @IsEmail()
  @MaxLength(100)
  email: string;

  @Transform(({ value }) => _parseInt(value), { toClassOnly: true })
  @IsInt()
  age: number;
}
