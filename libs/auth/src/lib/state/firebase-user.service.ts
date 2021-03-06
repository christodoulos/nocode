import { Injectable } from '@angular/core';
import { FirebaseUser } from './firebase-user.model';
import { FirebaseUserStore } from './firebase-user.store';

@Injectable({ providedIn: 'root' })
export class FirebaseUserService {
  constructor(private firebaseUserStore: FirebaseUserStore) {}
  updateUser(user: FirebaseUser) {
    this.firebaseUserStore.update({ ...user });
  }
}
