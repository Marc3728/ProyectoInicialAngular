import { Injectable } from '@angular/core';
import { Product } from '../modules/home/models/Product';
import { products } from '../DataJson';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { Cart } from '../modules/home/models/Cart';
import { IProductContract } from '../modules/home/interface/IProductContract';
import { ProductList } from '../modules/home/models/ProductList';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly products: BehaviorSubject<ProductList> =
    new BehaviorSubject<ProductList>(new ProductList([]));

  private _products: ProductList = new ProductList([]);

  public products$ = this.products.asObservable();

  constructor(private http: HttpClient) {
    this.getProducts();
  }

  getProducts(): void {
    this.http
      .get<IProductContract[]>('assets/data/DataProducts.json')
      .pipe(map((response: IProductContract[]) => new ProductList(response)))
      .subscribe((response: ProductList) => {
        this.products.next(response);
        this._products = response;
      });
  }

  deleteProduct(product: Product) {
    if (this.isLastProduct()) {
      return;
    }
    this._products.all.splice(this._products.all.indexOf(product), 1);
    this.products.next(this._products);
  }
  addProduct(product: Product) {
    this._products.all.push(product);
    this.products.next(this._products);
    console.log(this._products);
  }

  private isLastProduct() {
    return this._products.all.length === 1;
  }
}
