import { Controller } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  // Event listener to consume the 'user_created' event from RabbitMQ
  @MessagePattern('user_created')
  async handleUserCreated(payload: { email: string; message: string }) {
    this.notificationService.handleUserCreated(payload);
  }
}
