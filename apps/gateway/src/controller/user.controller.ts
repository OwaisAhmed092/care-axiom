import { SERVICE } from '@app/common/constant';
import { CreateUserDto, UpdateUserDto } from '@app/common/dto';
import { AuthGuard } from '@app/common/guard';
import { resolveObservable } from '@app/common/utils/helper';
import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('users')
export class UserController {
  constructor(@Inject(SERVICE.USER) private readonly userClient: ClientProxy) {}

  @Post()
  async create(@Body() userData: CreateUserDto) {
    return await resolveObservable(
      this.userClient.send({ cmd: 'createUser' }, { ...userData }),
    );
  }

  @Get('getUsersAbove18')
  @UseGuards(AuthGuard)
  async getUsersAbove18() {
    return await resolveObservable(
      this.userClient.send({ cmd: 'getUsersAbove18' }, {}),
    );
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  async getUserById(@Param('id') id: string) {
    return await resolveObservable(
      this.userClient.send({ cmd: 'findUserById' }, { id }),
    );
  }

  @Get()
  @UseGuards(AuthGuard)
  async getAllUser() {
    // @Query('limit') limit: number = 10, // @Query('skip') skip: number = 0,
    return await resolveObservable(
      this.userClient.send(
        { cmd: 'findAllUsers' },
        {
          /*skip, limit*/
        },
      ),
    );
  }

  @Put(':id')
  @UseGuards(AuthGuard)
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return await resolveObservable(
      this.userClient.send({ cmd: 'updateUser' }, { ...updateUserDto, id }),
    );
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  async deleteUser(@Param('id') id: string) {
    await resolveObservable(
      this.userClient.send({ cmd: 'removeUser' }, { id }),
    );
    return { isDeleted: true };
  }
}
