import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { HomeModule } from './modules/home/home.module';
import { AboutComponent } from './modules/about/about.component';
import { AboutModule } from './modules/about/about.module';
import { ManagmentComponent } from './modules/managment/managment.component';
import { loggedGuard } from './guards/logged.guard';
import { ManagmentModule } from './modules/managment/managment.module';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'managment',
    loadChildren: () =>
      import('./modules/managment/managment.module').then(
        (m) => m.ManagmentModule
      ),
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
