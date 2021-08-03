import { Injectable } from '@angular/core';
import { ScriptStore, ScriptState } from './c4c-script.store';
import { CollectionService } from 'akita-ng-fire';
import { UserQuery } from '@nocode/auth';

@Injectable({ providedIn: 'root' })
export class ScriptService extends CollectionService<ScriptState> {
  constructor(scriptStore: ScriptStore, private userQuery: UserQuery) {
    super(scriptStore);
  }

  get path() {
    const uid = this.userQuery.getValue().uid;
    return `users/${uid}/scripts`;
  }
}
