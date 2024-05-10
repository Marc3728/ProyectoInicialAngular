import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProductComponent } from './create-product.component';
import { ProductService } from 'src/app/services/product.service';
import { ProductList } from '../../models/ProductList';
import { BehaviorSubject, Observable } from 'rxjs';
import { products } from 'src/app/DataJson';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
const mockedProductService = {
  products: new BehaviorSubject<ProductList>(new ProductList([])),
  _products: new ProductList([]),
  products$: new Observable(),
  getProducts: () => {},
  deleteProduct: () => {},
  addProduct: () => {},

  isLastProduct: function (): boolean {
    throw new Error('Function not implemented.');
  },
};
describe('CreateProductComponent', () => {
  let component: CreateProductComponent;
  let fixture: ComponentFixture<CreateProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateProductComponent],
      imports: [FormsModule],
      providers: [{ provide: ProductService, useValue: mockedProductService }],
    });
    fixture = TestBed.createComponent(CreateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
