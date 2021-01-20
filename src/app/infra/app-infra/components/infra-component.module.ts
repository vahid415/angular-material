import { FormControlModule } from './form-control/form-control.module';
import { ColumnComponent } from './column.component';
import { RowComponent } from './row.component';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormControlModule,
    TranslateModule
  ],
  declarations: [ RowComponent, ColumnComponent ],
})
export class InfraComponentModule { }
