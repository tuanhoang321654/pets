import { Injectable } from '@nestjs/common';
import {} from '../infrastructure/model.interface';
import { Product } from './product.model';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private productRepository: ProductRepository) {}

  async createProduct(product: Product): Promise<Product> {
    return await this.productRepository.create(product);    
  }

  updateProduct(product: Product) {
    console.log('update product');

    return null;
  }

  getProductById(id: string): Product {
    return null;
  }

  deleteProduct(): Boolean {
    return false;
  }

  getProducts(type: string): Product[] {
    return [];
  }
}
