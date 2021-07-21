import { createAction, props } from '@datorama/akita-ng-effects';
import { FirebaseUser } from './firebase-user.model';

export const FirebaseSigninSuccess = createAction(
  'Firebase Sign In Success',
  props<{ user: FirebaseUser }>()
);
