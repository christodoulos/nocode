import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleDropdownComponent } from './simple-dropdown/simple-dropdown.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SimpleDropdownComponent],
  exports: [SimpleDropdownComponent],
})
export class UiModule {}
