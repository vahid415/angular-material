import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../common/services/layout.service';
import { NavigationService } from '../../common/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
  @Output() toggleProfile: EventEmitter<any> = new EventEmitter();
  public showSidebarClass = '';
  constructor(private layoutService: LayoutService,
    private sidebarService: NbSidebarService,
    private navigate: NavigationService
  ) {
  }

  ngOnInit() {
    this.layoutService.sideBarToggle.subscribe(showSidebar => {
      if (!showSidebar) {
        this.showSidebarClass = 'mcb-sidebar-hide';
      } else {
        this.showSidebarClass = '';
      }
    });
  }

  toggleSidebar(): boolean {
    debugger
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.toggleProfile.emit();
    return false;
  }

  goToHome() {
    this.navigate.goToDashboardPage();
  }

  onHeaderToggleClick() {
    this.layoutService.openSideBar();
  }
}
