import { DocumentClient } from 'aws-sdk/clients/dynamodb';

describe('Product Service', () => {
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

  it('Cannot create if product is null', async () => {});

  it('Create a product success', () => {});

  it('Cannot Delete a product if id is not found', () => {});

  it('Cannot Delete a success', () => {});
});
