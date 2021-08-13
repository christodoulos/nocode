import { Component, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Script, ScriptService } from '../state';

@Component({
  templateUrl: './sandbox.component.html',
  styleUrls: ['./sandbox.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SandboxComponent implements OnDestroy {
  private subscription: Subscription;
  constructor(private scriptService: ScriptService) {
    this.subscription = this.scriptService.syncCollection().subscribe();
  }

  onScript(script: Script) {
    console.log(script);
    this.scriptService.add(script);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
