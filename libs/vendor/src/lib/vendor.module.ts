import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrythonRunnerComponent } from './brython-runner/brython-runner.component';
import { CodemirrorComponent } from './codemirror/codemirror.component';
import { ProsemirrorComponent } from './prosemirror/prosemirror.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BrythonRunnerComponent,
    CodemirrorComponent,
    ProsemirrorComponent
  ],
  exports: [
    BrythonRunnerComponent,
    CodemirrorComponent,
    ProsemirrorComponent
  ],
})
export class VendorModule {}
