import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideComponent } from './aside.component';
import { Product } from '../../models/Product';

fdescribe('AsideComponent', () => {
  let component: AsideComponent;
  let fixture: ComponentFixture<AsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideComponent],
    });
    fixture = TestBed.createComponent(AsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exists products', () => {
    expect(component.products).toBeDefined();
  });
  it('exists productSelected', () => {
    expect(component.productSelected).toBeDefined();
  });
  it('exists activeFilter', () => {
    expect(component.activeFilter).toBeDefined();
  });
  it('change product', () => {
    spyOn(component.onChangeProduct, 'emit');
    component.changeProduct({} as Product);
    expect(component.onChangeProduct.emit).toHaveBeenCalled();
  });
  it('change filter', () => {
    spyOn(component.onChangeFilter, 'emit');
    component.changeFilter('topRating');
    expect(component.onChangeFilter.emit).toHaveBeenCalled();
  });
});
