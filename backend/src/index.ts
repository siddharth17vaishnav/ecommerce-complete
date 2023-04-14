import * as dotenv from 'dotenv'
import { DataSource } from 'typeorm';
import express from 'express';
import cors from 'cors';
import {config} from '../ormConfig'
import * as process from "process";

dotenv.config()
const app = express();
const PORT = 5000;

const main = async () => {
    const connection = new DataSource(config);
    connection
        .initialize()
        .then(() => {
            console.log(`DATABASE CONNECTED`);
            app.use(cors());

            app.listen(PORT, () => {
                console.log(`SERVER STARTED ON ${PORT}`);
            });
        })
        .catch((err) => {
            console.error(`DATABASE DOES NOT CONNECTED `, err);
        });
};

main().then();