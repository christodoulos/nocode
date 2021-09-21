import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrythonRunnerComponent } from './brython-runner/brython-runner.component';
import { CodemirrorComponent } from './codemirror/codemirror.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    BrythonRunnerComponent,
    CodemirrorComponent
  ],
  exports: [
    BrythonRunnerComponent,
    CodemirrorComponent
  ],
})
export class VendorModule {}
