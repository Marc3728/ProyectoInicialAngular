import { Component } from '@angular/core';
import { products } from './DataJson';
import { Product } from './interface/Product';
type Filter = 'lessPrice' | 'morePrice' | 'topRating';
type Filters = {
  [key in Filter]: () => void;
};
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'primeraaplicacion';
  defaultProductIndex = 0;
  defaultProducts: Product[] = [...products];
  products: Product[] = this.defaultProducts;
  product: Product = this.products[this.defaultProductIndex];
  filterPrice = 2;
  filterTopRating = 5;
  activeFilter = '';

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

  constructor() {
    console.log(this.products);
  }

  changeProduct(productChange: Product) {
    this.product = productChange;
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

  private isLastProduct() {
    return this.products.length === 1;
  }
}
