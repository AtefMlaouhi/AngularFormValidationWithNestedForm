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
export class NestedFormComponent
  implements OnInit, ControlValueAccessor, Validator {
  privateToCmpGroup: FormGroup;

  @Input() public formSubmitted: boolean;
  @Input() setFname = true;
  @Input() setLname = true;

  constructor() {}

  ngOnInit() {
    console.log(this.setFname);
    console.log(this.formSubmitted);

    this.privateToCmpGroup = new FormGroup({
      fname: new FormControl('', Validators.required),
      lname: new FormControl('', Validators.required)
    });
    this.privateToCmpGroup.valueChanges.subscribe(val =>
      this.propagateChange(val)
    );
  }

  validate(c: AbstractControl): ValidationErrors {
    if (this.privateToCmpGroup.get('fname').errors && this.setFname) {
      return this.privateToCmpGroup.get('fname').errors;
    }
    if (this.privateToCmpGroup.get('lname').errors && this.setLname) {
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
      this.ngOnInit();
    }
  }
  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }
}
