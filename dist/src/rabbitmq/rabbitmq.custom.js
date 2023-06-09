"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitClient = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
class RabbitClient extends microservices_1.ClientRMQ {
    constructor(options) {
        super(options);
        this.logger = new common_1.Logger(RabbitClient.name);
    }
    async exchange(exchangeRb) {
        const { exchange, type, options } = exchangeRb;
        return await this.channelRb.assertExchange(exchange, type, options);
    }
    async bindQueue(bindQueue) {
        const { queue, exchange, routingKey } = bindQueue;
        await this.exchange({ exchange, type: 'direct' });
        await this.assertQueue({ queue });
        return await this.channelRb.bindQueue(queue, exchange, routingKey);
    }
    async assertQueue(queueOptions) {
        const { queue, options } = queueOptions;
        return await this.channelRb.assertQueue(queue, options);
    }
    async connectRmq() {
        try {
            if (!this.channelRb) {
                await this.connect();
                this.channelRb = this.channel;
                this.logger.log('Connect to Rmq success');
            }
        }
        catch (error) {
            this.logger.error('Connect to Rmq failed. Try to reconnect ...');
            setTimeout(this.connectRmq.bind(this), 3000);
        }
    }
}
exports.RabbitClient = RabbitClient;
//# sourceMappingURL=rabbitmq.custom.js.map