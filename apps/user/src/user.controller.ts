import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from '@app/common/dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'createUser' })
  async createUser(@Payload() createUserDto: CreateUserDto) {
    return await this.userService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUsers' })
  async findAllUser(@Payload() data: any) {
    return await this.userService.findAll(data?.skip, data?.limit);
  }

  @MessagePattern({ cmd: 'findUserById' })
  async findUserById(@Payload() data: { id: number }) {
    return await this.userService.findOne(data.id);
  }

  @MessagePattern({ cmd: 'getUsersAbove18' })
  async getUsersAbove18() {
    return await this.userService.getUsersAbove18();
  }

  @MessagePattern({ cmd: 'updateUser' })
  async updateUser(@Payload() updateUserDto: UpdateUserDto) {
    return await this.userService.update(updateUserDto);
  }

  @MessagePattern({ cmd: 'removeUser' })
  async removeUser(@Payload() data: { id: number }) {
    return await this.userService.remove(data.id);
  }
}
