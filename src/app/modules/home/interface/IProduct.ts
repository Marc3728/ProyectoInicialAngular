import { Review } from '../models/Review';

export interface IProduct {
  product: String;
  price: number;
  currency: String;
  rating: number;
  description: String;
  img: String;
  favorite: boolean;
  similarProducts: any[];
  reviews: Review[] | null;
}
