import { SortOrder } from 'mongoose';
export declare enum Language {
    VN = "vi",
    EN = "en"
}
export declare enum Client {
    RMQ = "RMQ",
    REDIS = "REDIS",
    TYPE_ORM = "TYPE_ORM"
}
export declare enum Service {
    USER = "USER",
    AUTH = "AUTH",
    SAGA = "SAGA",
    PRODUCT = "PRODUCT",
    ORDER = "ORDER",
    PAYMENT = "PAYMENT",
    CART = "CART"
}
export declare const MongoID: any;
export declare type SortQuery = {
    [key: string]: SortOrder;
};
