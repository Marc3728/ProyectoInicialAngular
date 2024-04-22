import { Component } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductService } from 'src/app/services/product.service';
import { Cart } from '../../models/Cart';
import { CartService } from 'src/app/services/cart/cart.service';
import { CartList } from '../../models/CartList';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['../../../../app.component.scss', './cart.component.scss'],
})
export class CartComponent {
  cart: CartList = new CartList([]);
  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cart$.subscribe(
      (data) => {
        this.cart = data;
      },
      (error) => {
        console.log('Cant get data');
      }
    );
  }

  deleteProductCart(product: Product) {
    this.cartService.deleteProductCart(product);
  }
}
