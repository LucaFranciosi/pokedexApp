import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-input',
  template: `<input [type]=type readonly [value]="value" class="class">`,
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true,
    }
  ]
})
export class CustomInputComponent {
  @Input() type: string = '';
  @Input() class: string = '';
  value: any;

 
  onChange: any = () => { };
  onTouched: any = () => { };
  disabled = false;
}
