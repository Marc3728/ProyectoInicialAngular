import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/interface/Product';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss', '../../app.component.scss'],
})
export class AsideComponent {
  @Input() products: Product[] = {} as Product[];
  @Input() productSelected: Product = {} as Product;
  @Input() filterStyles: String[] = {} as String[];
  @Output() onChangeProduct: EventEmitter<Product> = new EventEmitter();
  @Output() onFilterProductsLessPrice: EventEmitter<void> = new EventEmitter();
  @Output() onFilterProductsMorePrice: EventEmitter<void> = new EventEmitter();
  @Output() onFilterProductsTopRating: EventEmitter<void> = new EventEmitter();
  @Output() onResetFilters: EventEmitter<void> = new EventEmitter();
  changeProduct(productChange: Product) {
    this.onChangeProduct.emit(productChange);
  }

  filterProductsLessPrice() {
    this.onFilterProductsLessPrice.emit();
  }
  filterProductsMorePrice() {
    this.onFilterProductsMorePrice.emit();
  }
  filterProductsTopRating() {
    this.onFilterProductsTopRating.emit();
  }
  resetFilters() {
    this.onResetFilters.emit();
  }
}
