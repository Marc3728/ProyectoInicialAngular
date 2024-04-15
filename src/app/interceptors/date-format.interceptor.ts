import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, map, tap, throwError } from 'rxjs';
import { Product } from '../modules/home/interface/Product';
import * as moment from 'moment';
import { DatePipe } from '@angular/common';

@Injectable()
export class DateFormatInterceptor implements HttpInterceptor {
  constructor(private datePipe: DatePipe) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      map((event) => {
        if (event instanceof HttpResponse) {
          const product: Product[] = event.body;
          product.forEach((product) => {
            if (product.reviews) {
              product.reviews.forEach((review) => {
                if (typeof review.date === 'string') {
                  const date = moment(review.date, 'DD-MM-yyyy HH:mm');
                  console.log(date.format('DD-MM-yyyy HH:mm'));
                  review.date = date.toDate();
                }
              });
            }
          });
        }
        return event;
      })
    );
  }
}
