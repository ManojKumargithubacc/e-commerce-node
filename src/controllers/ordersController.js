import { createOrderService, getOrdersByUserIdService } from '../service/ordersService.js';
import { STATUS_CODES, MESSAGES } from '../constants/constants.js';

export const placeOrder = async (req, res) => {
    try {
      const { items, address } = req.body;
      const userId = req.query.userId;
  
      if (!userId) {
        return res.status(400).json({ error: "User ID is required" });
      }
  
      const order = await createOrderService(userId, items, address);
  
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json(MESSAGES.SERVER_ERROR);
    }
  };

  export const getOrders = async (req, res) => {
    try {
      const userId = req.query.userId;
      const orders = await getOrdersByUserIdService(userId);
      res.status(STATUS_CODES.SUCCESS).json(orders);
    } catch (error) {
      console.error(error.message);
      res.status(STATUS_CODES.SERVER_ERROR).json(MESSAGES.SERVER_ERROR);
    }
  };
