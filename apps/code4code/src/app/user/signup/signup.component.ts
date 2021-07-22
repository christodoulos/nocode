import { Component, ChangeDetectionStrategy } from '@angular/core';
import { UserQuery } from '@nocode/auth';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignupComponent {
  firstname$ = this.userQuery.firstName$;
  lastname$ = this.userQuery.lastName$;
  email$ = this.userQuery.userEmail$;
  constructor(private userQuery: UserQuery) {}
}
