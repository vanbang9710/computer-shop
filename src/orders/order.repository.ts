import {
  BadRequestException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Order } from 'src/orders/order.entity';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';

@CustomRepository(Order)
export class OrdersRepository extends Repository<Order> {
  async createOrder(createOrderDto: CreateOrderDto): Promise<Order> {
    const {
      orderDate,
      orderStatus,
      firstName,
      lastName,
      phone,
      email,
      address,
    } = createOrderDto;

    const Order = this.create({
      orderDate,
      orderStatus,
      firstName,
      lastName,
      phone,
      email,
      address,
    });

    try {
      await this.save(Order);
    } catch (error) {
      console.log(error);
      if (error.code === 'ER_TRUNCATED_WRONG_VALUE') {
        //duplicate name
        throw new BadRequestException(
          'orderDate must be a valid ISO 8601 date string',
        );
      } else {
        throw new InternalServerErrorException();
      }
    }
    return Order;
  }

  async getOrders(): Promise<Order[]> {
    const query = this.createQueryBuilder('Order');
    const Orders = await query.getMany();
    return Orders;
  }

  // async updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
  //   const Order = await this.getOrderById(id);

  //   const updatedOrder = { ...Order, ...updateOrderDto };
  //   await this.OrdersRepository.update(id, updatedOrder);
  //   return updatedOrder;
  // }
}
