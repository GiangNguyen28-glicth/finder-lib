"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmSQLModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const const_1 = require("../common/const/const");
const utils_1 = require("../utils/utils");
let TypeOrmSQLModule = class TypeOrmSQLModule {
};
TypeOrmSQLModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => {
                    const authentication = (0, utils_1.getAuthClient)(configService, const_1.Client.TYPE_ORM);
                    return {
                        type: configService.get('TYPE_SQL'),
                        host: authentication.host,
                        username: authentication.username,
                        password: authentication.password,
                        synchronize: true,
                        autoLoadEntities: true,
                        database: configService.get('DATABASE'),
                    };
                },
                inject: [config_1.ConfigService],
            }),
        ],
    })
], TypeOrmSQLModule);
exports.TypeOrmSQLModule = TypeOrmSQLModule;
//# sourceMappingURL=typeorm.module.js.map