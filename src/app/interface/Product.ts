import { Review } from './Review';

export interface Product {
  product: String;
  price: number;
  currency: String;
  rating: number;
  description: String;
  img: String;
  similarProducts: any[];
  reviews: Review[] | null;
}
