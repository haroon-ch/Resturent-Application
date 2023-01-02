import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubcatPage } from './subcat.page';

const routes: Routes = [
  {
    path: '',
    component: SubcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubcatPageRoutingModule {}
