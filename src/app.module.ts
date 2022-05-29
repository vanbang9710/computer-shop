import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { ProductsRepository } from './products/products.repository';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrderDetailsModule } from './order-details/order-details.module';
import { configValidationSchema } from './config.schema';
import { OrdersModule } from './orders/orders.module';
import { CustomersModule } from './customers/customers.module';
import { Product } from './entities/product.entity';
import { Order } from './entities/order.entity';
import { OrderDetail } from './entities/order-detail.entity';
import { Customer } from './entities/customer.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    CustomersModule,
    OrderDetailsModule,
    OrdersModule,
    ProductsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'mysql',
        synchronize: true,
        // autoLoadEntities: true,
        // entities: [__dirname + '/**/*.entity.{js,ts}'],
        entities: [Product, Order, OrderDetail, Customer],
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_DATABASE'),
      }),
    }),
    TypeOrmExModule.forCustomRepository([ProductsRepository]),
  ],
})
export class AppModule {}
