import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CounterControlComponent} from './counter-control/counter-control.component';
import {CounterDisplayComponent} from './counter-display/counter-display.component';
import {CommonModule} from '@angular/common';
import {SetInitialCounter} from './commands/set-initial-counter.command';
import {StateMachine} from 'ngx-state-machine';
import {provideStateMachine} from 'ngx-state-machine';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CounterControlComponent, CounterDisplayComponent, CommonModule],
  providers: [provideStateMachine()],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-app';

  constructor(private stateMachine: StateMachine) {
    this.stateMachine.dispatch(new SetInitialCounter(0));
  }

}
