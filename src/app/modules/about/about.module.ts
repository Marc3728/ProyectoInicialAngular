import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { AboutCardComponent } from './components/about-card/about-card.component';

@NgModule({
  declarations: [AboutComponent, AboutCardComponent],
  imports: [CommonModule, AboutRoutingModule],
})
export class AboutModule {}
