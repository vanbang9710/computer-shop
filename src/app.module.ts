import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmExModule } from './database/typeorm-ex.module';
import { ProductsRepository } from './products/products.repository';
import { Product } from './products/entities/product.entity';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'mysql',
      database: 'productshop',
      // autoLoadEntities: true,
      synchronize: true,
      dropSchema: true,
      entities: [Product],
    }),
    TypeOrmExModule.forCustomRepository([ProductsRepository]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
