import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcatPage } from './addcat.page';

const routes: Routes = [
  {
    path: '',
    component: AddcatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddcatPageRoutingModule {}
