import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SimpleDropdownComponent
  ],
  exports: [
    SimpleDropdownComponent
  ],
})
export class UiModule {}
