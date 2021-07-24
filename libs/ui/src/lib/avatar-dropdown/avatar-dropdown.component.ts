import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
} from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'avatar-dropdown',
  templateUrl: './avatar-dropdown.component.html',
})
export class AvatarDropdownComponent {
  dropdownVisible = false;
  @Input() items: Array<string> | undefined;
  @Input() imageURL$: Observable<string | null | undefined> | undefined;
  @Output() selected: EventEmitter<string> = new EventEmitter<string>();

  @HostListener('click')
  onClick() {
    this.dropdownVisible = !this.dropdownVisible;
  }

  onItemClick(item: string) {
    this.selected.emit(item);
  }
}
