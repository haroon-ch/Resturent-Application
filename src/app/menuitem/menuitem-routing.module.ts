import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuitemPage } from './menuitem.page';

const routes: Routes = [
  {
    path: '',
    component: MenuitemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuitemPageRoutingModule {}
