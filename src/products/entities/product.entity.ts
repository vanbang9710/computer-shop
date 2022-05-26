import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: string;
  @Column({ unique: true })
  name: string;
  @Column({ default: '' })
  thumb: string;
  @Column()
  price: number;
  @Column({ default: '' })
  manufacturer: string;
  @Column({ default: '' })
  model: string;
  @Column({ default: '' })
  color: string;
  @Column({ default: '' })
  processor: string;
  @Column({ default: '' })
  maxMemory: string;
  @Column({ default: '' })
  graphicProcessor: string;
  @Column({ default: '' })
  hardDrives: string;
  @Column({ default: '' })
  optDrives: string;
  @Column({ default: '' })
  display: string;
  @Column({ default: '' })
  webcam: string;
  @Column({ default: '' })
  audio: string;
  @Column({ default: '' })
  wiredConnection: string;
  @Column({ default: '' })
  wirelessConnection: string;
  @Column({ type: 'varchar', length: 500 })
  ports: string;
  @Column({ default: '' })
  battery: string;
  @Column({ default: '' })
  dimensions: string;
  @Column({ default: '' })
  weight: string;
  @Column({ default: '' })
  os: string;
  @Column({ default: '' })
  accessories: string;
}
