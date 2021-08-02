import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { Script } from './c4c-script.model';

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Scripts', resettable: true })
export class ScriptStore extends EntityStore<Script> {
  constructor() {
    super();
  }
}
