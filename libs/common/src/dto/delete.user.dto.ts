import { Transform } from 'class-transformer';
import { IsInt } from 'class-validator';
import { _parseInt } from '../transformer';

export class DeleteUserDto {
  @Transform(({ value }) => _parseInt(value), { toClassOnly: true })
  @IsInt()
  id: number;
}
