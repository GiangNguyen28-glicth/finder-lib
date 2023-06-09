import { ConfigService } from '@nestjs/config';
import { RmqContext, RmqOptions } from '@nestjs/microservices';
import { RabbitClient } from 'libs/shared';
export declare class RabbitService {
    private readonly configService;
    clientRb: RabbitClient;
    constructor(configService: ConfigService);
    initRmq(): void;
    getOptions(queue: string, noAck?: boolean): RmqOptions;
    ack(context: RmqContext): void;
}
