import { HttpException, HttpStatus } from '@nestjs/common';
import { Observable, catchError, defaultIfEmpty, firstValueFrom } from 'rxjs';

export async function resolveObservable<T>(
  observable: Observable<T>,
  throwError: boolean = true,
): Promise<T> {
  return firstValueFrom(
    observable.pipe(
      catchError((error) => {
        if (throwError) {
          if (error.code == 'ECONNREFUSED')
            throw new HttpException(
              'Error occurred while processing request',
              HttpStatus.BAD_GATEWAY,
            );
          else if (error.status && HttpStatus[error.status])
            throw new HttpException(error.message, error.status);
          else {
            console.log('Catch error', error);
            throw new HttpException(
              'Internal Server Error',
              HttpStatus.INTERNAL_SERVER_ERROR,
            );
          }
        } else {
          return new Observable<T>((subscriber) => {
            subscriber.next(null);
            subscriber.complete();
          });
        }
      }),
      defaultIfEmpty(null as unknown as T),
    ),
  );
}
