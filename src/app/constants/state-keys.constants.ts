import {StateKey} from '@state-management/ngx-state-machine';

export class StateKeyConstants {
    public static readonly COUNTER_KEY = new StateKey<number>('counter');
}
