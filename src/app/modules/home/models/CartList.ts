import { ICartContract } from '../interface/ICartContract';
import { IProductContract } from '../interface/IProductContract';
import { Cart } from './Cart';
import { Product } from './Product';

export class CartList {
  all: Cart[];
  constructor(cart: ICartContract[]) {
    this.all = cart.map((cartItem) => new Cart(cartItem));
  }
}
