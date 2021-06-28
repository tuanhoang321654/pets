describe('Product Service', () => {
  const { DocumentClient } = require('aws-sdk/clients/dynamodb');

  const isTest = process.env.JEST_WORKER_ID;
  const config = {
    convertEmptyValues: true,
    ...(isTest && {
      endpoint: 'localhost:8000',
      sslEnabled: false,
      region: 'local-env',
    }),
  };

  const ddb = new DocumentClient(config);

  beforeEach(async () => {});

  it('Cannot create if product is null', async () => {
    await ddb
      .put({ TableName: 'products', Item: { id: '1', hello: 'world' } })
      .promise();

    const { Item } = await ddb
      .get({ TableName: 'products', Key: { id: '1' } })
      .promise();

    expect(Item).toEqual({
      id: '1',
      hello: 'world',
    });
  });

  it('Create a product success', () => {});

  it('Cannot Delete a product if id is not found', () => {});

  it('Cannot Delete a success', () => {});
});
