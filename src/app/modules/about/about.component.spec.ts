import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';
import { AboutCardComponent } from './components/about-card/about-card.component';
import { AboutModule } from './about.module';

fdescribe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent],
      imports: [AboutModule],
    });
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('exists aboutCards', () => {
    expect(component.aboutCards).toBeDefined();
  });
});
