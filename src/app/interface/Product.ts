import { Review } from './Review';

export interface Product {
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
