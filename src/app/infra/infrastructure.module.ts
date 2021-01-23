import { NgModule, SkipSelf, Optional, ModuleWithProviders } from '@angular/core';
import { InfraThemeModule } from './theme/infra-theme.module';

import { MaterialComponentModule } from './material/material.module';
import { InfraComponentModule } from './app-infra/components/infra-component.module';
import { InfraCommonModule } from './app-infra/common/infra-common.module';
import { InfraLayoutModule } from './app-infra/layout/infra-layout.module';
export function throwIfAlreadyLoaded(parentModule: any, moduleName: string) {
  if (parentModule) {
    throw new Error(`${moduleName} has already been loaded. Import Core modules in the AppModule only.`);
  }
}
export const CORE_PROVIDERS = [
];
@NgModule({
  imports: [
    // InfraCommonModule,
    // InfraComponentModule,
    // InfraLayoutModule,
    // MaterialComponentModule,
    // InfraThemeModule,
  ],
  exports: [
    // InfraCommonModule,
    // InfraComponentModule,
    // InfraLayoutModule,
    // MaterialComponentModule,
    // InfraThemeModule,
  ]
})
export class InfrastructureModule {
  constructor(@Optional() @SkipSelf() parentModule: InfrastructureModule) {
    throwIfAlreadyLoaded(parentModule, 'InfrastructureModule');
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: InfrastructureModule,
      providers: [
        ...CORE_PROVIDERS
      ]
    } as ModuleWithProviders;
  }
}
