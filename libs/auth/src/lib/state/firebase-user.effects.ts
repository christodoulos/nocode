import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import {
  FirebaseSigninSuccessAction,
  FirebaseSignoutAction,
} from './firebase-user.actions';
import { FirebaseUserService } from './firebase-user.service';
import { map, tap } from 'rxjs/operators';
import { FirebaseAuthService } from '../firebase-auth.service';

@Injectable({ providedIn: 'root' })
export class FirebaseUserEffects {
  constructor(
    private actions$: Actions,
    private router: Router,
    private userService: FirebaseUserService,
    private firebaseAuthService: FirebaseAuthService
  ) {}

  @Effect()
  firebaseSigninSuccessEffect$ = this.actions$.pipe(
    ofType(FirebaseSigninSuccessAction),
    map((payload) => {
      console.log(payload);
      return payload.user;
    }),
    tap((user) => this.userService.updateUser(user))
  );

  @Effect()
  firebaseSignout$ = this.actions$.pipe(
    ofType(FirebaseSignoutAction),
    tap(() => {
      this.firebaseAuthService.singnOut();
      this.router.navigate(['']);
    })
  );
}
