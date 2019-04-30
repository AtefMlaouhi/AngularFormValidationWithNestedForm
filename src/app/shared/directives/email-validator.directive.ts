import { Directive, forwardRef } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidationErrors } from '@angular/forms';
import { UserMailService } from 'src/app/formValidation/services/user-mail.service';

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
  constructor(private userMail: UserMailService) {}

  validate(control: AbstractControl): ValidationErrors {
    const value = control.value;
    if (value && !value.match(emailregex)) {
      return { invalidMail: true };
    }
    if (value && value !== 'test.test@gmail.com') {
      return { mailNotExist: true };
    }
    return null;
  }

  private checkIfMailExist(value: string) {
    let errorValue = null;

    this.userMail.getAllUser().subscribe((item: any[]) => {
      console.log(item.filter(x => value === x.mail).length);
      if (item.filter(x => value === x.mail).length == 0) {
        errorValue = { mailNotExist: true };
      } else {
        errorValue = null;
      }
    });
    return errorValue;
  }
}
