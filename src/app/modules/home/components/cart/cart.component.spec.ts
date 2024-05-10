import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartComponent } from './cart.component';
import { CartList } from '../../models/CartList';
import { of, throwError } from 'rxjs';
import { CartService } from 'src/app/services/cart/cart.service';
import { Product } from '../../models/Product';
const CartListMock: CartList = {
  all: [],
};

const CartServiceMock = {
  cart$: of(CartListMock),
  deleteProductCart: () => {},
};
fdescribe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let cartService: CartService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      providers: [{ provide: CartService, useValue: CartServiceMock }],
    });
    fixture = TestBed.createComponent(CartComponent);
    cartService = TestBed.inject(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('init correctly cart$', () => {
    console.log(component.cart);
    expect(component.cart).toEqual(CartListMock);
  });

  it('init error cart$', () => {
    cartService.cart$ = throwError({});
    const deleteSpy = spyOn(console, 'log');
    component.ngOnInit();

    expect(deleteSpy).toHaveBeenCalled();
  });

  it('delete product cart', () => {
    const deleteSpy = spyOn(cartService, 'deleteProductCart');
    component.deleteProductCart({} as Product);
    expect(deleteSpy).toHaveBeenCalled();
  });
});
