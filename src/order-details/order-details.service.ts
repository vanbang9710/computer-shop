import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';
import { OrderDetailsRepository } from './order-details.repository';

@Injectable()
export class OrderDetailsService {
  constructor(
    @InjectRepository(OrderDetailsRepository)
    private orderDetailsRepository: OrderDetailsRepository,
  ) {}

  createOrderDetails(
    createOrderDetailsDto: CreateOrderDetailDto,
  ): Promise<void> {
    return this.orderDetailsRepository.createOrderDetails(
      createOrderDetailsDto,
    );
  }

  findAll() {
    return `This action returns all orderDetails`;
  }

  findOne(id: number) {
    return `This action returns a #${id} orderDetail`;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  update(id: number, updateOrderDetailDto: UpdateOrderDetailDto) {
    return `This action updates a #${id} orderDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} orderDetail`;
  }
}
