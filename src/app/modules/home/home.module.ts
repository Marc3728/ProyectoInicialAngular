import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SimilarProductComponent } from './components/similar-product/similar-product.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { ReviewComponent } from './components/review/review.component';
import { AsideComponent } from './components/aside/aside.component';
import { HomeRoutingModule } from './home-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DateFormatInterceptor } from 'src/app/interceptors/date-format.interceptor';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    SimilarProductComponent,

    ReviewComponent,
    AsideComponent,
    CartComponent,
    CreateProductComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    StarsRatingComponent,
  ],
  exports: [],
  providers: [],
})
export class HomeModule {}
