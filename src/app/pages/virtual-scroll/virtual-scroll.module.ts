import { InfraCommonModule } from './../../infra/app-infra/common/infra-common.module';
import { VirtualScrollComponent } from './virtual-scroll.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ VirtualScrollComponent ],
  imports: [InfraCommonModule, RouterModule.forChild([ { path: '', component: VirtualScrollComponent } ]) ],
  exports: []
})
export class VirtualScrollModule { }
