import Express from 'express';
import { WishList } from '../Entities/WishList';

export const WishListProduct = async (req: Express.Request, res: Express.Response) => {
    try {
        const { productId, type } = req.params
        const userId = req.app.get("userId")
        const operation = type === 'like' && true || type === 'dislike' && false
        await WishList.createQueryBuilder()
            .insert()
            .into(WishList)
            .values({ like: operation, product: +productId, user: userId })
            .onConflict(`("productId") DO UPDATE SET "like" = :like`)
            .setParameter("like", operation)
            .returning('*')
            .execute();
        res.status(200).send({ data: `${type} successfully` })
    }
    catch (err) {
        res.status(403).send({ message: err.message })
    }
}

export const GetWishListProductByUser = async (req: Express.Request, res: Express.Response) => {
    try {
        const userId = req.app.get("userId")
        const wishlistProducts = await WishList.findBy({ user: { id: userId } })
        res.send({ data: wishlistProducts })
    }
    catch (err) {
        res.status(403).send({ message: err.message })
    }
}