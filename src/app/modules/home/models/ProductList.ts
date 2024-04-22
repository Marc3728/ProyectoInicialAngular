import { IProductContract } from '../interface/IProductContract';
import { Product } from './Product';

export class ProductList {
  all: Product[];
  constructor(products: IProductContract[]) {
    this.all = products.map((product) => new Product(product));
  }
}
