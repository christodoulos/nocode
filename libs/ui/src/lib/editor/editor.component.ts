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

export interface Script {
  name: string;
  code: Array<string>;
  lang: string;
}

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements AfterViewInit {
  @ViewChild('editor') editorElmRef: ElementRef | undefined;
  @Output() script: EventEmitter<Script> = new EventEmitter<Script>();
  editorDiv: HTMLDivElement | undefined;
  editorView: EditorView | undefined;
  randomName = this.newRandomName();

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

  newRandomName() {
    return uniqueNamesGenerator({
      dictionaries: [adjectives, colors, animals],
    });
  }

  onSave() {
    if (this.editorView) {
      this.script.emit({
        name: this.randomName,
        code: this.editorView.state.doc.toJSON(),
        lang: 'python',
      });
      // this.randomName = this.newRandomName();
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
