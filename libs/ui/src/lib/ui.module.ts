import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { AvatarCircularComponent } from './avatar-circular/avatar-circular.component';
import { AvatarDropdownComponent } from './avatar-dropdown/avatar-dropdown.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SimpleDropdownComponent, AvatarCircularComponent, AvatarDropdownComponent, DropdownComponent, EditorComponent],
  exports: [SimpleDropdownComponent, AvatarCircularComponent, AvatarDropdownComponent, DropdownComponent, EditorComponent],
})
export class UiModule {}
