import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

import { FirebaseUser } from './state';
import { resetStores } from '@datorama/akita';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  loggedIn$ = this.angularFireAuth.authState;
  constructor(private angularFireAuth: AngularFireAuth) {}

  parseFirebaseUser(user: firebase.User): FirebaseUser {
    const { uid, email, displayName, photoURL, emailVerified } = user;
    return { uid, email, displayName, photoURL, emailVerified };
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
