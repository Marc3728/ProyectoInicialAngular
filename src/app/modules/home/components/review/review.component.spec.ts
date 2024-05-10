import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewComponent } from './review.component';
import { StarsRatingComponent } from '../stars-rating/stars-rating.component';

fdescribe('ReviewComponent', () => {
  let component: ReviewComponent;
  let fixture: ComponentFixture<ReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewComponent],
      imports: [StarsRatingComponent],
    });
    fixture = TestBed.createComponent(ReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exists review', () => {
    expect(component.review).toBeDefined();
  });
});
