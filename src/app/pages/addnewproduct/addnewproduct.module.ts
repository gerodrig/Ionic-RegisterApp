import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewproductPageRoutingModule } from './addnewproduct-routing.module';

import { AddnewproductPage } from './addnewproduct.page';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewproductPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AddnewproductPage]
})
export class AddnewproductPageModule {}
