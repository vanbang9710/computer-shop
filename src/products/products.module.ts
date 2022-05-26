import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { ProductsRepository } from './products.repository';

@Module({
  exports: [ProductsService],
  imports: [TypeOrmExModule.forCustomRepository([ProductsRepository])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule {}
