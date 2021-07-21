import { Component, OnInit } from '@angular/core';
import { FirebaseAuthService, FirestoreService, UserQuery } from '@nocode/auth';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  templateUrl: './user-topbar.component.html',
  styleUrls: ['./user-topbar.component.css'],
})
export class UserTopbarComponent implements OnInit {
  items = ['Profile', 'Settings', 'Sign Out'];
  uid$ = this.userQuery.uid$;
  photoURL$ = this.userQuery.userPhotoURL$;
  displayName$ = this.userQuery.userDisplayName$;

  constructor(
    private userQuery: UserQuery,
    private firebaseAuthService: FirebaseAuthService,
    private firestoreService: FirestoreService
  ) {}

  ngOnInit(): void {
    this.uid$.pipe(untilDestroyed(this)).subscribe((uid) => {
      if (uid)
        this.firestoreService
          .searchUserDoc(uid)
          .pipe(untilDestroyed(this))
          .subscribe((value) => console.log(value));
    });
  }

  onSelected(action: string) {
    if (action === 'Sign Out') {
      this.firebaseAuthService.singnOut();
    }
  }
}
