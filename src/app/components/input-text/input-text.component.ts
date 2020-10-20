import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputTextComponent)
    }
  ]
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input() type: 'text' | 'password' = 'text';
  @Input() placeholder: string;
  value: string;
  isDisabled: boolean;
  onChange = (_: any) => {};
  onTouch = () => {};

  constructor() {}

  ngOnInit(): void {}

  onInput(value: string) {
    this.value = value;
    this.onTouch();
    this.onChange(this.value);
  }

  // Tells Angular how to write value from model into view
  writeValue(value: any) {
    if (value) {
      this.value = value || '';
    } else {
      this.value = '';
    }
  }
  // Registers a handler function that is called when the view changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // Registers a handler to be called when the component receives a touch event, useful for knowing if the component has been focused
  registerOnTouched(fn: any): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
