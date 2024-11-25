import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SERVICE } from '@app/common/constant';
import { NotificationController, UserController } from './controller';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: SERVICE.USER,
        transport: Transport.TCP,
        options: {
          host: process.env.USER_HOST,
          port: parseInt(process.env.USER_PORT),
        },
      },
      {
        name: SERVICE.NOTIFICATION,
        transport: Transport.TCP,
        options: {
          host: process.env.NOTIFICATION_HOST,
          port: parseInt(process.env.NOTIFICATION_PORT),
        },
      },
    ]),
  ],
  controllers: [NotificationController, UserController],
  providers: [],
})
export class GatewayModule {}
