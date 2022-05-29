import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Put,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from 'src/entities/product.entity';
import { GetProductsFilterDto } from './dto/get-products-filter.dto';

@Controller('/api/products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post('/create')
  createProduct(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productsService.createProduct(createProductDto);
  }

  @Get()
  getProducts(
    @Query() filterDto: GetProductsFilterDto,
  ): Promise<Product[] | number> {
    // if (filterDto.count) {
    //   return this.productsService.countProducts(filterDto);
    // } else {
    return this.productsService.getProducts(filterDto);
    // }
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.getProductById(+id);
  }

  @Put(':id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    return this.productsService.updateProduct(+id, updateProductDto);
  }

  @Delete(':id')
  deleteProduct(@Param('id') id: string): Promise<void> {
    return this.productsService.deleteProduct(+id);
  }
}