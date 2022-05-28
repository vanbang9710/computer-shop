import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@CustomRepository(Product)
export class ProductsRepository extends Repository<Product> {
  async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    const { name, manufacturer } = filterDto;
    const query = this.createQueryBuilder('product');

    if (name) {
    }

    if (manufacturer) {
    }

    const products = await query.getMany();
    return products;
  }
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const {
      quantity,
      name,
      thumb,
      price,
      manufacturer,
      model,
      color,
      processor,
      maxMemory,
      graphicProcessor,
      hardDrives,
      optDrives,
      securities,
      display,
      webcam,
      audio,
      wiredConnection,
      wirelessConnection,
      ports,
      battery,
      dimensions,
      weight,
      os,
      accessories,
    } = createProductDto;

    const product = this.create({
      quantity,
      name,
      thumb,
      price,
      manufacturer,
      model,
      color,
      processor,
      maxMemory,
      graphicProcessor,
      hardDrives,
      optDrives,
      securities,
      display,
      webcam,
      audio,
      wiredConnection,
      wirelessConnection,
      ports,
      battery,
      dimensions,
      weight,
      os,
      accessories,
    });

    await this.save(product);
    return product;
  }
}
