import { IProductContract } from '../interface/IProductContract';
import { Product } from './Product';
type Filter = 'lessPrice' | 'morePrice' | 'topRating';
type Filters = {
  [key in Filter]: () => Product[];
};
export class ProductList {
  all: Product[];
  private filterPrice = 2;
  private filterTopRating = 5;
  constructor(products: IProductContract[]) {
    this.all = products.map((product) => new Product(product));
  }

  filterList: Filters = {
    lessPrice: () => {
      return this.all.filter((product) => product.price < this.filterPrice);
    },
    morePrice: () => {
      return this.all.filter((product) => product.price >= this.filterPrice);
    },
    topRating: () => {
      return this.all.filter(
        (product) => product.rating == this.filterTopRating
      );
    },
  };
}
