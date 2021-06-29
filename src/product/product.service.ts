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

  async updateProduct(product: Product) {
    return await this.productRepository.create(product);
  }

  async getProductById(id: string): Promise<Product> {
    return await this.productRepository.getById(id);
  }

  async deleteProduct(): Promise<Boolean> {
    return false;
  }

  async getProducts(type: string): Promise<Product[]> {
    return await this.productRepository.getProducts(type);
  }
}
