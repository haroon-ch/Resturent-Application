import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserorderPage } from './userorder.page';

const routes: Routes = [
  {
    path: '',
    component: UserorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserorderPageRoutingModule {}
