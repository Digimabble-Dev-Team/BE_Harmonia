import { SelectQueryBuilder } from 'typeorm';
export declare function applyDynamicConditions(qb: SelectQueryBuilder<any>, conditions: {
    [key: string]: any;
}): SelectQueryBuilder<any>;
export declare function buildFilters(query: Record<string, any>): Record<string, any>;
