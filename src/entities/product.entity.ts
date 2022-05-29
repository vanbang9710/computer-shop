import { OrderDetail } from 'src/entities/order-detail.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @OneToMany(() => OrderDetail, (orderDetail) => orderDetail.product, {
    eager: true,
  })
  orderDetails: OrderDetail[];

  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    default: '1000',
  })
  quantity: number;

  @Column({
    type: 'varchar',
    // default: '',
    nullable: false,
    // charset: 'utf8mb3',
    // collation: 'utf8_general_ci',
    length: 161,
    unique: true,
  })
  name: string;

  @Column({
    type: 'varchar',
    // default: '',
    nullable: false,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 153,
  })
  thumb: string;

  @Column({
    // default: 'NULL',
    // nullable: true,
  })
  price: number;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 9,
  })
  manufacturer: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 54,
  })
  model: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 107,
  })
  color: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 181,
  })
  processor: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 80,
  })
  maxMemory: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 135,
  })
  graphicProcessor: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 175,
  })
  hardDrives: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 12,
  })
  optDrives: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 509,
  })
  securities: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 190,
  })
  display: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 70,
  })
  webcam: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 240,
  })
  audio: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 62,
  })
  wiredConnection: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 208,
  })
  wirelessConnection: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 435,
  })
  ports: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 111,
  })
  battery: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 117,
  })
  dimensions: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 56,
  })
  weight: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 130,
  })
  os: string;

  @Column({
    type: 'varchar',
    // default: 'NULL',
    nullable: true,
    charset: 'utf8mb3',
    collation: 'utf8_general_ci',
    length: 73,
  })
  accessories: string;
}
