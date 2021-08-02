import { Injectable } from '@angular/core';
import { Script } from './c4c-script.model';
import { ScriptStore } from './c4c-script.store';
import { CollectionConfig, CollectionService } from 'akita-ng-fire';
import { UserQuery } from '@nocode/auth';

@Injectable({ providedIn: 'root' })
// @CollectionConfig({ path: '/users/13Qv5vqBo1RgQBdqqnfStJoYSSi2/scripts' })
export class ScriptService extends CollectionService<Script> {
  constructor(scriptStore: ScriptStore, private userQuery: UserQuery) {
    super(scriptStore);
  }

  get path() {
    const uid = this.userQuery.getValue().uid;
    return `users/${uid}/scripts`;
  }
}
