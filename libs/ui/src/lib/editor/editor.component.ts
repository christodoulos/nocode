import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { EditorState, EditorView, basicSetup } from '@codemirror/basic-setup';
import { python } from '@codemirror/lang-python';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent implements AfterViewInit {
  @ViewChild('editor') editorElmRef: ElementRef | undefined;
  editorDiv: HTMLDivElement | undefined;
  editorView: EditorView | undefined;

  ngAfterViewInit(): void {
    if (this.editorElmRef) {
      this.editorDiv = this.editorElmRef.nativeElement;
      this.editorView = new EditorView({
        state: EditorState.create({
          // doc: 'hello',
          extensions: [basicSetup, python()],
        }),
        parent: this.editorDiv,
      });
    }
  }

  onSave() {
    if (this.editorView) {
      const code = this.editorView.state.doc.toJSON();
      for (let i = 0; i < this.editorView.state.doc.lines; i++) {
        console.log(code[i]);
      }
    }
  }

  onNew() {
    console.log('On new click');
  }

  onOpen() {
    console.log('On open click');
  }
}
