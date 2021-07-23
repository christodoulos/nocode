import { Component, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup } from '@ngneat/reactive-forms';
import {
  UserQuery,
  FirestoreUser,
  FirebaseAuthService,
  FirestoreService,
} from '@nocode/auth';
import { Validators } from '@angular/forms';

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

  constructor(
    private userQuery: UserQuery,
    private authService: FirebaseAuthService,
    private firestoreService: FirestoreService
  ) {
    this.signupForm = new FormGroup<FirestoreUser>({
      role: new FormControl('', [Validators.required]),
    });
  }

  doCancel() {
    this.authService.singnOut();
  }

  doSignUp() {
    if (this.signupForm.valid) {
      this.firestoreService.updateUsersDoc({
        ...this.firebaseUser,
        ...this.signupForm.value,
      });
    }
  }
}
