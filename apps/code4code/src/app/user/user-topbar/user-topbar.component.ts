import { Component } from '@angular/core';
import { UIQuery } from '../state';
import { UserQuery } from '@nocode/auth';

@Component({
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css'],
})
export class UserTopbarComponent {
  items$ = this.uiQuery.userDropdown$;
  photoURL$ = this.userQuery.userPhotoURL$;
  displayName$ = this.userQuery.userDisplayName$;

  constructor(private uiQuery: UIQuery, private userQuery: UserQuery) {}
}
