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
import { ViewUpdate } from '@codemirror/view';

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

import { DialogService, DialogRef } from '@ngneat/dialog';

@Component({
  template: `
    <h1>Hello World</h1>
    <button (click)="ref.close()">Close</button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HelloWorldComponent {
  constructor(public ref: DialogRef) {}
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
  @Output() newScript = new EventEmitter();
  editorDiv: HTMLDivElement | undefined;
  editorView: EditorView | undefined;
  randomName = this.newRandomName();
  docChanged = false;

  constructor(private dialog: DialogService) {}

  ngAfterViewInit(): void {
    if (this.editorElmRef) {
      this.editorDiv = this.editorElmRef.nativeElement;
      this.editorView = new EditorView({
        state: EditorState.create({
          extensions: [
            basicSetup,
            python(),
            EditorView.updateListener.of((v: ViewUpdate) => {
              if (v.docChanged) {
                this.docChanged = true;
              }
            }),
          ],
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

  clearEditorDocument() {
    if (this.editorView) {
      this.editorView.dispatch({
        changes: { from: 0, to: this.editorView.state.doc.length },
      });
    }
  }

  onSave() {
    this.dialog
      .confirm({
        title: 'Are you sure?',
        body: 'This action cannot be undone.',
      })
      .afterClosed$.subscribe((confirmed) => console.log(confirmed));
    if (this.editorView) {
      this.script.emit({
        name: this.randomName,
        code: this.editorView.state.doc.toJSON(),
        lang: 'python',
      });
      this.randomName = this.newRandomName();
    }
  }

  onNew() {
    console.log('On new click');
    this.randomName = this.newRandomName();
    this.clearEditorDocument();
  }

  onOpen() {
    console.log('On open click');
  }

  onRun() {
    console.log('On run click');
  }
}
