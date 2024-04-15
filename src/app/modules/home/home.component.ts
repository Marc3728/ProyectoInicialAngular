import { Component, OnInit } from '@angular/core';

import { Product } from './interface/Product';
import { products } from 'src/app/DataJson';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart/cart.service';

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
  defaultProductIndex = 0;
  defaultProducts: Product[] = [];
  products: Product[] = [];
  product: Product = {} as Product;
  filterPrice = 2;
  filterTopRating = 5;
  activeFilter = '';
  isInCart = false;

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.checkAddedCart();
    this.cartService.cart.length == 0 ? this.cartService.createCart() : null;
  }

  loadProducts() {
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
    if (this.isLastProduct()) {
      return;
    }

    this.products.splice(this.products.indexOf(product), 1);
    this.product = this.products[this.defaultProductIndex];
  }
  checkAddedCart() {
    this.isInCart =
      this.cartService
        .getCart()
        .find((p) => p.product.product == this.product.product) != undefined;
  }

  addCart(product: Product) {
    window.alert('add');
    this.cartService.addCart(product);
    window.alert(this.cartService.getCart());
    this.checkAddedCart();
  }

  private isLastProduct() {
    return this.products.length === 1;
  }
}
