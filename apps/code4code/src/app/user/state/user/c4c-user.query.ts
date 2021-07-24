import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { C4CUserStore } from './c4c-user.store';
import { C4CUser } from './c4c-user.model';

@Injectable({ providedIn: 'root' })
export class C4CQuery extends Query<C4CUser> {
  user$ = this.select();
  role$ = this.select((state) => state.role);
  loggedIn$ = this.select((state) => state.uid !== '' && state.emailVerified);
  emailVerified$ = this.select((state) => state.emailVerified);
  uid$ = this.select((state) => state.uid);
  userEmail$ = this.select((state) => state.email);
  userDisplayName$ = this.select((state) => state.displayName);
  firstName$ = this.select((state) => state.displayName?.split(' ')[0]);
  lastName$ = this.select((state) => state.displayName?.split(' ')[1]);
  userPhotoURL$ = this.select((state) => state.photoURL);
  constructor(protected store: C4CUserStore) {
    super(store);
  }
}
