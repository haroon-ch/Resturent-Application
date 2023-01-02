import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExpensedetailPageRoutingModule } from './expensedetail-routing.module';

import { ExpensedetailPage } from './expensedetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExpensedetailPageRoutingModule
  ],
  declarations: [ExpensedetailPage]
})
export class ExpensedetailPageModule {}
