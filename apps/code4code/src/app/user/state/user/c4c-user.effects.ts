import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@datorama/akita-ng-effects';
import { FirestoreService } from '@nocode/auth';
import { map, tap, take } from 'rxjs/operators';
import { C4C_USER_UPDATE } from './c4c-user.actions';
import { C4CUser } from './c4c-user.model';
import { C4CUserService } from './c4c-user.service';

@Injectable({ providedIn: 'root' })
export class C4CUserEffects {
  constructor(
    private actions$: Actions,
    private firestoreService: FirestoreService,
    private c4cUserService: C4CUserService
  ) {}

  @Effect()
  update4c4User$ = this.actions$.pipe(
    ofType(C4C_USER_UPDATE),
    map((payload) => this.firestoreService.userDoc(payload.uid)),
    take(1),
    tap((doc) =>
      doc.subscribe((user) => this.c4cUserService.updateUser(user as C4CUser))
    )
  );
}
