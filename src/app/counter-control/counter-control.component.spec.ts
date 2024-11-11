import {ComponentFixture, TestBed} from '@angular/core/testing';
import {StateMachine} from 'simple-state-machine';
import {CounterControlComponent} from './counter-control.component';
import {UpdateCounter} from '../commands/update-counter.command';


describe('CounterControlComponent', () => {
  let component: CounterControlComponent;
  let fixture: ComponentFixture<CounterControlComponent>;
  let stateMachineMock: jasmine.SpyObj<StateMachine>;

  beforeEach(async () => {
    stateMachineMock = jasmine.createSpyObj('StateMachine', ['dispatch']);

    await TestBed.configureTestingModule({
      imports: [CounterControlComponent],
      providers: [{ provide: StateMachine, useValue: stateMachineMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  function callAndAssertStateChange(buttonPosition: string, expectedValue: number) {
    const button = fixture.nativeElement.querySelector(buttonPosition);
    button.click();
    expect(stateMachineMock.dispatch).toHaveBeenCalledWith(jasmine.any(UpdateCounter));
    const dispatchedCommand = stateMachineMock.dispatch.calls.mostRecent().args[0] as UpdateCounter;

    expect(dispatchedCommand.getExecutionContext().changeBy).toBe(expectedValue);
  }

  it('should call updateCounter on increment button click', () => {
    callAndAssertStateChange('button:last-child', 1);
  });

  it('should call updateCounter on increment button click', () => {
    callAndAssertStateChange('button:first-child', -1);
  });

});
