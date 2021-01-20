import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Router, ActivatedRouteSnapshot } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  previousUrl: Observable<any> = new Subject();
  constructor(
    private router: Router,
  ) {
  }

  goToDashboardPage() {
    this.router.navigate([ '/user/dashboard' ]);
  }

  goToCartablePage() {
    this.router.navigate([ '/user/sys/workflow/cartable' ]);
  }

  goToTargetPage(url: string) {
    this.router.navigate([ url ]);
  }

  goToPreviousPage() {
    this.previousUrl.subscribe((res: string) => {
      this.router.navigate([ res ]);
    });
  }

  goToProfilePage() {
    this.router.navigate([ '/user/profile' ]);
  }

  goToSignInPage() {
    this.router.navigateByUrl('login');
  }

  goToChooseOrganizationPage() {
    this.router.navigateByUrl('login/choose-organization');
  }

  goToSetPasswordPage() {
    this.router.navigateByUrl('login/change-password');
  }

  goToErrorPage() {
    this.router.navigateByUrl('internal-error');
  }

  isLoginPageRoute(route: ActivatedRouteSnapshot) {
    return this.checkRoutePageKey(route, 'login');
  }

  isChooseOrganizationRoute(route: ActivatedRouteSnapshot) {
    return this.checkRoutePageKey(route, 'choose-organization');
  }

  isChangePasswordRoute(route: ActivatedRouteSnapshot) {
    return this.checkRoutePageKey(route, 'change-password');
  }

  private checkRoutePageKey(route: ActivatedRouteSnapshot, pageKey: string) {
    return route.children &&
      route.children[ 0 ] &&
      route.children[ 0 ].data &&
      route.children[ 0 ].data.pageKey === pageKey;
  }
}
