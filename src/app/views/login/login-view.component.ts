import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {
  logInForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.logInForm = new FormGroup({
      email: new FormControl(''),
      pass: new FormControl('')
    });
  }

  ngOnInit(): void {}

  logIn() {
    console.log(this.logInForm.value);
  }
}
