import { OneToMany } from 'typeorm';
import { Product } from './product.entity';

export class OrderDetail {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  // @OneToMany((_type) => Product, (product) => product.orderDetail, {
  //   eager: true,
  // })
  // products: Product[];
}
