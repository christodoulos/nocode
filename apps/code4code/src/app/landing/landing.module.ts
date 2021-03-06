import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { canActivate, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { code4CodeIcons } from '@nocode/svg/code4code';

import { UiModule } from '@nocode/ui';

import { LandingComponent } from './landing/landing.component';
import { LandingTopbarComponent } from './landing-topbar/landing-topbar.component';

const redirectLoggedInToUser = () => redirectLoggedInTo(['user']);

export const landingRoutes: Route[] = [
  {
    path: '',
    component: LandingComponent,
    ...canActivate(redirectLoggedInToUser),
  },
  {
    path: '',
    component: LandingTopbarComponent,
    outlet: 'topbar',
    ...canActivate(redirectLoggedInToUser),
  },
];

@NgModule({
  declarations: [LandingComponent, LandingTopbarComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(landingRoutes),
    SvgIconsModule.forChild([...code4CodeIcons]),
    UiModule,
  ],
})
export class LandingModule {}
