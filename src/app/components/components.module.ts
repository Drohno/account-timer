import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ButtonComponent } from './button/button.component';
import { InputTextComponent } from './input-text/input-text.component';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  imports: [CommonModule, MatInputModule, MatButtonModule],
  declarations: [ButtonComponent, InputTextComponent, TimerComponent],
  exports: [ButtonComponent, InputTextComponent, TimerComponent]
})
export class ComponentsModule {}
