import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  Logger,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class TcpLoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger('TCP');

  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    const tcpContext = context.switchToRpc().getContext();
    const pattern = tcpContext.args[tcpContext.args.length - 1];

    const now = Date.now();

    return next.handle().pipe(
      tap(() => {
        const responseTime = Date.now() - now;
        this.logger.log(`${pattern} ${responseTime}ms`);
      }),
      catchError((error) => {
        const responseTime = Date.now() - now;
        Logger.error(
          `${pattern} ${responseTime}ms`,
          JSON.stringify(error),
          'InterceptorError',
        );

        throw error;
      }),
    );
  }
}
