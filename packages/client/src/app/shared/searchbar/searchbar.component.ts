import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchbarComponent),
      multi: true,
    },
  ],
})
export class SearchbarComponent implements ControlValueAccessor {
  onChange = (_val: string) => {};
  onTouched = () => {};
  search = '';

  constructor() {}

  writeValue(val: string): void {
    this.search = val;
    this.onChange(this.search);
  }
  registerOnChange(fn: (val: string) => void): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
}
