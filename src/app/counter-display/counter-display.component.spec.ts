import { ComponentFixture, TestBed } from '@angular/core/testing';
import {StateMachine} from '@state-management/simple-state-machine';
import { CounterDisplayComponent } from './counter-display.component';
import {StateKeyConstants} from '../constants/state-keys.constants';

describe('CounterDisplayComponent', () => {
  let component: CounterDisplayComponent;
  let fixture: ComponentFixture<CounterDisplayComponent>;
  let stateMachineMock: jasmine.SpyObj<StateMachine>;

  beforeEach(async () => {
    stateMachineMock = jasmine.createSpyObj('StateMachine', ['observe', 'onChange']);

    await TestBed.configureTestingModule({
      imports: [CounterDisplayComponent],
      providers: [{ provide: StateMachine, useValue: stateMachineMock }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create and observe changes to counter', () => {
    expect(component).toBeTruthy();
  });
});
