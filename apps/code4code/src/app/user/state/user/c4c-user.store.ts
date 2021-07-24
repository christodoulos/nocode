import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';
import { C4CUser } from './c4c-user.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'C4C User', resettable: true })
export class C4CUserStore extends Store<C4CUser> {
  constructor() {
    super({});
  }
}
