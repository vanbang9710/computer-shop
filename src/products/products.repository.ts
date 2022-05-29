import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Product } from 'src/entities/product.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import {
  ConflictException,
  InternalServerErrorException,
} from '@nestjs/common';

@CustomRepository(Product)
export class ProductsRepository extends Repository<Product> {
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

    try {
      await this.save(product);
    } catch (error) {
      console.log(error);
      if (error.code === 'ER_DUP_ENTRY') {
        //duplicate name
        throw new ConflictException('Name already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return product;
  }

  async getProducts(
    filterDto: GetProductsFilterDto,
  ): Promise<number | Product[]> {
    const { name, manufacturer, limit, offset, count } = filterDto;
    const query = this.createQueryBuilder('product');

    if (name) {
      query.andWhere('(LOWER(product.name) LIKE LOWER(:name))', {
        name: `%${name}%`,
      });
    }

    if (manufacturer) {
      query.andWhere('LOWER(product.manufacturer) = LOWER(:manufacturer)', {
        manufacturer,
      });
    }

    if (count) {
      const { count } = await query
        .select('COUNT(product.id)', 'count')
        .getRawOne();
      return count;
    } else if (offset) {
      query.take(limit ?? Number.MAX_SAFE_INTEGER);
      query.skip(offset);
    } else if (limit) {
      query.take(limit);
    }

    const products = await query.getMany();
    return products;
  }

  // async updateProduct(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
  //   const product = await this.getProductById(id);

  //   const updatedProduct = { ...product, ...updateProductDto };
  //   await this.productsRepository.update(id, updatedProduct);
  //   return updatedProduct;
  // }
}
