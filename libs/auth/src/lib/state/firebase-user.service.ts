import { Injectable } from '@angular/core';

import { FirebaseUser, FirebaseUserStore } from './firebase-user.store';

@Injectable({ providedIn: 'root' })
export class FirebaseUserService {
  constructor(private firebaseUserStore: FirebaseUserStore) {}
  updateUser(user: FirebaseUser) {
    this.firebaseUserStore.update({ ...user });
  }
}
