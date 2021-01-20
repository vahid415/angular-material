import { MenuItem } from './../../common/types/types';
import Pages from '../../../../pages/pages-menu';
import { Component, OnInit, Inject } from '@angular/core';

import { NbMenuService, NbThemeService, NbSidebarService, NbMediaBreakpointsService, NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styles: [ `
  .mcb-side-search-hide{
    position: absolute;
    left: 35px;
    top: 34px;
  }`]
})
export class SidebarComponent implements OnInit {
  showSidebarClass = '';
  showSidebarOnResponsiveClass = '';
  showSidebarStatus = true;
  grantedItems: MenuItem[] = Pages;
  fakeAuthentication: boolean;
  private alive = true;

  constructor(
    private menuService: NbMenuService,
    protected themeService: NbThemeService,
    protected sidebarService: NbSidebarService,
    protected bpService: NbMediaBreakpointsService,
  ) {

  }

  ngOnInit() {
  }

}
