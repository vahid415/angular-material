import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { NbMenuService } from '@nebular/theme';
import { Component, OnInit, Inject, Input, OnDestroy } from '@angular/core';



@Component({
  selector: 'app-user-status',
  templateUrl: './user-status.component.html',
  styles: [

  ]
})
export class UserStatusComponent implements OnInit, OnDestroy {

  showUserStatusPanel = false;
  userFullName: string;
  organizationTitle: string;
  menuServiceSubscription: Subscription;


  userMenu = [
    { data: { id: 'cartable' }, title: 'مشاهده کارتابل', icon: 'grid-outline' },
    { data: { id: 'profile' }, icon: 'person-outline', title: 'پروفایل' },
    { data: { id: 'change-password' }, icon: 'lock', title: 'تغییرکلمه عبور' },
    { data: { id: 'log-out' }, icon: 'swap-outline', title: 'خروج' }];
  userImg;
  normal = 'normal';
  inverse = 'inverse';
  @Input() position = 'normal';
  constructor(
    private menuService: NbMenuService) {

  }

  ngOnInit() {

  }

  onChangePassClick() {
  }

  onSignOutClick() {

  }


  ngOnDestroy() {
    if (this.menuServiceSubscription) { this.menuServiceSubscription.unsubscribe(); }
  }
}
