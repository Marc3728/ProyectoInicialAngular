import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class StarsRatingComponent {
  @Input() starsRating: number = 5;

  getStarsColor(starsRating: number): String {
    return starsRating < 3
      ? 'red'
      : starsRating >= 3 && starsRating <= 4
      ? 'orange'
      : 'goldenrod';
  }

  /* getStarsRating2(rating: number) {
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
  } */

  refillStarsRating(rating: number) {
    let stars = new Array(5).fill('bi-star');
    let intRating = Math.trunc(rating);

    stars.fill('bi-star-fill', 0, intRating);
    this.hasHalfStar(rating) ? (stars[intRating] = 'bi-star-half') : null;

    return stars;
  }

  changeRating(rating: number) {
    this.starsRating = rating;
  }
  private hasHalfStar(rating: number) {
    return rating - Math.trunc(rating) > 0;
  }
}
