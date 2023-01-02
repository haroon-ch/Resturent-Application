import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerdetailPage } from './sellerdetail.page';

const routes: Routes = [
  {
    path: '',
    component: SellerdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerdetailPageRoutingModule {}
