import { DocumentClient, UpdateExpression } from 'aws-sdk/clients/dynamodb';
import { IModel } from './model.interface';

export abstract class RepositoryBase<TModel extends IModel> {
  constructor(protected documentClient: DocumentClient) {}

  abstract tableName(): string;

  public create(item: TModel): any {
    return this.documentClient.put({
      TableName: this.tableName(),
      Item: item,
    }).promise();
  }

  public update(item: TModel, expression: UpdateExpression): any {
    return this.documentClient.update({
      TableName: this.tableName(),
      Key: {
        id: item.id,
      },
      UpdateExpression: expression,
    });
  }

  public async getById(id: string): Promise<TModel> {
    const { Item } = await this.documentClient
      .get({
        TableName: this.tableName(),

        Key: {
          id: id,
        },
      })
      .promise();

    return <TModel>Item;
  }
}
