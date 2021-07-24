import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'avatar-circular',
  templateUrl: './avatar-circular.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AvatarCircularComponent {
  @Input() imageURL$: Observable<string | null | undefined> | undefined;
  @Input() size = 10;
}
