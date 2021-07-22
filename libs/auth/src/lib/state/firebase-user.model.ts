export interface FirebaseUser {
  [key: string]: string | boolean | null | undefined;
  displayName: string | null;
  email: string | null;
  emailVerified: boolean;
  photoURL: string | null;
  uid: string;
}
