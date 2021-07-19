import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { AvatarCircularComponent } from './avatar-circular/avatar-circular.component';
import { AvatarDropdownComponent } from './avatar-dropdown/avatar-dropdown.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SimpleDropdownComponent, AvatarCircularComponent, AvatarDropdownComponent],
  exports: [SimpleDropdownComponent, AvatarCircularComponent, AvatarDropdownComponent],
})
export class UiModule {}
