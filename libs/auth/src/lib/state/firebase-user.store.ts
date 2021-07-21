import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { FirebaseUser } from './firebase-user.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Firebase User', resettable: true })
export class FirebaseUserStore extends Store<FirebaseUser> {
  constructor() {
    super({});
  }
}
