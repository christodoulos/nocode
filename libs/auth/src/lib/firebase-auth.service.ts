import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { FirebaseUser, FirebaseUserService } from './state';
import { resetStores } from '@datorama/akita';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(
    private angularFireAuth: AngularFireAuth,
    private firebaseUserService: FirebaseUserService,
    private firestoreService: FirestoreService
  ) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        console.log(`FireAuth Service: \t${user.email} is LOGGED IN`);
        this.firebaseUserService.updateUser(this.parseFirebaseUser(user));
        this.firestoreService.updateUsersDoc(this.parseFirebaseUser(user));
      } else {
        console.log('FireAuth Service: \tLOGGED OUT');
      }
    });
  }

  parseFirebaseUser(user: firebase.User): FirebaseUser {
    return {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified,
    };
  }

  async googleSignIn() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await this.angularFireAuth.signInWithPopup(provider);
  }

  async singnOut() {
    await this.angularFireAuth.signOut();
    resetStores();
  }
}
