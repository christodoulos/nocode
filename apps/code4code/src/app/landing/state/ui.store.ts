import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { DropdownItem } from '@nocode/ui';

export interface UI {
  signinDropdown: Array<DropdownItem>;
  loading: boolean;
}

const uiState = () =>
  ({
    signinDropdown: [
      { icon: 'faGoogle', text: 'Google', url: 'user' },
      { icon: 'faGithub', text: 'GitHub', url: 'user' },
      { icon: 'faFacebook', text: 'Facebook', url: 'user' },
    ],
    loading: false,
  } as UI);

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'UI' })
export class UIStore extends Store<UI> {
  constructor() {
    super(uiState());
  }
}
