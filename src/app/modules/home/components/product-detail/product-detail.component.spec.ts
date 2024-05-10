import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { StarsRatingComponent } from '../stars-rating/stars-rating.component';

fdescribe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductDetailComponent],
      imports: [StarsRatingComponent],
    });
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exists product', () => {
    expect(component.product).toBeDefined();
  });

  it('delete product', () => {
    spyOn(component.onDeleteProductClicked, 'emit');
    component.deleteProduct();
    expect(component.onDeleteProductClicked.emit).toHaveBeenCalled();
  });

  it('add cart product', () => {
    spyOn(component.onAddCartClicked, 'emit');
    component.addCart();
    expect(component.onAddCartClicked.emit).toHaveBeenCalled();
  });

  it('change favorite status product', () => {
    spyOn(component.onChangeFavoriteStatusClicked, 'emit');
    component.changeFavoriteStatus();
    expect(component.onChangeFavoriteStatusClicked.emit).toHaveBeenCalled();
  });
});
