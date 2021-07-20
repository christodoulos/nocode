import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/firestore';

interface User {
  [key: string]: string | boolean | null | undefined;
  uid: string;
}

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private angularFirestore: AngularFirestore) {}

  updateUsersDoc(data: User) {
    const userRef: AngularFirestoreDocument = this.angularFirestore.doc(
      `users/${data.uid}`
    );
    userRef.set({ ...data }, { merge: true });
  }
}
