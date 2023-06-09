"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = void 0;
const common_1 = require("@nestjs/common");
const redis_service_1 = require("./redis.service");
const redisStore = require("cache-manager-redis-store");
const config_1 = require("@nestjs/config");
const utils_1 = require("../utils/utils");
const const_1 = require("../common/const/const");
let RedisModule = class RedisModule {
};
RedisModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            common_1.CacheModule.registerAsync({
                useFactory: async (configService) => {
                    const authentication = (0, utils_1.getAuthClient)(configService, const_1.Client.REDIS);
                    return {
                        store: redisStore,
                        url: `redis://${authentication.host}:${authentication.port}`,
                        username: authentication.username,
                        password: authentication.password,
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [redis_service_1.RedisService],
        exports: [redis_service_1.RedisService],
    })
], RedisModule);
exports.RedisModule = RedisModule;
//# sourceMappingURL=redis.module.js.map