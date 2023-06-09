"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = void 0;
const microservices_1 = require("@nestjs/microservices");
const utils_1 = require("../utils/utils");
const const_1 = require("./const/const");
function mappingClient(client, authentication) {
    let options = {};
    const { username, password, host, port, queue } = authentication;
    switch (client) {
        case const_1.Client.RMQ:
            return (options = {
                transport: microservices_1.Transport.RMQ,
                options: {
                    urls: [`amqp://${username}:${password}@${host}:${port}`],
                    queue: queue,
                    queueOptions: {
                        durable: true,
                    },
                    persistent: true,
                    prefetchCount: 10,
                    isGlobalPrefetchCount: true,
                },
            });
        case const_1.Client.REDIS:
            return (options = {
                transport: microservices_1.Transport.REDIS,
                options: {
                    url: `redis://user:password@${host}:${port}`,
                },
            });
        default:
            break;
    }
}
function register(clientModule, serviceConfig) {
    return {
        module: clientModule.module,
        imports: [
            microservices_1.ClientsModule.registerAsync([
                {
                    name: serviceConfig.service,
                    useFactory: async (configService) => {
                        const authenticationClient = (0, utils_1.getAuthClient)(configService, serviceConfig.client);
                        if (serviceConfig.client === const_1.Client.RMQ) {
                            authenticationClient.queue = configService.get(`RABBIT_MQ_${serviceConfig.service}_QUEUE`);
                        }
                        const options = mappingClient(serviceConfig.client, authenticationClient);
                        return options;
                    },
                    inject: clientModule.inject,
                },
            ]),
        ],
        exports: clientModule.exports,
    };
}
exports.register = register;
//# sourceMappingURL=useFactory.js.map