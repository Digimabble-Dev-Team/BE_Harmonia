export declare class BaseController<T> {
    private readonly service;
    constructor(service: any);
    create(createDto: T): Promise<any>;
    findAll(): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateDto: T): Promise<any>;
    remove(id: string): Promise<any>;
}
