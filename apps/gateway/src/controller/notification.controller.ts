import { SERVICE } from '@app/common/constant';
import { Controller, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Controller('notification')
export class NotificationController {
  constructor(
    @Inject(SERVICE.NOTIFICATION)
    private readonly notificationClient: ClientProxy,
  ) {}
}
