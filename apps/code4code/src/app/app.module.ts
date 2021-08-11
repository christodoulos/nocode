import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';

import { SvgIconsModule } from '@ngneat/svg-icon';
import { questionMarkCircleIcon } from '@nocode/svg/question-mark-circle';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        loadChildren: () =>
          import('./landing/landing.module').then((m) => m.LandingModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((m) => m.UserModule),
      },
    ]),
    AkitaNgRouterStoreModule,
    environment.production ? [] : AkitaNgDevtools.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    SvgIconsModule.forRoot({
      sizes: {
        xs: '10px',
        sm: '12px',
        md: '16px',
        lg: '20px',
        xl: '24px',
        xxl: '30px',
      },
      defaultSize: 'xl',
      missingIconFallback: questionMarkCircleIcon,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
