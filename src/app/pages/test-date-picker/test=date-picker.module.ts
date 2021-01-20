import { InfrastructureModule } from './../../infra/infrastructure.module';
import { TestDatePickerComponent } from './test-date-picker.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ TestDatePickerComponent ],
  imports: [ RouterModule.forChild([ { path: '', component: TestDatePickerComponent } ]), InfrastructureModule ],
  exports: []
})
export class TestDatePickerModule { }
