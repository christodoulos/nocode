import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { FirebaseUserStore } from './firebase-user.store';
import { FirebaseUser } from './firebase-user.model';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<FirebaseUser> {
  user$ = this.select();
  loggedIn$ = this.select((state) => state.uid !== '' && state.emailVerified);
  emailVerified$ = this.select((state) => state.emailVerified);
  uid$ = this.select((state) => state.uid);
  userEmail$ = this.select((state) => state.email);
  userDisplayName$ = this.select((state) => state.displayName);
  firstName$ = this.select((state) => state.displayName?.split(' ')[0]);
  lastName$ = this.select((state) => state.displayName?.split(' ')[1]);
  userPhotoURL$ = this.select((state) => state.photoURL);
  constructor(protected store: FirebaseUserStore) {
    super(store);
  }
}
