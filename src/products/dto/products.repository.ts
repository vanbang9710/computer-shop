import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@CustomRepository(Product)
export class ProductsRepository extends Repository<Product> {}
