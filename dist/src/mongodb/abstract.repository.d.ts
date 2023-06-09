import { Logger } from '@nestjs/common';
import { Connection, FilterQuery, Model, UpdateQuery } from 'mongoose';
import { BaseInterfaceSchema } from '../common';
export declare abstract class AbstractRepository<TDocument> implements BaseInterfaceSchema<TDocument> {
    protected readonly model: Model<TDocument>;
    private readonly connection;
    protected abstract readonly logger: Logger;
    constructor(model: Model<TDocument>, connection: Connection);
    create(document: Omit<TDocument, '_id'>): Promise<TDocument>;
    findOne(filterQuery: FilterQuery<TDocument>): Promise<TDocument>;
    findOneAndUpdate(filterQuery: FilterQuery<TDocument>, update: UpdateQuery<TDocument>): Promise<any>;
    upsert(filterQuery: FilterQuery<TDocument>, document: Partial<TDocument>): Promise<any>;
    find(filterQuery: FilterQuery<TDocument>): Promise<any>;
    startTransaction(): Promise<any>;
}
