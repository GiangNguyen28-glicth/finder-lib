"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const shared_1 = require("libs/shared");
const const_1 = require("../common/const/const");
let RabbitService = class RabbitService {
    constructor(configService) {
        this.configService = configService;
    }
    initRmq() {
        const { username, password, host, port } = (0, shared_1.getAuthClient)(this.configService, const_1.Client.RMQ);
        const url = `amqp://${username}:${password}@${host}:${port}`;
        this.clientRb = new shared_1.RabbitClient({
            urls: [url],
            noAck: false,
        });
    }
    getOptions(queue, noAck = false) {
        const { username, password, host, port } = (0, shared_1.getAuthClient)(this.configService, const_1.Client.RMQ);
        const url = `amqp://${username}:${password}@${host}:${port}`;
        return {
            transport: microservices_1.Transport.RMQ,
            options: {
                urls: [url],
                queue: this.configService.get(`RABBIT_MQ_${queue}_QUEUE`),
                noAck,
                persistent: true,
                prefetchCount: 10,
                isGlobalPrefetchCount: true,
            },
        };
    }
    ack(context) {
        const channel = context.getChannelRef();
        const originalMessage = context.getMessage();
        channel.ack(originalMessage);
    }
};
RabbitService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], RabbitService);
exports.RabbitService = RabbitService;
//# sourceMappingURL=rabbitmq.service.js.map