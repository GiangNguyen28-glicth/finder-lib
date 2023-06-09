import { DynamicModule } from '@nestjs/common';
interface RmqModuleOptions {
    name: string;
}
export declare class RabbitModule {
    static register({ name }: RmqModuleOptions): DynamicModule;
}
export {};
