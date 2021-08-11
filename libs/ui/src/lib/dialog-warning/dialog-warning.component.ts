import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dialog-warning',
  templateUrl: './dialog-warning.component.html',
  styleUrls: ['./dialog-warning.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogWarningComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
