import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NotificationModule } from './notification.module';
import { QUEUE } from '@app/common/constant';
import { TcpLoggingInterceptor } from '@app/common/interceptor';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    NotificationModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RMQ_HOST],
        queue: QUEUE.USER,
        queueOptions: { durable: true },
      },
    },
  );

  app.useGlobalInterceptors(new TcpLoggingInterceptor());
  app.listen();
}

bootstrap();
