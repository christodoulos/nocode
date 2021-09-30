import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorSandboxComponent } from './editor-sandbox.component';

describe('EditorSandboxComponent', () => {
  let component: EditorSandboxComponent;
  let fixture: ComponentFixture<EditorSandboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorSandboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorSandboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
