import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';
import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Order } from 'src/entities/order.entity';
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
      if (error.code === 'ER_DUP_ENTRY') {
        //duplicate name
        throw new ConflictException('Name already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return Order;
  }

  // async getOrders(
  //   filterDto: GetOrdersFilterDto,
  // ): Promise<number | Order[]> {
  //   const { name, manufacturer, limit, offset, count } = filterDto;
  //   const query = this.createQueryBuilder('Order');

  //   if (name) {
  //     query.andWhere('(LOWER(Order.name) LIKE LOWER(:name))', {
  //       name: `%${name}%`,
  //     });
  //   }

  //   if (manufacturer) {
  //     query.andWhere('LOWER(Order.manufacturer) = LOWER(:manufacturer)', {
  //       manufacturer,
  //     });
  //   }

  //   if (count) {
  //     const { count } = await query
  //       .select('COUNT(Order.id)', 'count')
  //       .getRawOne();
  //     return count;
  //   } else if (offset) {
  //     query.take(limit ?? Number.MAX_SAFE_INTEGER);
  //     query.skip(offset);
  //   } else if (limit) {
  //     query.take(limit);
  //   }

  //   const Orders = await query.getMany();
  //   return Orders;
  // }

  // async updateOrder(id: number, updateOrderDto: UpdateOrderDto): Promise<Order> {
  //   const Order = await this.getOrderById(id);

  //   const updatedOrder = { ...Order, ...updateOrderDto };
  //   await this.OrdersRepository.update(id, updatedOrder);
  //   return updatedOrder;
  // }
}
