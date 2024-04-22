import { IProduct } from '../interface/IProduct';
import { IProductContract } from '../interface/IProductContract';
import { IReviewContract } from '../interface/IReviewContract';

export class Product implements IProduct {
  product: String;
  price: number;
  currency: String;
  rating: number;
  description: String;
  img: String;
  favorite: boolean;
  similarProducts: any[];
  reviews: IReviewContract[] | null;
  constructor(product: IProductContract) {
    this.product = product.product;
    this.price = product.price;
    this.currency = product.currency;
    this.rating = product.rating;
    this.description = product.description;
    this.img = product.img;
    this.favorite = product.favorite;
    this.similarProducts = product.similarProducts;
    this.reviews = product.reviews;
  }
}
