import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  templateUrl: './editor-sandbox.component.html',
  styleUrls: ['./editor-sandbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditorSandboxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
