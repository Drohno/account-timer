import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from 'src/app/components/components.module';
import { TimerViewComponent } from './timer-view.component';

@NgModule({
  declarations: [TimerViewComponent],
  exports: [TimerViewComponent],
  imports: [CommonModule, ComponentsModule]
})
export class TimerViewModule {}
