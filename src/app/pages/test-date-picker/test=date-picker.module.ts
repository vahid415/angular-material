import { InfraComponentModule } from './../../infra/app-infra/components/infra-component.module';
import { TestDatePickerComponent } from './test-date-picker.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialComponentModule } from 'src/app/infra/material/material.module';
import { InfraCommonModule } from 'src/app/infra/app-infra/common/infra-common.module';

@NgModule({
  declarations: [ TestDatePickerComponent ],
  imports: [ RouterModule.forChild([ { path: '', component: TestDatePickerComponent } ]),
    MaterialComponentModule, InfraCommonModule, InfraComponentModule ],
  exports: []
})
export class TestDatePickerModule { }
