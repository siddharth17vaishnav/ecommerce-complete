import express from 'express'
import { Category } from '../Entities/Category';
import { Product } from '../Entities/Product';
import { ProductImages } from '../Entities/ProductImage';

export const addProduct = async (req: express.Request, res: any) => {
    try {
        const files = req.files as any
        const { name, description, price, categoryID } = req.body
        const findCategory = await Category.findBy({ id: categoryID })

        if (!findCategory) {
            return res.status(404).json({ message: 'Category not found' })
        }
        else {
            const product = await Product.createQueryBuilder()
                .insert()
                .into(Product)
                .values({ name, description, price, category: findCategory[0] })
                .returning("*")
                .execute()

            Array.from(files)?.map(async (file: any) => {
                const productImages = new ProductImages()
                productImages.name = file.filename.replaceAll(" ", "")
                productImages.product = product.raw[0]
                ProductImages.save(productImages)
            })
            if (!product) {
                res.status(403).send({ data: 'Something went wrong! ' })
            }
            else {
                res.status(200).send({ data: 'added' })
            }
        }
    }
    catch (err) {
        res.status(403).send({ message: err.message });
    }
}

export const getProductById = async (req: express.Request, res: any) => {
    try {
        const { id } = req.params
        const product = await Product.find({
            where: { id: id },
            relations: { productImages: true, category: true }
        })
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        } else {
            res.status(200).send({ data: product })
        }
    }
    catch (err) {
        console.log(err)
        res.status(403).send({ message: err.message });
    }
}

export const getProducts = async (req: express.Request, res: any) => {
    try {
        const { id } = req.params
        const product = await Product.find()
        if (!product) {
            return res.status(404).json({ message: 'Product not found' })
        } else {
            res.status(200).send({ data: product })
        }
    }
    catch (err) {
        res.status(403).send({ message: err.message });
    }
}



module.exports = { addProduct, getProductById, getProducts }