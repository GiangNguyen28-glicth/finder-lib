import { OnModuleDestroy } from '@nestjs/common';
import { Cache } from 'cache-manager';
export declare class RedisService implements OnModuleDestroy {
    private readonly cache;
    constructor(cache: Cache);
    get(key: string): Promise<any>;
    set(key: string, value: unknown): Promise<void>;
    del(key: string): Promise<void>;
    onModuleDestroy(): void;
}
