import { Component } from '@angular/core';
import {StateMachine} from 'ngx-state-machine';
import {UpdateCounter} from '../commands/update-counter.command';

@Component({
  selector: 'app-counter-control',
  standalone: true,
  imports: [],
  templateUrl: './counter-control.component.html',
  styleUrl: './counter-control.component.scss'
})
export class CounterControlComponent {
  constructor(private stateMachine: StateMachine) {
  }

  increment(): void {
    this.stateMachine.dispatch(new UpdateCounter({changeBy: 1}));
  }

  decrement(): void {
    this.stateMachine.dispatch(new UpdateCounter({changeBy: -1}));
  }

}
