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
      tap((lala) => console.log(lala, 'ki aposkata')),
      ofType(FirebaseSigninSuccess),
      map((payload) => payload.user),
      tap((user) => this.userService.updateUser(user))
    )
  );
}
