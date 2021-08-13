import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AkitaNgRouterStoreModule } from '@datorama/akita-ng-router-store';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';

import { SvgIconsModule } from '@ngneat/svg-icon';
import { questionMarkCircleIcon } from '@nocode/svg/question-mark-circle';
import { DialogModule } from '@ngneat/dialog';

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
    DialogModule.forRoot({
      sizes: {
        sm: {
          width: 400, // 300px
          minHeight: 200, // 250px
        },
        md: {
          width: '60vw',
          height: '60vh',
        },
        lg: {
          width: '90vw',
          height: '90vh',
        },
        fullScreen: {
          width: '100vw',
          height: '100vh',
        },
        stretch: {
          minHeight: 500,
          maxHeight: '85%',
        },
      },
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
