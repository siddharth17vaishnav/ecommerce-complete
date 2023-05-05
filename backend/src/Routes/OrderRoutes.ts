import express from 'express'
import { addOrder, getOrder, getOrderByUser } from '../controllers/OrderController'
import authenticateToken from '../Middleware/AuthenticateToken'
import { validateOrder } from '../Validation/orderValidation'

const router = express.Router()

router.post('/api/addorder', authenticateToken, validateOrder, addOrder)
router.get('/api/order/:id', authenticateToken, getOrder)
router.get('/api/orders', authenticateToken, getOrderByUser)

export { router as orderRouter }