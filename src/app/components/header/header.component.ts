import { Component } from '@angular/core';
import { CartComponent } from 'src/app/modules/home/components/cart/cart.component';
import { ProductCart } from 'src/app/modules/home/interface/Cart';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../app.component.scss'],
})
export class HeaderComponent {
  cart: ProductCart[] = [];
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
