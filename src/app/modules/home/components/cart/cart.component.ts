import { Component } from '@angular/core';
import { Product } from '../../interface/Product';
import { ProductService } from 'src/app/services/product.service';
import { ProductCart } from '../../interface/Cart';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../../../app.component.scss', './cart.component.scss'],
})
export class CartComponent {
  cart: ProductCart[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.getCart();
  }

  getCart() {
    window.alert('hola');
    this.cart = this.cartService.getCart();
  }

  deleteProductCart(product: Product) {
    this.cartService.deleteProductCart(product);
    this.getCart();
  }
}
