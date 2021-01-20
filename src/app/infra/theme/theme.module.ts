import { NgModule, ModuleWithProviders } from '@angular/core';
import {
  DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME, DEFAULT_MEDIA_BREAKPOINTS, NbLayoutDirection, NbLayoutModule,
  NbMenuModule, NbSidebarModule, NbContextMenuModule, NbActionsModule, NbUserModule, NbIconModule, NbThemeModule,
  NbDialogModule, NbWindowModule, NbToastrModule
} from '@nebular/theme';

import { NbEvaIconsModule } from '@nebular/eva-icons';


const NB_MODULES = [
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbContextMenuModule,
  NbActionsModule,
  NbUserModule,
  NbIconModule,
  NbEvaIconsModule
];

const NB_THEME_PROVIDERS = [
  ...NbThemeModule.forRoot(
    {
      name: 'default'
    },
    [ DEFAULT_THEME, COSMIC_THEME, CORPORATE_THEME ], DEFAULT_MEDIA_BREAKPOINTS, NbLayoutDirection.RTL
  ).providers,
  ...NbSidebarModule.forRoot().providers,
  ...NbMenuModule.forRoot().providers,
  ...NbDialogModule.forRoot().providers,
  ...NbWindowModule.forRoot().providers,
  ...NbToastrModule.forRoot().providers
];

@NgModule({
  imports: [
    NB_MODULES
  ],
  exports: [
    NB_MODULES,
  ]
})
export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ThemeModule,
      providers: [ ...NB_THEME_PROVIDERS ]
    };
  }
}
