import { Logger } from '@nestjs/common';
import { RmqOptions, ClientRMQ } from '@nestjs/microservices';
import { Channel } from 'amqplib';
import { IExchangeRb, IQueue, IQueueBinding, RabbitAssertExchange, RabbitAssertQueue } from './interfaces';
export declare class RabbitClient extends ClientRMQ {
    channelRb: Channel;
    logger: Logger;
    constructor(options: RmqOptions['options']);
    exchange(exchangeRb: IExchangeRb): Promise<RabbitAssertExchange>;
    bindQueue(bindQueue: IQueueBinding): Promise<any>;
    assertQueue(queueOptions: IQueue): Promise<RabbitAssertQueue>;
    connectRmq(): Promise<void>;
}
