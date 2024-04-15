import { Injectable } from '@angular/core';
import { ProductCart } from 'src/app/modules/home/interface/Cart';
import { Product } from 'src/app/modules/home/interface/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: ProductCart[] = this.getCart() ? this.getCart() : ([] as ProductCart[]);
  constructor() {}
  createCart() {
    sessionStorage.setItem('cart', JSON.stringify([]));
  }

  addCart(product: Product) {
    const cartProduct = this.cart.find(
      (c) => c.product.product == product.product
    );
    !cartProduct
      ? this.cart.push({ product: product, quantity: 1 })
      : (cartProduct.quantity = cartProduct.quantity + 1);

    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  deleteProductCart(product: Product) {
    this.cart = this.cart.filter((c) => c.product.product != product.product);
    sessionStorage.setItem('cart', JSON.stringify(this.cart));
  }

  getCart(): ProductCart[] {
    const cartData = sessionStorage.getItem('cart');
    return cartData != null ? JSON.parse(cartData) : [];
  }
}
