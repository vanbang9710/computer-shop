import { Module } from '@nestjs/common';
import { OrderDetailsService } from './order-details.service';
import { OrderDetailsController } from './order-details.controller';
import { TypeOrmExModule } from 'src/database/typeorm-ex.module';
import { OrderDetailsRepository } from './order-details.repository';

@Module({
  exports: [OrderDetailsService],
  imports: [TypeOrmExModule.forCustomRepository([OrderDetailsRepository])],
  controllers: [OrderDetailsController],
  providers: [OrderDetailsService],
})
export class OrderDetailsModule {}
