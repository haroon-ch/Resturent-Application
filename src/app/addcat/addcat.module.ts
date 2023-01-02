import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddcatPageRoutingModule } from './addcat-routing.module';

import { AddcatPage } from './addcat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddcatPageRoutingModule
  ],
  declarations: [AddcatPage]
})
export class AddcatPageModule {}
