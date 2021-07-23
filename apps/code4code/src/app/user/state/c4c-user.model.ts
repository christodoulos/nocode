import { FirebaseUser } from '@nocode/auth';

export interface C4CUser extends FirebaseUser {
  role: string;
}
