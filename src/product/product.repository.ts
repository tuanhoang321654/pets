import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { RepositoryBase } from  '../infrastructure/repositoryBase';

@Injectable()
export class ProductRepository extends RepositoryBase<Product>
{
    tableName(): string {
        return 'products';
    }

}