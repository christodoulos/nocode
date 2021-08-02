import { Component } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UserQuery } from '@nocode/auth';
import { UserUpdateAction, C4CUserQuery } from '../state/';

import { Script, ScriptService } from '../state';

@Component({
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent {
  role$ = this.c4cUserQuery.role$;
  displayName$ = this.userQuery.userDisplayName$;

  constructor(
    private actions: Actions,
    private userQuery: UserQuery,
    private c4cUserQuery: C4CUserQuery,
    private scriptService: ScriptService
  ) {
    const uid = this.userQuery.getValue().uid;
    this.actions.dispatch(UserUpdateAction({ uid }));
  }

  onScript(script: Script) {
    console.log(script);
    this.scriptService.add(script);
  }
}
