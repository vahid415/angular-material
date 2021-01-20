import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions, PreloadAllModules } from '@angular/router';


const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '',
    redirectTo: 'pages/date-picker',
    pathMatch: 'full'
  }
];
const config: ExtraOptions = {
  useHash: false,
  preloadingStrategy: PreloadAllModules
};

@NgModule({
  imports: [ RouterModule.forRoot(routes, config) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
