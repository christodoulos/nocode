import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserQuery } from '@nocode/auth';

@Component({
  selector: 'nocode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'code4code';
  loggedIn$ = this.userQuery.loggedIn$;
  constructor(private userQuery: UserQuery, private router: Router) {
    this.loggedIn$.subscribe((isLoggedIn) => {
      if (isLoggedIn) {
        this.router.navigate(['user']);
      } else {
        this.router.navigate(['']);
      }
    });
  }
}
