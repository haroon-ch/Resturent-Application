import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdersubPageRoutingModule } from './ordersub-routing.module';

import { OrdersubPage } from './ordersub.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdersubPageRoutingModule
  ],
  declarations: [OrdersubPage]
})
export class OrdersubPageModule {}
