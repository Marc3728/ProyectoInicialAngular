import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../models/Product';
import { ProductList } from '../../models/ProductList';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss', '../../../../app.component.scss'],
})
export class AsideComponent {
  @Input() products: ProductList = {} as ProductList;
  @Input() productSelected: Product = {} as Product;
  @Input() activeFilter: String = {} as String;
  @Output() onChangeProduct: EventEmitter<Product> = new EventEmitter();
  @Output() onChangeFilter: EventEmitter<string> = new EventEmitter();
  changeProduct(productChange: Product) {
    this.onChangeProduct.emit(productChange);
  }

  changeFilter(filter: string) {
    this.onChangeFilter.emit(filter);
  }
}
