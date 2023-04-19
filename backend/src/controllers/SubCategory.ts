import express from "express";
import { SubCategory } from "../Entities/SubCategory";
import { Category } from "../Entities/Category";


export const addSubCategory = async (req: express.Request, res: express.Response) => {
    try {
        const { categoryID, name } = req.body
        const category = await Category.findBy({ id: categoryID })
        const subcategory = await SubCategory.findBy({ name: name })
        if (!category.length) {
            res.status(200).send({ data: 'No Category Found' })
        }
        else if (subcategory.length) {
            res.status(200).send({ data: 'SubCategory already exists' })
        }
        else {
            const subCategory = new SubCategory();
            subCategory.name = name
            subCategory.category = category[0]
            await SubCategory.save(subCategory)
            res.status(200).send({ data: 'added' })
        }
    } catch (err) {
        res.status(403).send({ message: err.message });
    }
}

export const getSubCategories = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.body
        const subcategory = await SubCategory.find({ relations: { category: true }, where: { category: { id: id } } })
        res.status(200).send({ data: subcategory })
    }
    catch (err) {
        res.status(403).send({ message: err.message });
    }
}

module.exports = { addSubCategory, getSubCategories }