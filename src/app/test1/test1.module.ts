import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Test1PageRoutingModule } from './test1-routing.module';

import { Test1Page } from './test1.page';
import {CardComponent} from '../Component/card/card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Test1PageRoutingModule
  ],
  declarations: [Test1Page , CardComponent]
})
export class Test1PageModule {}
