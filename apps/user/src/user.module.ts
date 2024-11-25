import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common/module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@app/common/entities';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [DatabaseModule, TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
