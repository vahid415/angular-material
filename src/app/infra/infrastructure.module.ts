import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NbThemeModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { ThemeModule } from './theme/theme.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { MaterialComponentModule } from './material/material.module';
import { InfraComponentModule } from './app-infra/infra-component.module';

@NgModule({
  imports: [
    NbThemeModule.forRoot()
  ],
  exports: [
    ScrollingModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    InfraComponentModule,
    MaterialComponentModule,
    ThemeModule,
  ]
})
export class InfrastructureModule {
}
