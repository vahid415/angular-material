import { InfraComponentModule } from './../components/infra-component.module';
import { TranslateModule } from '@ngx-translate/core';
import { InfraCommonModule } from '../common/infra-common.module';
import { NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { UserStatusComponent } from './user-status/user-status.component';
import { InfraThemeModule } from '../../theme/infra-theme.module';
import { MaterialComponentModule } from '../../material/material.module';

@NgModule({
  imports: [ InfraThemeModule.forRoot(), TranslateModule, InfraComponentModule,MaterialComponentModule
  ],
  exports: [
    AppLayoutComponent,
  ],
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    UserStatusComponent
  ],
  providers: [
    NbSidebarModule,
    NbMenuModule
  ]
})
export class InfraLayoutModule { }
