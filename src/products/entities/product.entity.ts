import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  name: string;
  @Column()
  thumb: string;
  @Column()
  price: number;
  @Column()
  manufacturer: string;
  @Column()
  model: string;
  @Column()
  color: string;
  @Column()
  processor: string;
  @Column()
  maxMemory: string;
  @Column()
  graphicProcessor: string;
  @Column()
  hardDrives: string;
  @Column()
  optDrives: string;
  @Column()
  display: string;
  @Column()
  webcam: string;
  @Column()
  audio: string;
  @Column()
  wiredConnection: string;
  @Column()
  wirelessConnection: string;
  @Column()
  ports: string;
  @Column()
  battery: string;
  @Column()
  dimensions: string;
  @Column()
  weight: string;
  @Column()
  os: string;
  @Column()
  accessories: string;
}
