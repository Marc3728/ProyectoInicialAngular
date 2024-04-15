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

  public products$ = this.products.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(): void {
    this.http
      .get<Product[]>('assets/data/DataProducts.json')
      .subscribe((data) => {
        this.products.next(data);
      });
  }
}
