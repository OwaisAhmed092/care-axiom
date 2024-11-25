import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { UserModule } from './user.module';
import { TcpLoggingInterceptor } from '@app/common/interceptor';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.USER_HOST,
        port: parseInt(process.env.USER_PORT),
      },
    },
  );

  app.useGlobalInterceptors(new TcpLoggingInterceptor());
  app.listen();
}

bootstrap();
