import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SvgIconsModule } from '@ngneat/svg-icon';

import { editorIcons } from '@nocode/svg/editor';
import { checkCircleIcon } from '@nocode/svg/check-circle';
import { exclamationCircleIcon } from '@nocode/svg/exclamation-circle';

import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';
import { AvatarCircularComponent } from './avatar-circular/avatar-circular.component';
import { AvatarDropdownComponent } from './avatar-dropdown/avatar-dropdown.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { EditorComponent } from './editor/editor.component';
import { DialogWarningComponent } from './dialog-warning/dialog-warning.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SvgIconsModule.forChild([
      ...editorIcons,
      checkCircleIcon,
      exclamationCircleIcon,
    ]),
  ],
  declarations: [
    SimpleDropdownComponent,
    AvatarCircularComponent,
    AvatarDropdownComponent,
    DropdownComponent,
    EditorComponent,
    DialogWarningComponent,
  ],
  exports: [
    SimpleDropdownComponent,
    AvatarCircularComponent,
    AvatarDropdownComponent,
    DropdownComponent,
    EditorComponent,
    DialogWarningComponent,
  ],
})
export class UiModule {}
