import { Injectable } from '@angular/core';
import { Product } from '../modules/home/interface/Product';
import { products } from '../DataJson';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductCart } from '../modules/home/interface/Cart';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly products: BehaviorSubject<Product[]> = new BehaviorSubject<
    Product[]
  >([]);

  private _products: Product[] = [];

  public products$ = this.products.asObservable();

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(): void {
    this.http
      .get<Product[]>('assets/data/DataProducts.json')
      .subscribe((data) => {
        this.products.next(data);
        this._products = data;
      });
  }

  deleteProduct(product: Product) {
    if (this.isLastProduct()) {
      return;
    }
    this._products.splice(this._products.indexOf(product), 1);
    this.products.next(this._products);
  }
  addProduct(product: Product) {
    this._products.push(product);
    this.products.next(this._products);
    console.log(this._products);
  }

  private isLastProduct() {
    return this._products.length === 1;
  }
}
