import { Component } from '@angular/core';
import { UIQuery } from '../state';

@Component({
  templateUrl: './landing-topbar.component.html',
  styleUrls: ['./landing-topbar.component.css'],
})
export class LandingTopbarComponent {
  items$ = this.uiQuery.signinDropdown$;

  constructor(private uiQuery: UIQuery) {}

  onSelected($event: string) {
    console.log($event);
    // if ($event === 'Google') [this.fireauthService.googleSignIn()];
  }
}
