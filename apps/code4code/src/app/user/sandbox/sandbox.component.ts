import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Script, ScriptService } from '../state';

@Component({
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxComponent implements OnDestroy {
  private subscription: Subscription;
  sandScript = '';
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
}
