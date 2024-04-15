import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagmentComponent } from './managment.component';

const routes: Routes = [
  {
    path: '',
    component: ManagmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagmentRoutingModule {}
