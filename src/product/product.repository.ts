import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { RepositoryBase } from  '../infrastructure/repository.base';

@Injectable()
export class ProductRepository extends RepositoryBase<Product>
{
    tableName(): string {
        return 'products';
    }

}