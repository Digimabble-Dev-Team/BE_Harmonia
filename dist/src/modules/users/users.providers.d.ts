import { Sequelize } from 'sequelize-typescript';
export declare const usersProviders: {
    provide: string;
    useValue: typeof Sequelize;
}[];
