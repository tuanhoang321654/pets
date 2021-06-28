import { ProductRepository } from './product.repository';
import { DocumentClient } from 'aws-sdk/clients/dynamodb';

function createDocumentClient() {
  const ddb = new DocumentClient({
    endpoint: 'localhost:8000',
    sslEnabled: false,
    region: 'local-env',
  });

  return ddb;
}

describe('Product Repository Service', () => {
  let productRepository: ProductRepository;

  beforeEach(() => {
    productRepository = new ProductRepository(createDocumentClient());
  });

  it('create a product success', async () => {
    const productNeedToBeCreated = {
      id: '1',
      desc: 'product-desc-1',
      name: 'product-1',
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

  it('cannot create product if the id is undefined', async () => {
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

    expect(createdProduct).toBeNull();
  });
});
