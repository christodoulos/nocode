import { Component } from '@angular/core';
import { FirestoreService, UserQuery } from '@nocode/auth';
import { C4CUser } from '../state/c4c-user.model';
import { C4CUserService } from '../state/c4c-user.service';

@Component({
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent {
  uid = this.userQuery.getValue().uid;
  userDoc$ = this.firestoreService.userDoc(this.uid);
  constructor(
    private firestoreService: FirestoreService,
    private c4cUserService: C4CUserService,
    private userQuery: UserQuery
  ) {
    this.userDoc$.subscribe((user) => {
      this.c4cUserService.updateUser(user as C4CUser);
    });
  }
}
