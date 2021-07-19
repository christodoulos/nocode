import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FirebaseUser, FirebaseUserStore } from './firebase-user.store';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<FirebaseUser> {
  user$ = this.select();
  loggedIn$ = this.select((state) => state.uid !== '' && state.emailVerified);
  emailVerified$ = this.select((state) => state.emailVerified);
  uid$ = this.select((state) => state.uid);
  userEmail$ = this.select((state) => state.email);
  userDisplayName$ = this.select((state) => state.displayName);
  userPhotoURL$ = this.select((state) => state.photoURL);
  constructor(protected store: FirebaseUserStore) {
    super(store);
  }
}
