import { Component, OnInit } from '@angular/core';
import { LayoutService } from '../../common/services/layout.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent implements OnInit {
  userBranch: string;
  organizationTitle: string;
  public showSidebarClass = '';
  constructor(private layoutService: LayoutService,

  ) { }

  ngOnInit() {
    this.layoutService.sideBarToggle.subscribe((showSidebar: any) => {
      if (!showSidebar) {
        this.showSidebarClass = 'mcb-sidebar-hide';
      } else {
        this.showSidebarClass = '';
      }
    });
  }
}
