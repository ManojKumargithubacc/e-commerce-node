import Order from '../models/ordersModel.js';
import User from '../models/userModel.js';
import Product from '../models/productModel.js';

export const createOrderService = async (userId, items, address) => {
    try {
      const order = new Order({ userId, items, address });
      await order.save();
  
      await User.findByIdAndUpdate(
        userId,
        { $push: { orders: order._id } },
        { new: true }
      );
  
      return order;
    } catch (error) {
      console.error("Error creating order:", error);
      throw new Error("Failed to create order");
    }
  };

  export const getOrdersByUserIdService = async (userId) => {
    try {
      const user = await User.findById(userId);
      if (!user) {
        throw new Error("User not found");
      }
      const orders = await Order.find({ userId }).populate('items.productId');
      return orders;
    } catch (error) {
      throw new Error("Error fetching orders: " + error.message);
    }
  };