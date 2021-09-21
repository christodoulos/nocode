import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  NgZone,
  forwardRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
  Editor,
  EditorChange,
  EditorFromTextArea,
  ScrollInfo,
} from 'codemirror';

declare let CodeMirror: unknown;

@Component({
  selector: '@nocode-codemirror',
  templateUrl: './codemirror.component.html',
  styleUrls: ['./codemirror.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CodemirrorComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CodemirrorComponent
  implements AfterViewInit, ControlValueAccessor
{
  @ViewChild('codemirror') cmElementRef:
    | ElementRef<HTMLTextAreaElement>
    | undefined;
  @Output() cursorActivity = new EventEmitter<Editor>();
  codeMirror: EditorFromTextArea | undefined;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  private _codeMirror: any;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  get codeMirrorGlobal(): any {
    if (this._codeMirror) {
      return this._codeMirror;
    }
    this._codeMirror =
      typeof CodeMirror !== 'undefined' ? CodeMirror : require('codemirror');
    return this._codeMirror;
  }

  value = '';

  constructor(private _ngZone: NgZone) {}

  ngAfterViewInit(): void {
    this._ngZone.runOutsideAngular(() => {
      this.codeMirror = this.codeMirrorGlobal.fromTextArea(
        this.cmElementRef?.nativeElement,
        {
          lineNumbers: true,
          mode: 'markdown',
        }
      ) as EditorFromTextArea;
      this.codeMirror.on('cursorActivity', (cm) =>
        this._ngZone.run(() => this.cursorActive(cm))
      );
      this.codeMirror.on('change', (cm, change) =>
        this._ngZone.run(() => this.codemirrorValueChanged(cm, change))
      );
    });
  }

  cursorActive(cm: Editor) {
    this.cursorActivity.emit(cm);
  }

  codemirrorValueChanged(cm: Editor, change: EditorChange) {
    const cmVal = cm.getValue();
    if (this.value !== cmVal) {
      this.value = cmVal;
      this.onChange(this.value);
    }
  }

  // ControlValueAccessor interface implementation
  writeValue(value: string) {
    if (value === null || value === undefined) {
      return;
    }
    if (!this.codeMirror) {
      this.value = value;
      return;
    }
  }

  // ControlValueAccessor interface implementation
  registerOnChange(fn: (value: string) => void) {
    this.onChange = fn;
  }

  // ControlValueAccessor interface implementation
  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  private onChange = (_: any) => {};
  private onTouched = () => {};
}
