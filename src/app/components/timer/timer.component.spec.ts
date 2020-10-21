import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerComponent } from './timer.component';

describe('TimerComponent', () => {
  let component: TimerComponent;
  let fixture: ComponentFixture<TimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TimerComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render with a starting date of now', async () => {
    component.time = new Date().getTime();
    fixture.autoDetectChanges();
    const timeCalculated = component.calcTime(component.time);
    expect(timeCalculated.days).toEqual('00');
  });

  it('should render with 1/1/1970 at 00:00:00 as starting date', async () => {
    component.time = 0;
    const differenceInTime = new Date().getTime() - new Date(0).getTime();
    const msInSecond = 1000;
    const secondsInHour = 3600;
    const hoursInDay = 24;
    const differenceInDays = Math.floor(
      differenceInTime / (hoursInDay * secondsInHour * msInSecond)
    );
    fixture.autoDetectChanges();
    const timeCalculated = component.calcTime(component.time);
    expect(timeCalculated.days).toEqual(differenceInDays.toString());
  });
});
