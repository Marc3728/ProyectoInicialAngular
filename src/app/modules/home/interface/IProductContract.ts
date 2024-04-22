import { IReviewContract } from './IReviewContract';

export interface IProductContract {
  product: String;
  price: number;
  currency: String;
  rating: number;
  description: String;
  img: String;
  favorite: boolean;
  similarProducts: any[];
  reviews: IReviewContract[] | null;
}
