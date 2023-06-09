"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RabbitModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RabbitModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const microservices_1 = require("@nestjs/microservices");
const const_1 = require("../common/const/const");
const useFactory_1 = require("../common/useFactory");
const rabbitmq_service_1 = require("./rabbitmq.service");
let RabbitModule = RabbitModule_1 = class RabbitModule {
    static register({ name }) {
        const clientModule = {
            module: RabbitModule_1,
            exports: [microservices_1.ClientsModule],
            inject: [config_1.ConfigService],
        };
        const serviceConfig = {
            service: name,
            client: const_1.Client.RMQ,
        };
        return (0, useFactory_1.register)(clientModule, serviceConfig);
    }
};
RabbitModule = RabbitModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [rabbitmq_service_1.RabbitService],
        exports: [rabbitmq_service_1.RabbitService],
    })
], RabbitModule);
exports.RabbitModule = RabbitModule;
//# sourceMappingURL=rabbitmq.module.js.map