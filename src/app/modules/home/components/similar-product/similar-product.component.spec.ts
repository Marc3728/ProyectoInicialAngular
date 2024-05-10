import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarProductComponent } from './similar-product.component';
import { StarsRatingComponent } from '../stars-rating/stars-rating.component';
const mockedStarsRatingComponent = {
  getStarsColor: () => String,
  refillStarsRating: () => String,
  changeRating: () => String,
};
fdescribe('SimilarProductComponent', () => {
  let component: SimilarProductComponent;
  let fixture: ComponentFixture<SimilarProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimilarProductComponent],
      imports: [StarsRatingComponent],
    });
    fixture = TestBed.createComponent(SimilarProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exists similarproduct', () => {
    expect(component.similarProduct).toBeDefined();
  });
});
