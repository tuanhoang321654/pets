import { Injectable } from '@nestjs/common';
import { Product } from './product.model';
import { RepositoryBase } from '../infrastructure/repository.base';

@Injectable()
export class ProductRepository extends RepositoryBase<Product> {
  tableName(): string {
    return 'products';
  }

  public async getProducts(type: string): Promise<Product[]> {
    try {
      const res = await this.documentClient
        .query({
          TableName: this.tableName(),
          IndexName: 'type-gsi',
          KeyConditionExpression: 'productType = :productType',
          ExpressionAttributeValues: {
            ':productType': type,
          },

          ScanIndexForward: false,
        })
        .promise();

      return <Product[]>res.Items;
    } catch (e) {
      console.log('----Error------------', e);

      return null;
    }
  }
}
