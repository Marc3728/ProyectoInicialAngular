import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stars-rating',
  templateUrl: './stars-rating.component.html',
  styleUrls: ['./stars-rating.component.scss'],
})
export class StarsRatingComponent {
  @Input() starsRating: number = 5;

  getStarsColor(starsRating: number): String {
    return starsRating < 3
      ? 'red'
      : starsRating > 3 && starsRating < 4
      ? 'orange'
      : 'goldenrod';
  }

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
}
