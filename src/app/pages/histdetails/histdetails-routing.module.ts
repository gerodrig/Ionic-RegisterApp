import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HistdetailsPage } from './histdetails.page';

const routes: Routes = [
  {
    path: '',
    component: HistdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HistdetailsPageRoutingModule {}
