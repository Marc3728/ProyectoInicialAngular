import { TestBed } from '@angular/core/testing';

import { CartService } from './cart.service';
import { Cart } from 'src/app/modules/home/models/Cart';
import { Product } from 'src/app/modules/home/models/Product';
import { CartList } from 'src/app/modules/home/models/CartList';

fdescribe('CartService', () => {
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add new product in cart', () => {
    const product: Product = {
      product: 'prueba',
      price: 2,
      currency: '€',
      rating: 0,
      description: 'descripcion',
      img: '',
      favorite: false,
      similarProducts: [],
      reviews: null,
    };
    let cart = new CartList([]);
    service.cart$.subscribe(
      (data) => {
        cart = data;
      },
      (error) => {
        console.log('Cant get data');
      }
    );
    service.addCart(product);

    expect(cart.all[0].quantity).toBe(1);
  });

  it('add exist product in cart', () => {
    const product: Product = {
      product: 'prueba',
      price: 2,
      currency: '€',
      rating: 0,
      description: 'descripcion',
      img: '',
      favorite: false,
      similarProducts: [],
      reviews: null,
    };
    let cart = new CartList([]);
    service.cart$.subscribe(
      (data) => {
        cart = data;
        expect(cart.all[0].quantity).toBe(2);
      },
      (error) => {
        console.log('Cant get data');
      }
    );
    service.addCart(product);
    service.addCart(product);
  });

  it('delete cart', () => {
    const spyDelete = spyOn(service, 'updateCart');
    service.deleteProductCart({} as Product);
    expect(spyDelete).toHaveBeenCalled();
  });

  it('delete cart', () => {
    const spyDelete = spyOn(service, 'updateCart');
    service.deleteProductCart({} as Product);
    expect(spyDelete).toHaveBeenCalled();
  });

  it('delete cart', () => {
    expect(service).toBeTruthy();
  });
});
