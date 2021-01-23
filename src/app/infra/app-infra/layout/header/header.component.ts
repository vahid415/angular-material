import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { LayoutService } from '../../common/services/layout.service';
import { NavigationService } from '../../common/services/navigation.service';
import { TranslateService } from '@ngx-translate/core';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ]
})
export class HeaderComponent implements OnInit {
  form: FormGroup;
  selectedValue: string;
  @Output() toggleProfile: EventEmitter<any> = new EventEmitter();
  public showSidebarClass = '';
  constructor(private layoutService: LayoutService,
    private sidebarService: NbSidebarService,
    private navigate: NavigationService,
    public translate: TranslateService, private fb: FormBuilder
  ) {
    this.form = fb.group({
      lan: new FormControl('')
    });
    translate.addLangs([ 'en', 'fr' ]);
    translate.setDefaultLang('fr');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
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
  setLanguage(e: MatOptionSelectionChange) {
    if (e.source.selected) {
      this.translate.use(e.source.value);
    }

  }
}
