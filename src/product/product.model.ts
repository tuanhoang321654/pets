import { IModel } from '../infrastructure/model.interface';

export class Product implements IModel {

  id: string;

  name: string;  
  type: string;
  desc: string;
  owner: string;
  created: string;
  modified: string;
}
