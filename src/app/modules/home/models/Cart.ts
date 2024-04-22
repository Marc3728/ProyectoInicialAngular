import { ICart } from '../interface/ICart';
import { ICartContract } from '../interface/ICartContract';
import { IProductContract } from '../interface/IProductContract';

export class Cart implements ICart {
  product: IProductContract;
  quantity: number;
  constructor(cart: ICartContract) {
    this.product = cart.product;
    this.quantity = cart.quantity;
  }
}
