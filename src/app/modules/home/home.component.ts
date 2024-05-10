import { Component, OnInit } from '@angular/core';

import { Product } from './models/Product';
import { products } from 'src/app/DataJson';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Cart } from './models/Cart';
import { ProductList } from './models/ProductList';
import { CartList } from './models/CartList';

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
  defaultProducts: ProductList = new ProductList([]);
  products: ProductList = new ProductList([]);
  product: Product = {} as Product;
  activeFilter = '';
  isInCart = false;
  private defaultProductIndex = 0;
  private filterPrice = 2;
  private filterTopRating = 5;
  private cart: CartList = new CartList([]);

  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.loadProducts();
    this.loadCart();
    console.log(this.product);
  }

  filterList: Filters = {
    lessPrice: () => {
      this.products.all = this.defaultProducts.all.filter(
        (product) => product.price < this.filterPrice
      );
    },
    morePrice: () => {
      this.products.all = this.defaultProducts.all.filter(
        (product) => product.price >= this.filterPrice
      );
    },
    topRating: () => {
      this.products.all = this.defaultProducts.all.filter(
        (product) => product.rating == this.filterTopRating
      );
    },
  };

  changeFilter(filter: string) {
    if (filter == '' || this.activeFilter == filter) {
      this.activeFilter = '';
      this.products.all = this.defaultProducts.all;
      return;
    }

    this.activeFilter = filter;
    this.products.all = this.defaultProducts.filterList[filter as Filter]();
    //this.filterList[filter as Filter]();
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
    this.changeProduct(this.products.all[this.defaultProductIndex]);
  }
  checkAddedCart() {
    console.log(this.product?.product);
    this.isInCart =
      this.cart.all.find((p) => p.product.product == this.product?.product) !=
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
    //this.productService.getProducts();
    this.productService.products$.subscribe(
      (data) => {
        console.log(data);
        this.defaultProducts = data;
        this.products.all = [...this.defaultProducts.all];
        this.product = this.products.all[this.defaultProductIndex];
        this.checkAddedCart();
      },
      (error) => {
        console.log('Cant get data');
      }
    );
  }
}
