import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarsRatingComponent } from './stars-rating.component';

fdescribe('StarsRatingComponent', () => {
  let component: StarsRatingComponent;
  let fixture: ComponentFixture<StarsRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    fixture = TestBed.createComponent(StarsRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('starsRating defined', () => {
    expect(component.starsRating).toBeDefined();
  });

  it('get low rating', () => {
    expect(component.getStarsColor(1)).toBe('red');
  });
  it('get mid rating', () => {
    expect(component.getStarsColor(3)).toBe('orange');
  });
  it('get top rating', () => {
    expect(component.getStarsColor(5)).toBe('goldenrod');
  });

  it('get exced rating', () => {
    expect(component.getStarsColor(-1)).toBe('red');
  });
  it('get negative rating', () => {
    expect(component.getStarsColor(6)).toBe('goldenrod');
  });
  /* it('refill stars', () => {
    expect(component.refillStarsRating(0)).toBe([
      'bi-star',
      'bi-star',
      'bi-star',
      'bi-star',
      'bi-star',
    ]);
  }); */
  it('change rating', () => {
    component.changeRating(3);
    expect(component.starsRating).toBe(3);
  });
});
