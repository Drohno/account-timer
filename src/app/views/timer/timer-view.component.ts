import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './timer-view.component.html',
  styleUrls: ['./timer-view.component.scss']
})
export class TimerViewComponent implements OnInit {
  constructor(private authService: AuthService) {}

  public lastLoginAt;

  ngOnInit(): void {
    const user: any = JSON.parse(localStorage.getItem('user'));
    this.lastLoginAt = user.lastLoginAt;
  }

  logOut() {
    this.authService.logOut();
  }
}
