import { DynamicModule } from '@nestjs/common';
import { IClientDynamicModule, IServiceConfig } from './interfaces/common.interfaces';
export declare function register(clientModule: IClientDynamicModule, serviceConfig: IServiceConfig): DynamicModule;
