import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SimilarProductComponent } from './components/similar-product/similar-product.component';
import { StarsRatingComponent } from './components/stars-rating/stars-rating.component';
import { ReviewComponent } from './components/review/review.component';
import { AsideComponent } from './components/aside/aside.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProductDetailComponent,
    SimilarProductComponent,
    StarsRatingComponent,
    ReviewComponent,
    AsideComponent,
  ],
  imports: [CommonModule],
  exports: [HomeComponent],
})
export class HomeModule {}
