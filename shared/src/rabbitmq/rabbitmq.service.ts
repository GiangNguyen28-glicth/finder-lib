import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions, Transport } from '@nestjs/microservices';
import { Client } from '../common/const/const';
import { RabbitClient } from './rabbitmq.custom';
import { getAuthClient } from '../utils';
@Injectable()
export class RabbitService {
  public clientRb: RabbitClient;
  constructor(private readonly configService: ConfigService) {}

  initRmq() {
    const { username, password, host, port } = getAuthClient(
      this.configService,
      Client.RMQ,
    );
    const url = `amqp://${username}:${password}@${host}:${port}`;
    this.clientRb = new RabbitClient({
      urls: [url],
      noAck: false,
    });
  }

  getOptions(queue: string, noAck = false): RmqOptions {
    const { username, password, host, port } = getAuthClient(
      this.configService,
      Client.RMQ,
    );
    const url = `amqp://${username}:${password}@${host}:${port}`;
    return {
      transport: Transport.RMQ,
      options: {
        urls: [url],
        queue: this.configService.get<string>(`RABBIT_MQ_${queue}_QUEUE`),
        noAck,
        persistent: true,
        prefetchCount: 10,
        isGlobalPrefetchCount: true,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }
}
