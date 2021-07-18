import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';

import { LandingComponent } from './landing.component';

export const landingRoutes: Route[] = [
  { path: '', component: LandingComponent },
  // { path: '', component: LandingTopbarComponent, outlet: 'topbar' },
  // { path: 'signup', component: SignupComponent },
];

@NgModule({
  declarations: [LandingComponent],
  imports: [CommonModule, RouterModule.forChild(landingRoutes)],
})
export class LandingModule {}
