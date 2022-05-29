// import { CustomRepository } from 'src/database/typeorm-ex.decorator';
// import { OrderDetail } from 'src/entities/order-detail.entity';
// import { Repository } from 'typeorm';
// import { CreateOrderDetailDto } from './dto/create-order-detail.dto';

// @CustomRepository(OrderDetail)
// export class OrderDetailsRepository extends Repository<OrderDetail> {
//   async createOrderDetail(createOrderDetailDto: CreateOrderDetailDto): Promise<OrderDetail> {
//     const {

//     } = createOrderDetailDto;

//     const OrderDetail = this.create({

//     });

//     try {
//       await this.save(OrderDetail);
//     } catch (error) {
//       console.log(error);
//       if (error.code === 'ER_DUP_ENTRY') {
//         //duplicate name
//         throw new ConflictException('Name already exists');
//       } else {
//         throw new InternalServerErrorException();
//       }
//     }
//     return OrderDetail;
//   }

//   // async getOrderDetails(
//   //   filterDto: GetOrderDetailsFilterDto,
//   // ): Promise<number | OrderDetail[]> {
//   //   const { name, manufacturer, limit, offset, count } = filterDto;
//   //   const query = this.createQueryBuilder('OrderDetail');

//   //   if (name) {
//   //     query.andWhere('(LOWER(OrderDetail.name) LIKE LOWER(:name))', {
//   //       name: `%${name}%`,
//   //     });
//   //   }

//   //   if (manufacturer) {
//   //     query.andWhere('LOWER(OrderDetail.manufacturer) = LOWER(:manufacturer)', {
//   //       manufacturer,
//   //     });
//   //   }

//   //   if (count) {
//   //     const { count } = await query
//   //       .select('COUNT(OrderDetail.id)', 'count')
//   //       .getRawOne();
//   //     return count;
//   //   } else if (offset) {
//   //     query.take(limit ?? Number.MAX_SAFE_INTEGER);
//   //     query.skip(offset);
//   //   } else if (limit) {
//   //     query.take(limit);
//   //   }

//   //   const OrderDetails = await query.getMany();
//   //   return OrderDetails;
//   // }

//   // async updateOrderDetail(id: number, updateOrderDetailDto: UpdateOrderDetailDto): Promise<OrderDetail> {
//   //   const OrderDetail = await this.getOrderDetailById(id);

//   //   const updatedOrderDetail = { ...OrderDetail, ...updateOrderDetailDto };
//   //   await this.OrderDetailsRepository.update(id, updatedOrderDetail);
//   //   return updatedOrderDetail;
//   // }
// }
