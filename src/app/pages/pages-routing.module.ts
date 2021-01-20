import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagesComponent } from './pages.component';


const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'date-picker',
        loadChildren: () => import('./test-date-picker/test=date-picker.module').then(m => m.TestDatePickerModule)
      },
      {
        path: 'virtual-scroll',
        loadChildren: () => import('./virtual-scroll/virtual-scroll.module').then(m => m.VirtualScrollModule)
      }
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PagesRoutingModule { }
