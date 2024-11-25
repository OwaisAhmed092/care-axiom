import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/common/entities';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { QUEUE, SERVICE } from '@app/common/constant';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: SERVICE.RMQ,
    //     transport: Transport.RMQ,
    //     options: {
    //       urls: [process.env.RMQ_HOST],
    //       queue: QUEUE.USER,
    //       queueOptions: { durable: true },
    //     },
    //   },
    // ]),
    DatabaseModule,
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
