import express from "express";
import { Category } from "../Entities/Category";

export const getCategory = async (req: express.Request, res: express.Response) => {
    try {
        const category = await Category.find()
        res.status(200).send({ data: category });
    } catch (err) {
        res.status(403).send({ message: err.message });
    }
};

export const addCategory = async (req: express.Request, res: express.Response) => {
    try {
        const { name } = req.body
        const addCategory = await Category.createQueryBuilder().insert().into(Category).values({ name }).returning('*').execute()
        res.status(200).send({ data: addCategory.raw[0] });
    } catch (err) {
        res.status(403).send({ message: err.message });
    }
}

module.exports = { getCategory, addCategory }