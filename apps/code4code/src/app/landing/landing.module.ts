import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { LandingComponent } from './landing/landing.component';
import { LandingTopbarComponent } from './landing-topbar/landing-topbar.component';

export const landingRoutes: Route[] = [
  { path: '', component: LandingComponent },
  { path: '', component: LandingTopbarComponent, outlet: 'topbar' },
  // { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [LandingComponent, LandingTopbarComponent],
  imports: [CommonModule, RouterModule.forChild(landingRoutes)],
})
export class LandingModule {}
