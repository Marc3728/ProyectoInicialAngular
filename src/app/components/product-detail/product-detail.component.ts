import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/interface/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss', '../../app.component.scss'],
})
export class ProductDetailComponent {
  @Input() product: Product = {} as Product;
  @Output() onDeleteProductClicked: EventEmitter<void> = new EventEmitter();
  @Output() onChangeFavoriteStatusClicked: EventEmitter<void> =
    new EventEmitter();
  deleteProduct() {
    this.onDeleteProductClicked.emit();
  }
  changeFavoriteStatus() {
    this.onChangeFavoriteStatusClicked.emit();
  }
}
