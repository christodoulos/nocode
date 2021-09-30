import {
  Component,
  ChangeDetectionStrategy,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { EditorView } from 'prosemirror-view';
import { EditorState } from 'prosemirror-state';
import { Schema, DOMParser } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { addListNodes } from 'prosemirror-schema-list';
import { exampleSetup } from 'prosemirror-example-setup';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'prosemirror',
  templateUrl: './prosemirror.component.html',
  styleUrls: ['./prosemirror.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProsemirrorComponent implements AfterViewInit {
  @ViewChild('editor') editorElmRef!: ElementRef;
  @ViewChild('content') contentElmRef!: ElementRef;

  editorDiv!: HTMLDivElement;
  contentDiv!: HTMLDivElement;
  editorView: EditorView | undefined;
  mySchema = new Schema({
    nodes: addListNodes(schema.spec.nodes, 'paragraph block*', 'block'),
    marks: schema.spec.marks,
  });

  ngAfterViewInit(): void {
    this.editorDiv = this.editorElmRef.nativeElement;
    this.contentDiv = this.contentElmRef.nativeElement;
    this.editorView = new EditorView(this.editorDiv, {
      state: EditorState.create({
        doc: DOMParser.fromSchema(this.mySchema).parse(this.contentDiv),
        plugins: exampleSetup({ schema: this.mySchema }),
      }),
    });
  }
}
