import { Injectable } from '@angular/core';
import {
  Actions,
  Effect,
  createEffect,
  ofType,
} from '@datorama/akita-ng-effects';
import { FirebaseSigninSuccess } from './firebase-user.actions';
import { FirebaseUserService } from './firebase-user.service';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class FirebaseUserEffects {
  constructor(
    private actions$: Actions,
    private userService: FirebaseUserService
  ) {}

  firebaseSigninSuccessEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FirebaseSigninSuccess),
      map((payload) => {
        console.log(payload);
        return payload.user;
      }),
      tap((user) => this.userService.updateUser(user))
    )
  );
}
