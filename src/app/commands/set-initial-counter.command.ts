import {Command} from 'ngx-state-machine'
import {StateKeyConstants} from '../constants/state-keys.constants';

export class SetInitialCounter extends Command<number> {
  execute(executionContext:number) {
    this.putState(StateKeyConstants.COUNTER_KEY, executionContext);
  }
}
