import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseAuthService, FirebaseUserService } from '@nocode/auth';

@Component({
  selector: 'nocode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'code4code';
  loggedIn$ = this.authService.loggedIn$;

  constructor(
    private authService: FirebaseAuthService,
    private userService: FirebaseUserService,
    private router: Router
  ) {
    this.loggedIn$.subscribe((user) => {
      if (user) {
        const data = authService.parseFirebaseUser(user);
        console.log(`${data.email} is loggedin`);
        this.userService.updateUser(data);
        this.router.navigate(['user']);
      } else {
        this.router.navigate(['']);
        console.log('logged out');
      }
    });
  }
}
