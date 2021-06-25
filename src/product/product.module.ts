import { Module } from '@nestjs/common';
import { ProductService } from './product.service';

@Module({
  imports: [ProductService],
})
export class ProductModule {}
