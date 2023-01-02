import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersubPage } from './ordersub.page';

const routes: Routes = [
  {
    path: '',
    component: OrdersubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersubPageRoutingModule {}
