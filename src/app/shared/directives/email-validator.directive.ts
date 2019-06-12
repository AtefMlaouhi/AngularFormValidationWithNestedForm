import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';

const emailregex: RegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

@Directive({
  selector: '[amEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => EmailValidatorDirective),
      multi: true
    }
  ]
})
export class EmailValidatorDirective implements Validator {
  constructor() {}

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    if (value && !value.match(emailregex)) {
      return { invalidMail: true };
    }
    return null;
  }
}
