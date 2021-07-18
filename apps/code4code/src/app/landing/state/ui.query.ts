import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UI, UIStore } from './ui.store';

@Injectable({ providedIn: 'root' })
export class UIQuery extends Query<UI> {
  signinDropdown$ = this.select((state) => state.signinDropdown);

  constructor(protected store: UIStore) {
    super(store);
  }
}
