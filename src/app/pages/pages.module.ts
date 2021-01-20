import { NgModule } from '@angular/core';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { InfrastructureModule } from '../infra/infrastructure.module';
import { NbMenuService, NbSidebarService } from '@nebular/theme';


@NgModule({
  declarations: [ PagesComponent ],
  imports: [ PagesRoutingModule, InfrastructureModule ],
  providers: [ NbMenuService, NbSidebarService ],
})
export class PagesModule { }
