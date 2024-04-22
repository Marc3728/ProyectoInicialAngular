import { Component } from '@angular/core';
import { CartComponent } from 'src/app/modules/home/components/cart/cart.component';
import { Cart } from 'src/app/modules/home/models/Cart';
import { CartList } from 'src/app/modules/home/models/CartList';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss'],
})
export class HeaderComponent {
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
}
