import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowdetailPage } from './showdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ShowdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShowdetailPageRoutingModule {}
