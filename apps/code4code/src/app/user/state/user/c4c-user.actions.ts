import { createAction, props } from '@datorama/akita-ng-effects';
import { C4CUser } from './c4c-user.model';

export const C4C_USER_UPDATE = createAction(
  'C4C User Update',
  props<{ uid: string }>()
);
