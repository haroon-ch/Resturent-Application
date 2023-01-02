import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdercatPage } from './ordercat.page';

const routes: Routes = [
  {
    path: '',
    component: OrdercatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdercatPageRoutingModule {}
