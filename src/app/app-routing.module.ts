import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { AboutComponent } from './modules/about/components/about/about.component';
import { AboutModule } from './modules/about/about.module';
import { ManagmentComponent } from './modules/managment/components/managment/managment.component';
import { loggedGuard } from './guards/logged.guard';
import { ManagmentModule } from './modules/managment/managment.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'managment',
    component: ManagmentComponent,
    canActivate: [loggedGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomeModule,
    AboutModule,
    ManagmentModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
