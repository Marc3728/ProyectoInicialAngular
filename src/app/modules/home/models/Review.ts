import { IReview } from '../interface/IReview';
import { IReviewContract } from '../interface/IReviewContract';

export class Review implements IReview {
  image: String;
  name: String;
  rating: number;
  opinion: String;
  date: Date;
  constructor(review: IReviewContract) {
    this.image = review.image;
    this.name = review.name;
    this.rating = review.rating;
    this.opinion = review.opinion;
    this.date = review.date;
  }
}
