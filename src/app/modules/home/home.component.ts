import { Component, OnInit } from '@angular/core';

import { Product } from './interface/Product';
import { products } from 'src/app/DataJson';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { ProductCart } from './interface/Cart';

type Filter = 'lessPrice' | 'morePrice' | 'topRating';
type Filters = {
  [key in Filter]: () => void;
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.scss'],
})
export class HomeComponent {
  defaultProducts: Product[] = [];
  products: Product[] = [];
  product: Product = {} as Product;
  activeFilter = '';
  isInCart = false;
  private defaultProductIndex = 0;
  private filterPrice = 2;
  private filterTopRating = 5;
  private cart: ProductCart[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCart();
    this.checkAddedCart();
  }

  filterList: Filters = {
    lessPrice: () => {
      this.products = this.defaultProducts.filter(
        (product) => product.price < this.filterPrice
      );
    },
    morePrice: () => {
      this.products = this.defaultProducts.filter(
        (product) => product.price >= this.filterPrice
      );
    },
    topRating: () => {
      this.products = this.defaultProducts.filter(
        (product) => product.rating == this.filterTopRating
      );
    },
  };

  changeFilter(filter: string) {
    if (filter == '' || this.activeFilter == filter) {
      this.activeFilter = '';
      this.products = this.defaultProducts;
      return;
    }

    this.activeFilter = filter;
    this.filterList[filter as Filter]();
  }

  changeProduct(productChange: Product) {
    this.product = productChange;
    this.checkAddedCart();
  }

  changeFavoriteStatus(product: Product) {
    product.favorite = !product.favorite;
  }

  deleteProduct(product: Product) {
    this.productService.deleteProduct(product);
    this.changeProduct(this.products[this.defaultProductIndex]);
  }
  checkAddedCart() {
    this.isInCart =
      this.cart.find((p) => p.product.product == this.product.product) !=
      undefined;
  }

  addCart(product: Product) {
    window.alert('add');
    this.cartService.addCart(product);
    window.alert(this.cart);
    this.checkAddedCart();
  }

  private loadCart() {
    this.cartService.cart$.subscribe(
      (data) => {
        this.cart = data;
      },
      (error) => {
        console.log('Cant get data');
      }
    );
  }

  private loadProducts() {
    this.productService.getProducts();
    this.productService.products$.subscribe(
      (data) => {
        this.defaultProducts = data;
        this.products = [...this.defaultProducts];
        this.product = this.products[this.defaultProductIndex];
      },
      (error) => {
        console.log('Cant get data');
      }
    );
  }
}
