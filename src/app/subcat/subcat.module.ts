import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubcatPageRoutingModule } from './subcat-routing.module';

import { SubcatPage } from './subcat.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubcatPageRoutingModule,
    Ng2SearchPipeModule
  ],
  declarations: [SubcatPage]
})
export class SubcatPageModule {}
