import { ProductRepository } from './product.repository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';
import { exec } from 'child_process';

describe('Product Repository Service', () => {
  let productRepository: ProductRepository;

  beforeEach(() => {
    const ddb = new DocumentClient({
      endpoint: 'localhost:8000',
      sslEnabled: false,
      region: 'local-env',
    });
    productRepository = new ProductRepository(ddb);
  });

  it('create a product success', async () => {
    const productNeedToBeCreated = {
      id: '1',
      name: 'product-1',
      desc: 'product-desc-1',
      owner: 'owner-1',
      type: 'type-1',
      created: 'created-at-time-1',
      modified: 'modified-at-time-1',
    };

    await productRepository.create(productNeedToBeCreated);

    const createdProduct = await productRepository.getById(
      productNeedToBeCreated.id,
    );

    expect(createdProduct).toEqual(productNeedToBeCreated);
  });

  it('cannot create product because the id is undefined', async () => {
    const productNeedToBeCreated = {
      id: undefined,
      name: 'product-1',
      desc: 'product-desc-1',
      owner: 'owner-1',
      type: 'type-1',
      created: 'created-at-time-1',
      modified: 'modified-at-time-1',
    };

    await productRepository.create(productNeedToBeCreated);

    const createdProduct = await productRepository.getById(
      productNeedToBeCreated.id,
    );

    console.log('---- created product =', createdProduct);

    expect(createdProduct).toEqual(productNeedToBeCreated);
  });
});