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
      { icon: 'faGoogle', text: 'Google', url: 'signin?provider=google' },
      { icon: 'faGithub', text: 'GitHub', url: 'signin?provider=github' },
      { icon: 'faFacebook', text: 'Facebook', url: 'signin?provider=facebook' },
    ],
    loading: false,
  } as UI);

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'ui' })
export class UIStore extends Store<UI> {
  constructor() {
    super(uiState());
  }
}
