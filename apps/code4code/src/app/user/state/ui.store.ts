import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

import { DropdownItem } from '@nocode/ui';

export interface UI {
  userDropdown: Array<DropdownItem>;
  loading: boolean;
}

const uiState = () =>
  ({
    userDropdown: [
      { text: 'Profile', url: '/user/profile' },
      { text: 'Settings', url: '/user/settings' },
      { text: 'Sign Out', url: '/user/signout' },
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
