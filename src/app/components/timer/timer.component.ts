import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() time;

  renderedTime = { days: '00', hours: '00', minutes: '00', seconds: '00' };

  constructor() {}

  ngOnInit(): void {
    setInterval(() => {
      this.renderedTime = this.calcTime(this.time);
    }, 0);
  }

  private calcTime(startTime) {
    const hoursInADay = 24;
    const minutesInAnHour = 3600;
    const secondsInAMinute = 60;
    const millisecondsInASecond = 1000;

    const millisecondsInADay =
      hoursInADay * minutesInAnHour * millisecondsInASecond;
    const millisecondsInAnHour = minutesInAnHour * millisecondsInASecond;
    const millisecondsInAMinute = secondsInAMinute * millisecondsInASecond;

    const now = new Date().getTime();
    let timeDifference = now - startTime;
    const days = Math.floor(timeDifference / millisecondsInADay);
    timeDifference = timeDifference - days * millisecondsInADay;
    const hours = Math.floor(timeDifference / millisecondsInAnHour);
    timeDifference = timeDifference - hours * millisecondsInAnHour;
    const minutes = Math.floor(timeDifference / millisecondsInAMinute);
    timeDifference = timeDifference - minutes * millisecondsInAMinute;
    const seconds = Math.floor(timeDifference / millisecondsInASecond);

    function parseToString(amount: number) {
      return amount >= 10 ? amount.toString() : `0${amount.toString()}`;
    }

    return {
      days: parseToString(days),
      hours: parseToString(hours),
      minutes: parseToString(minutes),
      seconds: parseToString(seconds)
    };
  }
}
