import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { OrdersRepository } from './order.repository';

@Module({
  exports: [OrdersService],
  imports: [TypeOrmExModule.forCustomRepository([OrdersRepository])],
  controllers: [OrdersController],
  providers: [OrdersService],
})
export class OrdersModule {}
