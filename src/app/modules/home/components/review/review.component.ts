import { Component, Input } from '@angular/core';
import { Review } from '../../models/Review';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss'],
})
export class ReviewComponent {
  @Input() review: Review = {} as Review;
}
