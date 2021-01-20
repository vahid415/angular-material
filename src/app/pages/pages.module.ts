import { InfraLayoutModule } from './../infra/app-infra/layout/infra-layout.module';
import { InfraCommonModule } from './../infra/app-infra/common/infra-common.module';
import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  declarations: [ PagesComponent ],
  imports: [ PagesRoutingModule, InfraCommonModule, InfraLayoutModule ],
})
export class PagesModule { }
