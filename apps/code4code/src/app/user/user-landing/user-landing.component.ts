import { Component } from '@angular/core';
import { FirebaseAuthService, UserQuery } from '@nocode/auth';

@Component({
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent {
  user$ = this.userQuery.user$;
  constructor(
    private userQuery: UserQuery,
    private firebaseAuthService: FirebaseAuthService
  ) {}

  signOut() {
    this.firebaseAuthService.singnOut();
  }
}
