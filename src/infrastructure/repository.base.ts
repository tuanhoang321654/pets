import { DocumentClient, UpdateExpression } from 'aws-sdk/clients/dynamodb';
import { IModel } from './model.interface';

export abstract class RepositoryBase<TModel extends IModel> {
  constructor(protected documentClient: DocumentClient) {}

  abstract tableName(): string;

  public async create(item: TModel): Promise<any> {
    try {
      return await this.documentClient
        .put({
          TableName: this.tableName(),
          Item: item
        })
        .promise();
    } catch (e) {     

      return null;
    }
  }

  public async update(
    item: TModel,
    expression: UpdateExpression,
  ): Promise<any> {
    try {
      return await this.documentClient
        .update({
          TableName: this.tableName(),
          Key: {
            id: item.id,
          },
          UpdateExpression: expression,
        })
        .promise();
    } catch {
      return null;
    }
  }

  public async getById(id: string): Promise<TModel> {
    try {
      const { Item } = await this.documentClient
        .get({
          TableName: this.tableName(),

          Key: {
            id: id,
          },
        })
        .promise();

      return <TModel>Item;
    } catch {
      return null;
    }
  }
}
