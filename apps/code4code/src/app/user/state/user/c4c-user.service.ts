import { Injectable } from '@angular/core';
import { C4CUser } from './c4c-user.model';
import { C4CUserStore } from './c4c-user.store';

@Injectable({ providedIn: 'root' })
export class C4CUserService {
  constructor(private c4cUserStore: C4CUserStore) {}
  updateUser(user: C4CUser) {
    this.c4cUserStore.update({ ...user });
  }
}
