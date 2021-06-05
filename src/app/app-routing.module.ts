import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'manager',
    loadChildren: () => import('./pages/manager/manager.module').then( m => m.ManagerPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./pages/history/history.module').then( m => m.HistoryPageModule)
  },
  {
    path: 'restock',
    loadChildren: () => import('./pages/restock/restock.module').then( m => m.RestockPageModule)
  },
  {
    path: 'addnewproduct',
    loadChildren: () => import('./pages/addnewproduct/addnewproduct.module').then( m => m.AddnewproductPageModule)
  },
  {
    path: 'histdetails',
    loadChildren: () => import('./pages/histdetails/histdetails.module').then( m => m.HistdetailsPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
