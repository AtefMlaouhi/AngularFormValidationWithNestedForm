import { Component, Input, OnInit, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
  Validator,
  ValidationErrors,
  NG_VALIDATORS
} from '@angular/forms';

const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Component({
  selector: 'am-mail-validator',
  templateUrl: 'mail-validator.component.html',
  styleUrls: ['mail-validator.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: MailValidatorComponent,
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => MailValidatorComponent),
      multi: true
    }
  ]
})
export class MailValidatorComponent implements ControlValueAccessor, Validator {
  privateToCmpGroup: FormGroup;
  email: FormControl = new FormControl('', [Validators.required]);

  @Input() public formSubmitted: boolean;
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    return this.email.errors;
  }

  propagateChange: any = () => {};
  onTouched: any = () => {};
  writeValue(value: { [key: string]: any }) {
    if (value) {
      this.email.setValue(value);
    } else {
      this.privateToCmpGroup = new FormGroup({
        email: this.email
      });
      this.email.valueChanges.subscribe(val => this.propagateChange(val));
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
