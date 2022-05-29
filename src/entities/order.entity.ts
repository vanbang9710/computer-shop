import { Exclude } from 'class-transformer';
import { OrderStatus } from 'src/orders/order-status.enum';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OrderDetail } from './order-detail.entity';

@Entity()
export class Order {
  // @ManyToOne(() => Customer, (customer) => customer.orders, {
  //   eager: false,
  // })
  // @Exclude({ toPlainOnly: true })
  // customer: Customer;

  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.order, {
    eager: true,
  })
  orderDetails: OrderDetail[];

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  orderDate: Date;

  @Column()
  orderStatus: OrderStatus;

  @Column()
  @Exclude({ toPlainOnly: true })
  firstName: string;

  @Column()
  @Exclude({ toPlainOnly: true })
  lastName: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column()
  address: string;
}
