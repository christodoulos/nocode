import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { ReactiveFormsModule } from '@angular/forms';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

import { UiModule } from '@nocode/ui';

import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';
import { SignupComponent } from './signup/signup.component';

import { C4CUserEffects } from './state';
import { FirebaseUserEffects } from '@nocode/auth';

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
  { path: 'signup', component: SignupComponent },
  {
    path: '*',
    component: UserLandingComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  declarations: [UserLandingComponent, UserTopbarComponent, SignupComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    AkitaNgEffectsModule.forFeature([C4CUserEffects, FirebaseUserEffects]),
    ReactiveFormsModule,
    UiModule,
  ],
})
export class UserModule {}
