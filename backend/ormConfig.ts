import {DataSourceOptions} from "typeorm";
import {User} from "./src/Entities/User";

export const config:DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ecomm',
    password: 'asdfsfslkdjfsdjf',
    database: 'ecomm',
    synchronize: true,
    entities: [User],
};