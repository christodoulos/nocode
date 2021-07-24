import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Actions } from '@datorama/akita-ng-effects';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import { UserQuery, FirestoreUser, FirebaseSignoutAction } from '@nocode/auth';
import { Validators } from '@angular/forms';
import { C4CUser, UserSignupAction } from '../state';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  firstname$ = this.userQuery.firstName$;
  lastname$ = this.userQuery.lastName$;
  email$ = this.userQuery.userEmail$;
  firebaseUser = this.userQuery.getValue();
  signupForm: FormGroup<FirestoreUser>;

  constructor(private actions: Actions, private userQuery: UserQuery) {
    this.signupForm = new FormGroup<FirestoreUser>({
      role: new FormControl('', [Validators.required]),
    });
  }

  doCancel() {
    this.actions.dispatch(FirebaseSignoutAction);
  }

  doSignUp() {
    if (this.signupForm.valid) {
      const data = {
        ...this.firebaseUser,
        ...this.signupForm.value,
      } as C4CUser;
      this.actions.dispatch(UserSignupAction({ data }));
    }
  }
}
