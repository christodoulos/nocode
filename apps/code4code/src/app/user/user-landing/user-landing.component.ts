import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UserQuery } from '@nocode/auth';
import { C4C_USER_UPDATE } from '../state/';

@Component({
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent {
  constructor(private actions: Actions, private userQuery: UserQuery) {
    const uid = this.userQuery.getValue().uid;
    this.actions.dispatch(C4C_USER_UPDATE({ uid }));
  }
}
