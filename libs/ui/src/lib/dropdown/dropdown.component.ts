import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'dropdown',
  templateUrl: './dropdown.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownComponent {
  @Input() visible = false;
  @Input() items: Array<string> | undefined;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  onClick(item: string) {
    this.selected.emit(item);
  }
}
