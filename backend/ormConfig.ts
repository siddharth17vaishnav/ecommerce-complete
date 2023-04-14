import {DataSourceOptions} from "typeorm";

export const config:DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ecomm',
    password: 'asdfsfslkdjfsdjf',
    database: 'ecomm',
    synchronize: true,
    entities: [],
};