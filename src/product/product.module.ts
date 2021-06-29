import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductRepository } from './product.repository';

@Module({  
  providers: [ProductRepository, ProductService],
})
export class ProductModule {}
