import { Injectable } from '@nestjs/common';
import { Product } from './product.model';


@Injectable()
export class ProductService {  

  createProduct(product: Product): Product {
    console.log('create product');

    return null;
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
