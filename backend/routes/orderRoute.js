import express from 'express'
import authMiddleware from '../middleware/auth.js'
import { confirmPayment, createOrder, getAllOrders, getOrderById, getOrders, updateAnyOrder, updateOrder } from '../controllers/orderController.js';

const orderRouter = express.Router();

orderRouter.get('/getall',getAllOrders)
orderRouter.put('/getall/:id', updateAnyOrder)

//protect rest using middleware so only admin can access it
orderRouter.use(authMiddleware)
orderRouter.post('/',createOrder)
orderRouter.get('/',getOrders)
orderRouter.get('/confirm',confirmPayment)
orderRouter.get('/:id', getOrderById)
orderRouter.put('/:id', updateOrder)


export default orderRouter
 