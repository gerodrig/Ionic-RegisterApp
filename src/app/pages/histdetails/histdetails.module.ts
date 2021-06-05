import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HistdetailsPageRoutingModule } from './histdetails-routing.module';

import { HistdetailsPage } from './histdetails.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HistdetailsPageRoutingModule,
    ComponentsModule
  ],
  declarations: [HistdetailsPage]
})
export class HistdetailsPageModule {}
