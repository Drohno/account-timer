import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  logInForm: FormGroup;

  constructor(private authService: AuthService, private router: Router) {
    this.logInForm = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl('')
    });
  }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/timer']);
    }
  }

  async logIn() {
    const user = {
      email: this.logInForm.value.email,
      password: this.logInForm.value.pass
    };
    try {
      await this.authService.login(user.email, user.password);
      this.router.navigate(['/timer']);
    } catch (error) {
      alert(error.message);
    }
  }
}
