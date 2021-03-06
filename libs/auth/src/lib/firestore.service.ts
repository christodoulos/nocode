import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

import { distinctUntilChanged, map, take } from 'rxjs/operators';
import * as _ from 'lodash';

export interface FirestoreUser {
  [key: string]: string | boolean | null | undefined;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private angularFirestore: AngularFirestore) {}

  updateUsersDoc(data: FirestoreUser) {
    const userRef: AngularFirestoreDocument = this.angularFirestore.doc(
      `users/${data.uid}`
    );
    userRef.set({ ...data }, { merge: true });
  }

  searchUserDoc(uid: string) {
    return this.angularFirestore
      .collection('users', (ref) => ref.where('uid', '==', uid))
      .valueChanges()
      .pipe(distinctUntilChanged((prev, curr) => _.isEqual(prev, curr)));
  }

  userDoc(uid: string) {
    return this.angularFirestore
      .collection('users')
      .doc(`${uid}`)
      .valueChanges()
      .pipe(distinctUntilChanged((prev, curr) => _.isEqual(prev, curr)));
  }

  isNewUser$(uid: string) {
    return this.searchUserDoc(uid).pipe(
      map((value) => value.length === 0),
      take(1)
    );
  }
}
