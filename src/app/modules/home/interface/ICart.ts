import { Product } from '../models/Product';

export interface ICart {
  product: Product;
  quantity: number;
}
