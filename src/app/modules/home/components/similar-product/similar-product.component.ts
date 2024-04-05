import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-similar-product',
  templateUrl: './similar-product.component.html',
  styleUrls: ['./similar-product.component.scss'],
})
export class SimilarProductComponent {
  @Input() similarProduct: any = {} as any;
}
