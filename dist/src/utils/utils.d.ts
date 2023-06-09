import { ConfigService } from '@nestjs/config';
import { Client } from '../common/const/const';
import { IAuthenticationClient } from '../common/interfaces/common.interfaces';
export declare function getAuthClient(configService: ConfigService, clientType: Client): IAuthenticationClient;
export declare function throwIfNotExists<T>(model: T | any | undefined, message: string): void;
export declare function toSlug(text: string, locale?: string): string;
export declare function toKeyword(text: string): string;
export declare function transformTextSearch(text: string): string;
