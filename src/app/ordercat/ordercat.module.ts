import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdercatPageRoutingModule } from './ordercat-routing.module';

import { OrdercatPage } from './ordercat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdercatPageRoutingModule
  ],
  declarations: [OrdercatPage]
})
export class OrdercatPageModule {}
