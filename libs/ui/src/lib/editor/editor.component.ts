import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { python } from '@codemirror/lang-python';

import {
  uniqueNamesGenerator,
  adjectives,
  colors,
  animals,
} from 'unique-names-generator';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements AfterViewInit {
  @ViewChild('editor') editorElmRef: ElementRef | undefined;
  @Output() scriptCode: EventEmitter<Array<string>> = new EventEmitter<
    Array<string>
  >();
  @Output() scriptName: EventEmitter<string> = new EventEmitter<string>();
  editorDiv: HTMLDivElement | undefined;
  editorView: EditorView | undefined;
  randomName = uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
  });

  ngAfterViewInit(): void {
    if (this.editorElmRef) {
      this.editorDiv = this.editorElmRef.nativeElement;
      this.editorView = new EditorView({
        state: EditorState.create({
          extensions: [basicSetup, python()],
        }),
        parent: this.editorDiv,
      });
    }
  }

  onSave() {
    if (this.editorView) {
      this.scriptCode.emit(this.editorView.state.doc.toJSON());
      this.scriptName.emit(this.randomName);
    }
  }

  onNew() {
    console.log('On new click');
  }

  onOpen() {
    console.log('On open click');
  }

  onRun() {
    console.log('On run click');
  }
}
