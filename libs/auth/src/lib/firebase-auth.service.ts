import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class FirebaseAuthService {
  constructor(private angularFireAuth: AngularFireAuth) {
    this.angularFireAuth.authState.subscribe((user) => {
      if (user) {
        console.log(`FireAuth Service: \t${user.email} is LOGGED IN`);
      } else {
        console.log('FireAuth Service: \tLOGGED OUT');
      }
    });
  }

  parseFirebaseUser(user: firebase.User) {
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
    await this.angularFireAuth
      .signInWithPopup(provider)
      .then((onfulfilled) => {
        console.log(onfulfilled.additionalUserInfo);
        if (onfulfilled.user) {
          const data = this.parseFirebaseUser(onfulfilled.user);
          console.log(data);
        }
      })
      .catch((onrejected) => {
        console.log(onrejected.message);
      });
  }
}
