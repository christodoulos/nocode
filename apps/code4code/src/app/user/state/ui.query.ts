import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UI, UIStore } from './ui.store';

@Injectable({ providedIn: 'root' })
export class UIQuery extends Query<UI> {
  userDropdown$ = this.select((state) => state.userDropdown);

  constructor(protected store: UIStore) {
    super(store);
  }
}
