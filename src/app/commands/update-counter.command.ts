import {Command} from 'ngx-state-machine'
import {StateKeyConstants} from '../constants/state-keys.constants';

export interface UpdateCounterParam {changeBy: number}

export class UpdateCounter extends Command<UpdateCounterParam> {
  execute(params:UpdateCounterParam) {
    const currentValue = this.getLatest(StateKeyConstants.COUNTER_KEY) || 0 ;
    const newValue = currentValue + params.changeBy;
    this.putState(StateKeyConstants.COUNTER_KEY, newValue);
  }
}
