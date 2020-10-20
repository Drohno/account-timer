import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from 'src/app/components/components.module';
import { LoginViewComponent } from './login-view.component';


@NgModule({
  declarations: [LoginViewComponent],
  exports: [LoginViewComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule]
})
export class LoginViewModule {}
