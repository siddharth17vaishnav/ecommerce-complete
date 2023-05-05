import * as dotenv from "dotenv";
import { DataSource } from "typeorm";
import express from "express";
import cors from "cors";
import { config } from "../ormConfig";
import { userRouter } from "./Routes/UserRoutes";
import { CategoryRouter } from "./Routes/CategoryRoutes";
import { SubCategoryRouter } from "./Routes/SubCategoryRoutes";
import { ProductRouter } from "./Routes/ProductRoutes";
import { orderRouter } from "./Routes/OrderRoutes";
import { wishlistRouter } from "./Routes/WishListRoutes";


dotenv.config();
const app = express();
const PORT = 5000;

const main = async () => {
  const connection = new DataSource(config);
  connection
    .initialize()
    .then(() => {
      console.log(`DATABASE CONNECTED`);
      app.use(cors());
      app.use(express.json());
      app.use(userRouter);
      app.use(CategoryRouter)
      app.use(SubCategoryRouter)
      app.use(ProductRouter)
      app.use(orderRouter)
      app.use(wishlistRouter)

      app.listen(PORT, () => {
        console.log(`SERVER STARTED ON ${PORT}`);
      });
    })
    .catch((err) => {
      console.error(`DATABASE DOES NOT CONNECTED `, err);
    });
};

main().then();
