import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface FirebaseUser {
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  uid: string;
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Firebase User', resettable: true })
export class FirebaseUserStore extends Store<FirebaseUser> {
  constructor() {
    super({});
  }
}
