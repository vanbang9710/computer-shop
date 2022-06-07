import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { ProductsRepository } from './products/products.repository';
import { ProductsModule } from './products/products.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { OrderDetailsModule } from './order-details/order-details.module';
import { configValidationSchema } from './config.schema';
import { OrdersModule } from './orders/orders.module';
import { Product } from './products/product.entity';
import { Order } from './orders/order.entity';
import { OrderDetail } from './order-details/order-detail.entity';
import { OrdersRepository } from './orders/order.repository';
import { OrderDetailsRepository } from './order-details/order-details.repository';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: [`.env.stage.${process.env.STAGE}`],
      validationSchema: configValidationSchema,
    }),
    // CustomersModule,
    OrderDetailsModule,
    OrdersModule,
    ProductsModule,
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        const isProduction = configService.get('STAGE') === 'prod';

        return {
          ssl: isProduction,
          extra: {
            ssl: isProduction ? { rejectUnauthorized: false } : null,
          },
          type: 'mysql',
          synchronize: true,
          // autoLoadEntities: true,
          // entities: [__dirname + '/**/*.entity.{js,ts}'],
          entities: [Product, Order, OrderDetail],
          host: configService.get('DB_HOST'),
          port: configService.get('DB_PORT'),
          username: configService.get('DB_USERNAME'),
          password: configService.get('DB_PASSWORD'),
          database: configService.get('DB_DATABASE'),
        };
      },
    }),
    TypeOrmExModule.forCustomRepository([
      ProductsRepository,
      OrdersRepository,
      OrderDetailsRepository,
    ]),
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
