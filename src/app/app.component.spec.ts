import {ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {StateMachine} from 'simple-state-machine';
import {Component} from '@angular/core';
import {SetInitialCounter} from './commands/set-initial-counter.command';

@Component({
  selector: 'app-counter-control',
  standalone: true,
  template: ''
})
class MockCounterControlComponent {}

@Component({
  selector: 'app-counter-display',
  standalone: true,
  template: ''
})
class MockCounterDisplayComponent {}

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let stateMachineMock: jasmine.SpyObj<StateMachine>;

  beforeEach(async () => {
    stateMachineMock = jasmine.createSpyObj('StateMachine', ['dispatch']);

    await TestBed.configureTestingModule({
      imports: [AppComponent,MockCounterControlComponent, MockCounterDisplayComponent],
      providers: [{ provide: StateMachine, useValue: stateMachineMock }
      ]
    }).overrideComponent(AppComponent, {
      set: {
        providers: [{ provide: StateMachine, useValue: stateMachineMock }],
        imports: [MockCounterControlComponent, MockCounterDisplayComponent]
      }
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
    expect(stateMachineMock.dispatch).toHaveBeenCalledWith(jasmine.any(SetInitialCounter));
    expect(stateMachineMock.dispatch.calls.mostRecent().args[0].getExecutionContext()).toBe(0);
  });

});
