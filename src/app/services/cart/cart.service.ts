import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ProductCart } from 'src/app/modules/home/interface/Cart';
import { Product } from 'src/app/modules/home/interface/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly cart: BehaviorSubject<ProductCart[]> = new BehaviorSubject<
    ProductCart[]
  >([]);

  private _cart: ProductCart[] = [];

  public cart$ = this.cart.asObservable();
  constructor() {
    let cart = sessionStorage.getItem('cart');
    this._cart = cart ? JSON.parse(cart) : [];
    this.cart.next(this._cart);
  }

  addCart(product: Product) {
    const cartProduct = this._cart.find(
      (c) => c.product.product == product.product
    );
    !cartProduct
      ? this._cart.push({ product: product, quantity: 1 })
      : (cartProduct.quantity = cartProduct.quantity + 1);
    this.updateCart();
  }

  deleteProductCart(product: Product) {
    this._cart = this._cart.filter((c) => c.product.product != product.product);
    this.updateCart();
  }

  updateCart() {
    sessionStorage.setItem('cart', JSON.stringify(this._cart));
    this.cart.next(this._cart);
  }
}
