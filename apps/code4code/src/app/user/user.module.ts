import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);

export const userRoutes: Route[] = [
  {
    path: '',
    component: UserLandingComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '',
    component: UserTopbarComponent,
    outlet: 'topbar',
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  declarations: [UserLandingComponent, UserTopbarComponent],
  imports: [CommonModule, RouterModule.forChild(userRoutes)],
})
export class UserModule {}
