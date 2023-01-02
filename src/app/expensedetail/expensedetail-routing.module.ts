import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExpensedetailPage } from './expensedetail.page';

const routes: Routes = [
  {
    path: '',
    component: ExpensedetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpensedetailPageRoutingModule {}
