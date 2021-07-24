import { createAction, props } from '@datorama/akita-ng-effects';
import { C4CUser } from './c4c-user.model';

export const UserUpdateAction = createAction(
  'C4C User Update',
  props<{ uid: string }>()
);

export const UserSignupAction = createAction(
  'C4C User Signup',
  props<{ data: C4CUser }>()
);
