import { LayoutModule } from './layout/layout.module';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [
    ReactiveFormsModule,
    LayoutModule
  ],
  declarations: [],
})
export class InfraComponentModule { }
