import { Component } from '@angular/core';
import { DataJson } from './DataJson';
import { Product } from './interface/Product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'primeraaplicacion';
  defaultProducts: Product[] = DataJson.getJsonData();
  products: Product[] = this.defaultProducts;
  product: Product = this.products[0];

  getStarsRating(rating: number) {
    let stars = [];
    let ratingNumber = Math.floor(rating / 0.5);

    for (let i = 0; i < 5; i++) {
      if (ratingNumber == 0) {
        stars.push('bi-star');
      } else {
        if (ratingNumber > 1) {
          stars.push('bi-star-fill');
          ratingNumber = ratingNumber - 2;
        } else {
          stars.push('bi-star-half');
          ratingNumber = 0;
        }
      }
    }
    return stars;
  }

  changeProduct(name: String) {
    this.product = this.defaultProducts.find(
      (product) => product.product == name
    )!;
  }

  deleteProduct() {
    if (this.products.length == 1) {
      return;
    }

    let similar =
      this.product.similarProducts.length > 0
        ? this.product.similarProducts[0].product
        : null;

    this.products.splice(this.products.indexOf(this.product), 1);

    this.product = similar
      ? this.products.find((p) => p.product == similar)!
      : this.products[0]!;

    this.products.forEach((productIter) => {
      productIter.similarProducts = productIter.similarProducts.filter(
        (ps: any) =>
          this.products.find((p: any) => p.product == ps.product) != undefined
      );
    });
  }

  filterProductsLessPrice() {
    this.products = this.defaultProducts.filter(
      (product) => product.price < 2000
    );
  }
  filterProductsMorePrice() {
    this.products = this.defaultProducts.filter(
      (product) => product.price >= 2000
    );
  }
  filterProductsTopRating() {
    this.products = this.defaultProducts.filter(
      (product) => product.rating == 5
    );
  }

  resetFilters() {
    this.products = this.defaultProducts;
  }

  constructor() {
    console.log(this.products);
  }
}
