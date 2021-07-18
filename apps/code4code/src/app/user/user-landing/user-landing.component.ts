import { Component } from '@angular/core';
import { FirebaseAuthService } from '@nocode/auth';

@Component({
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent {
  constructor(private firebaseAuthService: FirebaseAuthService) {}

  signOut() {
    this.firebaseAuthService.singnOut();
  }
}
