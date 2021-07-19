import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { AvatarCircularComponent } from './avatar-circular/avatar-circular.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SimpleDropdownComponent, AvatarCircularComponent],
  exports: [SimpleDropdownComponent, AvatarCircularComponent],
})
export class UiModule {}
