import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginViewComponent } from './views/login/login-view.component';
import { TimerViewComponent } from './views/timer/timer-view.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginViewComponent
  },
  { path: 'timer', component: TimerViewComponent },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
