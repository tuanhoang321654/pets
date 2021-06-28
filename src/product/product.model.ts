import { IModel } from '../infrastructure/model.interface';

export class Product implements IModel {

  id: string;

  name: string;  
  productType: string;
  desc: string;
  owner: string;
  created: string;
  modified: string;
}
