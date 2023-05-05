import express from 'express'
import { Product } from '../Entities/Product';
import { OrderItems } from '../Entities/OrderItems';
import { Order } from '../Entities/Order';

export const addOrder = async (req: express.Request, res: express.Response) => {
    try {
        const { items } = req.body
        const totalAmount = items.reduce(async (acc: any, curr: any) => {
            const findProduct = await Product.findBy({ id: curr.id })
            return acc + (findProduct[0].price * curr.quantity)
        }, 0)
        let total = await totalAmount

        const order = await Order.createQueryBuilder()
            .insert()
            .into(Order)
            .values({ total: total })
            .returning("*")
            .execute()
        Array.from(items).map(async (item: any) => {
            const findProduct = await Product.findBy({ id: item.id })
            await OrderItems
                .createQueryBuilder()
                .insert()
                .into(OrderItems)
                .values({ product: findProduct[0], quantity: item.quantity, order: order.raw[0] })
                .returning("*")
                .execute()
        })
        res.status(200).send({ data: "Order Placed Successfully" })
    } catch (err) {
        res.status(403).send({ message: err.message });
    }
}

export const getOrder = async (req: express.Request, res: express.Response) => {
    try {
        const { id } = req.params
        const getOrder = await Order.find({ where: { id: id }, relations: { orderItems: { product: { productImages: true } } } })
        res.send({ data: getOrder[0] })
    } catch (err) {
        res.status(403).send({ message: err.message })
    }
}

export const getOrderByUser = async (req: express.Request, res: express.Response) => {
    try {
        const userId = req.app.get("userId");
        const orders = await Order.find({ where: { user: userId } })
        res.status(200).send({ data: orders })
    } catch (err) {
        res.status(403).send({ message: err.message })
    }
}