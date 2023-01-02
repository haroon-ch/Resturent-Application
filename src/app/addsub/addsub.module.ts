import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddsubPageRoutingModule } from './addsub-routing.module';

import { AddsubPage } from './addsub.page';
import {IonicSelectableModule} from 'ionic-selectable';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        AddsubPageRoutingModule,
        IonicSelectableModule
    ],
  declarations: [AddsubPage]
})
export class AddsubPageModule {}
