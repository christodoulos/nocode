import { Component } from '@angular/core';
import { FirebaseAuthService, UserQuery } from '@nocode/auth';

@Component({
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css'],
})
export class UserTopbarComponent {
  items = ['Profile', 'Settings', 'Sign Out'];
  photoURL$ = this.userQuery.userPhotoURL$;
  displayName$ = this.userQuery.userDisplayName$;

  constructor(
    private userQuery: UserQuery,
    private firebaseAuthService: FirebaseAuthService
  ) {}

  onSelected(action: string) {
    if (action === 'Sign Out') {
      this.firebaseAuthService.singnOut();
    }
  }
}
