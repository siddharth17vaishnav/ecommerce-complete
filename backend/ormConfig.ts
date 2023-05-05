import { DataSourceOptions } from "typeorm";
import { User } from "./src/Entities/User";
import { Category } from "./src/Entities/Category";
import { SubCategory } from "./src/Entities/SubCategory";
import { Product } from "./src/Entities/Product";
import { ProductImages } from "./src/Entities/ProductImage";

export const config: DataSourceOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'ecomm',
    password: 'asdfsfslkdjfsdjf',
    database: 'ecomm',
    synchronize: true,
    entities: ["./src/Entities/**/*.ts"],
    logging: false
};