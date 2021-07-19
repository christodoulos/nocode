import { Component } from '@angular/core';
import { FirebaseAuthService } from '@nocode/auth';

@Component({
  templateUrl: './landing-topbar.component.html',
  styleUrls: ['./landing-topbar.component.css'],
})
export class LandingTopbarComponent {
  items = ['Google', 'GitHub', 'Facebook'];

  constructor(private firebaseAuthService: FirebaseAuthService) {}

  onSelected(provider: string) {
    if (provider === 'Google') {
      this.firebaseAuthService.googleSignIn();
    }
  }
}
