import { Column, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from './product.entity';

@Entity()
export class OrderDetail {
  @PrimaryColumn({ type: 'int', name: 'orderId' })
  @ManyToOne(() => Order, (order) => order.orderDetails, {
    eager: false,
  })
  // @Exclude({ toPlainOnly: true })
  order: Order;

  @PrimaryColumn({ type: 'int', name: 'productId' })
  @ManyToOne(() => Product, (product) => product.orderDetails, {
    eager: false,
  })
  // @Exclude({ toPlainOnly: true })
  product: Product;

  @Column()
  quantity: number;

  @Column()
  orderLine: number;
}
