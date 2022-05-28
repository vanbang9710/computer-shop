import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from './products.repository';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productsRepository.createProduct(createProductDto);
  }

  getProducts(filterDto: GetProductsFilterDto): Promise<Product[]> {
    return this.productsRepository.getProducts(filterDto);
  }

  async getProductById(id: number): Promise<Product> {
    const found = await this.productsRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }

    return found;
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return `This action updates a #${id} product`;
  }

  async deleteProduct(id: number): Promise<void> {
    const result = await this.productsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
  }
}
