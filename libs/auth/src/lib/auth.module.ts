import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AkitaNgEffectsModule } from '@datorama/akita-ng-effects';

import { FirebaseUserEffects } from './state';

@NgModule({
  imports: [
    CommonModule,
    AkitaNgEffectsModule.forFeature([FirebaseUserEffects]),
  ],
})
export class AuthModule {}
