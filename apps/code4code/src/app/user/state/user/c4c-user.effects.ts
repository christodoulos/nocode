import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { FirestoreService } from '@nocode/auth';
import { map, tap } from 'rxjs/operators';
import { UserSignupAction, UserUpdateAction } from './c4c-user.actions';
import { C4CUser } from './c4c-user.model';
import { C4CUserService } from './c4c-user.service';

@Injectable({ providedIn: 'root' })
export class C4CUserEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private firestoreService: FirestoreService,
    private c4cUserService: C4CUserService
  ) {}

  @Effect()
  update4c4User$ = this.actions$.pipe(
    ofType(UserUpdateAction),
    map((payload) => this.firestoreService.userDoc(payload.uid)),
    tap((doc) =>
      doc.subscribe((user) => this.c4cUserService.updateUser(user as C4CUser))
    )
  );

  @Effect()
  signupUser$ = this.actions$.pipe(
    ofType(UserSignupAction),
    tap((payload) => {
      this.firestoreService.updateUsersDoc(payload.data);
      this.router.navigate(['user']);
    })
  );
}
