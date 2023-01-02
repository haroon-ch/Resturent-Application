import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuitemPageRoutingModule } from './menuitem-routing.module';

import { MenuitemPage } from './menuitem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuitemPageRoutingModule
  ],
  declarations: [MenuitemPage]
})
export class MenuitemPageModule {}
