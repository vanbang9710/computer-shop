import { CustomRepository } from 'src/database/typeorm-ex.decorator';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
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
      if (error.code === 'ER_DUP_ENTRY') {
        //duplicate name
        throw new ConflictException('Name already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
    return product;
  }

  async getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    const { name, manufacturer } = filterDto;
    const query = this.createQueryBuilder('product');

    if (name) {
      query.andWhere('(LOWER(product.name) LIKE LOWER(:name))', {
        name: `%${name}%`,
      });
    }

    if (manufacturer) {
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
