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
    const now = new Date().getTime();
    let timeDifference = now - startTime;
    const days = Math.floor(timeDifference / (24 * 3600 * 1000));
    timeDifference = timeDifference - days * 24 * 3600 * 1000;
    const hours = Math.floor(timeDifference / (3600 * 1000));
    timeDifference = timeDifference - hours * 3600 * 1000;
    const minutes = Math.floor(timeDifference / (60 * 1000));
    timeDifference = timeDifference - minutes * 60 * 1000;
    const seconds = Math.floor(timeDifference / 1000);

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
