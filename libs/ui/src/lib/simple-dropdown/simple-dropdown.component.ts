import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDropdownComponent {
  dropdownVisible = false;
  _selected: string | undefined;
  @Input() items: Array<string> | undefined;
  @Input() label: string | null | undefined;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click')
  onClick() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  onItemClick(selected: string) {
    this.selected.emit(selected);
  }
}
