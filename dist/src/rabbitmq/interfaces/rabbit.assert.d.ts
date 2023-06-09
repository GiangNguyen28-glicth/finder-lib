import amqp from 'amqplib';
export declare type RabbitAssertQueue = amqp.Replies.AssertQueue;
export declare type RabbitAssertExchange = amqp.Replies.AssertExchange;
export declare type RabbitPurgeQueue = amqp.Replies.PurgeQueue;
export declare type RabbitEmpty = amqp.Replies.Empty;
export declare type ExchangeRb = 'direct' | 'topic' | 'headers' | 'fanout' | 'match';
