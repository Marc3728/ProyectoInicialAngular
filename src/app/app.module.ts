import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SimilarProductComponent } from './components/similar-product/similar-product.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { ReviewComponent } from './components/review/review.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [AppComponent, ProductDetailComponent, SimilarProductComponent, StarsRatingComponent, ReviewComponent, AsideComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
