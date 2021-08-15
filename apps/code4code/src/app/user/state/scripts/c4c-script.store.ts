import { Injectable } from '@angular/core';
import { EntityStore, StoreConfig } from '@datorama/akita';
import { CollectionState } from 'akita-ng-fire';
import { Script } from './c4c-script.model';

export type ScriptState = CollectionState<Script>;

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'Scripts', resettable: true })
export class ScriptStore extends EntityStore<ScriptState> {
  constructor() {
    super();
  }
}
