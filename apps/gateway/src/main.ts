import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { HttpErrorFilter } from '@app/common/utils/filter';
import { ValidationPipe } from '@app/common/utils/pipe';
import { GatewayModule } from './gateway.module';
import { HttpLoggingInterceptor } from '@app/common/interceptor';

async function bootstrap() {
  const app = await NestFactory.create(GatewayModule);

  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpErrorFilter());
  app.useGlobalInterceptors(new HttpLoggingInterceptor());
  app.setGlobalPrefix('api');

  await app.listen(process.env.GATEWAY_PORT);
}

bootstrap();
