import { Injectable } from '@nestjs/common';
import { AccessToken } from 'livekit-server-sdk';

@Injectable()
export class AppService {
  getHello(): string {
    new AccessToken('api-key', 'api-secret-key', {
      identity: 'sample-name',
      ttl: '100m',
    });
    return 'Hello World!';
  }
}
