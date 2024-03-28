import { Component } from '@angular/core';
import { products } from './DataJson';
import { Product } from './interface/Product';

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

  constructor() {
    console.log(this.products);
  }

  changeProduct(product: Product) {
    this.product = product;
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

  filterProductsLessPrice() {
    this.products = this.defaultProducts.filter(
      (product) => product.price < this.filterPrice
    );
  }
  filterProductsMorePrice() {
    this.products = this.defaultProducts.filter(
      (product) => product.price >= this.filterPrice
    );
  }
  filterProductsTopRating() {
    this.products = this.defaultProducts.filter(
      (product) => product.rating == this.filterTopRating
    );
  }

  resetFilters() {
    this.products = this.defaultProducts;
  }

  private isLastProduct() {
    return this.products.length === 1;
  }
}
