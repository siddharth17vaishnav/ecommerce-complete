import { DataSourceOptions } from "typeorm";
import { User } from "./src/Entities/User";
import { Category } from "./src/Entities/Category";
import { SubCategory } from "./src/Entities/SubCategory";

export const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ecomm',
    password: 'asdfsfslkdjfsdjf',
    database: 'ecomm',
    synchronize: true,
    entities: [User, Category, SubCategory],
};