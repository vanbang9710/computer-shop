import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsRepository } from './products.repository';
import { UpdateProductDto } from './dto/update-product.dto';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';
import { Product } from 'src/products/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsRepository)
    private productsRepository: ProductsRepository,
  ) {}

  createProduct(createProductDto: CreateProductDto): Promise<Product> {
    return this.productsRepository.createProduct(createProductDto);
  }

  getProducts(filterDto: GetProductsFilterDto): Promise<Product[] | number> {
    return this.productsRepository.getProducts(filterDto);
  }

  async getProductById(id: number): Promise<Product> {
    const found = await this.productsRepository.findOne({ where: { id: id } });

    if (!found) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }

    return found;
  }

  async updateProduct(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.productsRepository.findOne({
      where: { id: id },
    });
    if (!product) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
    // const updatedProduct = { ...product, ...updateProductDto };
    Object.assign(product, updateProductDto);
    try {
      // await this.productsRepository.update(id, updatedProduct);
      await this.productsRepository.save(product);
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

  async deleteProduct(id: number): Promise<void> {
    const result = await this.productsRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`Product with ID "${id}" not found`);
    }
  }
}
