import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Script, ScriptService } from '../state';

const defaults = {
  markdown:
    '# Heading\n\nSome **bold** and _italic_ text\nBy [Scott Cooper](https://github.com/scttcper)',
  'text/typescript': `const component = {
  name: "@ctrl/ngx-codemirror",
  author: "Scott Cooper",
  repo: "https://github.com/scttcper/ngx-codemirror"
};
const hello: string = 'world';`,
};

@Component({
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxComponent implements OnDestroy {
  private subscription: Subscription;
  sandScript = '';
  mode: keyof typeof defaults = 'markdown';
  defaults = '';
  constructor(private scriptService: ScriptService) {
    this.subscription = this.scriptService.syncCollection().subscribe();
  }

  onScript(script: Script) {
    console.log(script);
    this.scriptService.add(script);
  }
  onRun(script: Array<string>) {
    console.log(script);
    this.sandScript = script.join('\n');
    console.log(this.sandScript);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  handleChange($event: Event): void {
    console.log('ngModelChange', $event);
  }
}
