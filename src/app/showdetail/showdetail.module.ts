import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShowdetailPageRoutingModule } from './showdetail-routing.module';

import { ShowdetailPage } from './showdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShowdetailPageRoutingModule
  ],
  declarations: [ShowdetailPage]
})
export class ShowdetailPageModule {}
