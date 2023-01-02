import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddsubPage } from './addsub.page';

const routes: Routes = [
  {
    path: '',
    component: AddsubPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddsubPageRoutingModule {}
