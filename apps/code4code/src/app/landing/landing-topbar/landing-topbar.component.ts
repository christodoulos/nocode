import { Component } from '@angular/core';
import { UIQuery } from '../state';
import { FirebaseAuthService } from '@nocode/auth';

@Component({
  templateUrl: './landing-topbar.component.html',
  styleUrls: ['./landing-topbar.component.css'],
})
export class LandingTopbarComponent {
  items$ = this.uiQuery.signinDropdown$;
  items = ['Google', 'GitHub', 'Facebook'];

  constructor(
    private uiQuery: UIQuery,
    private firebaseAuthService: FirebaseAuthService
  ) {}

  onSelected(provider: string) {
    if (provider === 'Google') {
      this.firebaseAuthService.googleSignIn();
    }
  }
}
