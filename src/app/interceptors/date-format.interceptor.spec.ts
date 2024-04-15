import { TestBed } from '@angular/core/testing';

import { DateFormatInterceptor } from './date-format.interceptor';

describe('DateFormatInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      DateFormatInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: DateFormatInterceptor = TestBed.inject(DateFormatInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
