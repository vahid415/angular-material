import { VirtualScrollComponent } from './virtual-scroll.component';
import { InfrastructureModule } from '../../infra/infrastructure.module';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ VirtualScrollComponent ],
  imports: [ RouterModule.forChild([ { path: '', component: VirtualScrollComponent } ]), InfrastructureModule ],
  exports: []
})
export class VirtualScrollModule { }
