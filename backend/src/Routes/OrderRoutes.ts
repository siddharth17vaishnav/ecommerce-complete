import express from 'express'
import { addOrder, getOrder, getOrderByUser } from '../controllers/OrderController'
import authenticateToken from '../Middleware/AuthenticateToken'

const router = express.Router()

router.post('/api/addorder', authenticateToken, addOrder)
router.get('/api/order/:id', authenticateToken, getOrder)
router.get('/api/orders', authenticateToken, getOrderByUser)

export { router as orderRouter }