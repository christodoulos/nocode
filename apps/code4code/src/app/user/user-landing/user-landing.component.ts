import { Component, OnDestroy } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { UserQuery } from '@nocode/auth';
import { UserUpdateAction, C4CUserQuery } from '../state/';

import { Script, ScriptService } from '../state';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './user-landing.component.html',
  styleUrls: ['./user-landing.component.css'],
})
export class UserLandingComponent implements OnDestroy {
  role$ = this.c4cUserQuery.role$;
  displayName$ = this.userQuery.userDisplayName$;
  private subscription: Subscription;
  constructor(
    private actions: Actions,
    private userQuery: UserQuery,
    private c4cUserQuery: C4CUserQuery,
    private scriptService: ScriptService
  ) {
    this.subscription = this.scriptService.syncCollection().subscribe();
    const uid = this.userQuery.getValue().uid;
    this.actions.dispatch(UserUpdateAction({ uid }));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onScript(script: Script) {
    console.log(script);
    this.scriptService.add(script);
  }
}
