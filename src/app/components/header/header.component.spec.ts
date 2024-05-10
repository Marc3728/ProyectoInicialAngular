import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { Observable, of, throwError } from 'rxjs';
import { CartList } from 'src/app/modules/home/models/CartList';

const CartListMock: CartList = {
  all: [],
};

const CartServiceMock = {
  cart$: of(CartListMock),
};
fdescribe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let service: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: CartService,
          useValue: CartServiceMock,
        },
      ],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    service = TestBed.inject(CartService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init data from observable', () => {
    expect(component.cart).toEqual(CartListMock);
  });

  it('exists cart error case', () => {
    const consoleSpy = spyOn(console, 'log');
    service.cart$ = throwError({});

    component.ngOnInit();

    expect(consoleSpy).toHaveBeenCalled();
  });
});
