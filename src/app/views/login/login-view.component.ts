import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
      email: new FormControl('', Validators.email,),
      pass: new FormControl('')
    });
  }

  ngOnInit() { }

  logIn() {
    const user = {
      email: this.logInForm.value.email,
      password: this.logInForm.value.pass
    };
    this.authService.login(user.email, user.password).then(response => {
      this.authService.setUser(response.user);
      this.router.navigate(['/timer']);
    }).catch(error => {
      this.authService.setUser(null);
      alert(error.message);
    })
  }
}
