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
  filterStyles = ['', '', ''];

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

  filterProductsLessPrice() {
    this.products = this.defaultProducts.filter(
      (product) => product.price < this.filterPrice
    );
    this.changeFilterStyle(0);
  }
  filterProductsMorePrice() {
    this.products = this.defaultProducts.filter(
      (product) => product.price >= this.filterPrice
    );
    this.changeFilterStyle(1);
  }
  filterProductsTopRating() {
    this.products = this.defaultProducts.filter(
      (product) => product.rating == this.filterTopRating
    );
    this.changeFilterStyle(2);
  }

  resetFilters() {
    this.products = this.defaultProducts;
    this.resetFilterStyles();
  }

  private isLastProduct() {
    return this.products.length === 1;
  }

  private changeFilterStyle(indexFilter: number) {
    let isSelected = this.filterStyles[indexFilter] !== '';
    this.resetFilterStyles();
    isSelected
      ? this.resetFilters()
      : (this.filterStyles[indexFilter] = 'bg bg-primary');
  }

  private resetFilterStyles() {
    this.filterStyles.fill('', 0, this.filterStyles.length);
  }
}
