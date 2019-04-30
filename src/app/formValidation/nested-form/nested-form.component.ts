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

@Component({
  selector: 'am-nested-form',
  templateUrl: 'nested-form.component.html',
  styleUrls: ['nested-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NestedFormComponent),
      multi: true
    },
    { provide: NG_VALIDATORS, useExisting: NestedFormComponent, multi: true }
  ]
})
export class NestedFormComponent implements ControlValueAccessor, Validator {
  privateToCmpGroup: FormGroup;
  fname: FormControl = new FormControl('', Validators.required);
  lname: FormControl = new FormControl('', Validators.required);
  fnameValidation = true;
  lnameValidation = true;

  @Input() public formSubmitted: boolean;
  @Input('setFname')
  set setFname(value: boolean) {
    this.fnameValidation = value;
    this.manageValidation('fname', value);
  }
  @Input('setLname')
  set setLname(value: boolean) {
    this.lnameValidation = value;
    this.manageValidation('lname', value);
  }

  constructor() {
    this.setValidator();
  }

  validate(c: AbstractControl): ValidationErrors {
    if (this.privateToCmpGroup.get('fname').errors && this.fnameValidation) {
      return this.privateToCmpGroup.get('fname').errors;
    }
    if (this.privateToCmpGroup.get('lname').errors && this.lnameValidation) {
      return this.privateToCmpGroup.get('lname').errors;
    }
    return null;
  }

  // ControlValueAccessor START
  propagateChange: any = () => {};
  onTouched: any = () => {};
  writeValue(value: { [key: string]: any }) {
    if (value) {
      this.privateToCmpGroup.setValue(value, { emitEvent: false });
    } else {
      this.setValidator();
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  private setValidator() {
    this.privateToCmpGroup = new FormGroup({
      fname: this.fname,
      lname: this.lname
    });
    this.privateToCmpGroup.valueChanges.subscribe(val =>
      this.propagateChange(val)
    );
  }

  private manageValidation(key: string, state: boolean) {
    if (this.fnameValidation) {
      this.privateToCmpGroup.get(key).setValidators(Validators.required); // .reset();
    } else {
      this.privateToCmpGroup.get(key).clearValidators();
    }
    this.privateToCmpGroup.get(key).updateValueAndValidity();
  }
}
