import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Cart } from 'src/app/modules/home/models/Cart';
import { CartList } from 'src/app/modules/home/models/CartList';
import { Product } from 'src/app/modules/home/models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cart: BehaviorSubject<CartList> =
    new BehaviorSubject<CartList>(new CartList([]));

  private _cart: CartList = new CartList([]);

  public cart$ = this.cart.asObservable();
  constructor() {
    let cart = sessionStorage.getItem('cart');
    this._cart = cart ? new CartList(JSON.parse(cart).all) : new CartList([]);
    this.cart.next(this._cart);
  }

  addCart(product: Product) {
    const cartProduct = this._cart.all.find(
      (c) => c.product.product == product.product
    );
    !cartProduct
      ? this._cart.all.push({ product: product, quantity: 1 })
      : (cartProduct.quantity = cartProduct.quantity + 1);
    this.updateCart();
  }

  deleteProductCart(product: Product) {
    this._cart.all = this._cart.all.filter(
      (c) => c.product.product != product.product
    );
    this.updateCart();
  }

  updateCart() {
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
    this.cart.next(this._cart);
  }
}
