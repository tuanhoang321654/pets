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

function createProductObject(id: string, type: string) {
  const productNeedToBeCreated = {
    id: id,
    desc: 'product-desc-' + id,
    name: 'product-' + id,
    owner: 'owner-' + id,
    productType: type,
    created: 'created-at-time-' + id,
    modified: 'modified-at-time-' + id,
  };

  return productNeedToBeCreated;
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
      productType: 'type-1',
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
      productType: 'type-1',
      created: 'created-at-time-1',
      modified: 'modified-at-time-1',
    };

    await productRepository.create(productNeedToBeCreated);

    const createdProduct = await productRepository.getById(
      productNeedToBeCreated.id,
    );

    expect(createdProduct).toBeNull();
  });

  it('', async () => {
    await productRepository.create(createProductObject('1', 'type-a'));
    await productRepository.create(createProductObject('2', 'type-a'));
    await productRepository.create(createProductObject('3', 'type-a'));
    await productRepository.create(createProductObject('4', 'type-b'));

    const res = await productRepository.getProducts('type-a');

    expect(res).toEqual([
      {
        owner: 'owner-2',
        created: 'created-at-time-2',
        name: 'product-2',
        modified: 'modified-at-time-2',
        id: '2',
        productType: 'type-a',
        desc: 'product-desc-2',
      },
      {
        owner: 'owner-3',
        created: 'created-at-time-3',
        name: 'product-3',
        modified: 'modified-at-time-3',
        id: '3',
        productType: 'type-a',
        desc: 'product-desc-3',
      },
      {
        owner: 'owner-1',
        created: 'created-at-time-1',
        name: 'product-1',
        modified: 'modified-at-time-1',
        id: '1',
        productType: 'type-a',
        desc: 'product-desc-1',
      },
    ]);

  });
});
