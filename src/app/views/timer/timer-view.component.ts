import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './timer-view.component.html',
  styleUrls: ['./timer-view.component.scss']
})
export class TimerViewComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) { }

  public lastLoginAt;

  ngOnInit(): void {
    const user: any = this.authService.getUser();
    this.lastLoginAt = user.lastLoginAt;
  }

  logOut() {
    this.authService.logOut().then(() => {
      this.authService.setUser(null);
      this.router.navigate(['/login']);
    });
  }
}
