import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  handleUserCreated(payload: { email: string; message: string }) {
    console.log(`Sending message to ${payload.email}: ${payload.message}`);
  }
}
