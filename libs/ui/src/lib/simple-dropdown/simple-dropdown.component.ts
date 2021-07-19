import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ChangeDetectionStrategy,
} from '@angular/core';
import { Observable } from 'rxjs';
import { DropdownItem } from '../interfaces';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'simple-dropdown',
  templateUrl: './simple-dropdown.component.html',
  styleUrls: ['./simple-dropdown.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SimpleDropdownComponent {
  dropdownVisible = false;
  @Input() items$: Observable<Array<DropdownItem>> | undefined;
  @Input() label: string | null | undefined;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click')
  onClick() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  onItemClick(item: string) {
    this.selected.emit(item);
  }
}
