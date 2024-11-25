import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
  NestMiddleware,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable, tap } from 'rxjs';

@Injectable()
export class HttpLoggingInterceptor implements NestInterceptor {
  private logger = new Logger('HTTP');

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const req: Request = context.switchToHttp().getRequest();
    const res: Response = context.switchToHttp().getResponse();

    const { ip, method, originalUrl } = req;
    // const userAgent = req.get('user-agent') || '';
    const now = Date.now();

    res.on('finish', () => {
      const { statusCode } = res;
      this.logger.log(
        `${statusCode} ${method} ${originalUrl} ${Date.now() - now}ms - ${ip}`,
      );
    });

    return next.handle();
  }
}
