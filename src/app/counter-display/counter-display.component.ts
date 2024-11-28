import {Component} from '@angular/core';
import {StateKeyConstants} from '../constants/state-keys.constants';
import {AsyncPipe} from '@angular/common';
import {Observable} from 'rxjs';
import {StateMachine} from '@state-management/ngx-state-machine';

@Component({
  selector: 'app-counter-display',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './counter-display.component.html',
  styleUrl: './counter-display.component.scss'
})
export class CounterDisplayComponent {
  protected counter$:Observable<number> | undefined;

  constructor(private stateMachine: StateMachine) {
    this.counter$ = this.stateMachine.observe(StateKeyConstants.COUNTER_KEY);
  }
}
