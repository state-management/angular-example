import {Component, OnDestroy} from '@angular/core';
import {StateKeyConstants} from '../constants/state-keys.constants';
import {AsyncPipe} from '@angular/common';
import {Observable, Subscription} from 'rxjs';
import {StateMachine} from 'ngx-state-machine';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss'
})
export class CounterDisplayComponent implements OnDestroy {
  protected counter$:Observable<number> | undefined;
  protected subscription: Subscription;

  constructor(private stateMachine: StateMachine) {
    this.counter$ = this.stateMachine.observe(StateKeyConstants.COUNTER_KEY);

  }


  ngOnDestroy(): void {
    if(this.subscription)
      this.subscription.unsubscribe();
  }

}
