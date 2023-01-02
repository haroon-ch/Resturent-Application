import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StockdetailPage } from './stockdetail.page';
//const apiUrl = 'https://Learn2earnn.com/CafeVerona/public/';
const routes: Routes = [
  {
    path: '',
    component: StockdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StockdetailPageRoutingModule {}
