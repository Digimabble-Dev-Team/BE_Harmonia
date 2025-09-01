import { Repository, FindManyOptions, FindOneOptions, UpdateResult, EntityManager } from 'typeorm';
export declare abstract class BaseService<T> {
    protected readonly entityManager: EntityManager;
    protected abstract repository: Repository<T>;
    constructor(entityManager: EntityManager);
    create(data: any): Promise<T>;
    bulkCreate(data: Partial<T>[]): Promise<T[]>;
    findAll(options?: FindManyOptions<T>): Promise<T[]>;
    findAllWithPagination(page: number, limit: number, options?: FindManyOptions<T>): Promise<{
        data: T[];
        total: number;
    }>;
    findAndCountAll(options?: FindManyOptions<T>): Promise<[T[], number]>;
    findOne(id?: string | number, options?: FindOneOptions<T>): Promise<T | null>;
    update(id: string | number, data: any): Promise<UpdateResult>;
    remove(id: number): Promise<UpdateResult>;
    destroy(id: string): Promise<void>;
    count(options?: FindManyOptions<T>): Promise<number>;
}
