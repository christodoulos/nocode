import { createAction, props } from '@datorama/akita-ng-effects';
import { FirebaseUser } from './firebase-user.model';

export const FirebaseSigninSuccessAction = createAction(
  'Firebase Sign In Success',
  props<{ user: FirebaseUser }>()
);

export const FirebaseSignoutAction = createAction('Firebase Signout');
