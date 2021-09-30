import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { code4CodeIcons } from '@nocode/svg/code4code';
import { UiModule } from '@nocode/ui';
import { VendorModule } from '@nocode/vendor';

import { UserLandingComponent } from './user-landing/user-landing.component';
import { UserTopbarComponent } from './user-topbar/user-topbar.component';
import { SignupComponent } from './signup/signup.component';

import { C4CUserEffects } from './state';
import { FirebaseUserEffects } from '@nocode/auth';
import { SandboxComponent } from './sandbox/sandbox.component';
import { EditorSandboxComponent } from './editor-sandbox/editor-sandbox.component';

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
    path: 'sandbox',
    component: SandboxComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: 'editor-sandbox',
    component: EditorSandboxComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
  {
    path: '*',
    component: UserLandingComponent,
    ...canActivate(redirectUnauthorizedToLogin),
  },
];

@NgModule({
  declarations: [
    UserLandingComponent,
    UserTopbarComponent,
    SignupComponent,
    SandboxComponent,
    EditorSandboxComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(userRoutes),
    AkitaNgEffectsModule.forFeature([C4CUserEffects, FirebaseUserEffects]),
    FormsModule,
    ReactiveFormsModule,
    SvgIconsModule.forChild([...code4CodeIcons]),
    UiModule,
    VendorModule,
  ],
})
export class UserModule {}
