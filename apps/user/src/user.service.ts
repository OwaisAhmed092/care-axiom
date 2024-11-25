import { HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@app/common/entities';
import {
  ClientProxy,
  ClientProxyFactory,
  RpcException,
  Transport,
} from '@nestjs/microservices';
import { CreateUserDto, UpdateUserDto } from '@app/common/dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { QUEUE } from '@app/common/constant';

@Injectable()
export class UserService {
  private readonly rmqClient: ClientProxy;
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {
    this.rmqClient = ClientProxyFactory.create({
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_HOST],
        queue: QUEUE.USER,
        queueOptions: { durable: true },
      },
    });
  }

  async create(createUserDto: CreateUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: 'Email already exist',
      });
    }

    const user = this.userRepository.create(createUserDto);
    const savedUser = await this.userRepository.save(user);

    this.rmqClient.emit('user_created', {
      email: savedUser.email,
      message: 'Welcome',
    });

    return savedUser;
  }

  async findAll(skip = 0, limit = 10): Promise<User[]> {
    return await this.userRepository.find({
      // skip,
      // take: limit,
    });
  }

  async findOne(id: number): Promise<User | undefined> {
    return await this.checkUserExist(id);
  }

  async update(updateUserDto: UpdateUserDto): Promise<User | undefined> {
    const { id, ...updateData } = updateUserDto;
    const account = await this.checkUserExist(id);

    return await this.userRepository.save({ ...account, ...updateData });
  }

  async remove(id: number): Promise<boolean> {
    await this.checkUserExist(id);
    await this.userRepository.delete(id);

    return true;
  }

  async checkUserExist(id: number): Promise<User> {
    const user = await this.userRepository.findOne({ where: { userId: id } });
    if (!user) {
      throw new RpcException({
        status: HttpStatus.BAD_REQUEST,
        message: 'Invalid request',
      });
    }

    return user;
  }

  async getUsersAbove18(): Promise<User[]> {
    return await this.userRepository
      .createQueryBuilder('usr')
      .where('usr.age > :age', { age: 18 })
      .orderBy('usr.name', 'ASC')
      .getMany();
  }
}
