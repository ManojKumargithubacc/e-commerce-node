import express from 'express';
import { placeOrder, getOrders } from '../controllers/ordersController.js';

const router = express.Router();

router.post('/orders', placeOrder);
router.get('/orders', getOrders);

export default router;
