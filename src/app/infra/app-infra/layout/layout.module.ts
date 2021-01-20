import { NbMenuService, NbSidebarService, NbSidebarModule, NbMenuModule } from '@nebular/theme';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ThemeModule } from './../../theme/theme.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppLayoutComponent } from './app-layout/app-layout.component';
import { UserStatusComponent } from './user-status/user-status.component';

@NgModule({
  imports: [ CommonModule, RouterModule, ThemeModule.forRoot(),
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
    // ...NbSidebarModule.forRoot().providers,
    // ...NbMenuModule.forRoot().providers,
  ]
})
export class LayoutModule { }
