import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, NgForm } from '@angular/forms';
import { UserInfo } from '../nested-form/models/user.info';

@Component({
  selector: 'am-home-validation',
  templateUrl: './home-validation.component.html',
  styleUrls: ['./home-validation.component.scss']
})
export class HomeValidationComponent implements OnInit {
  formToValidate: FormGroup;
  userInfo: UserInfo = { email: '', fname: '', lname: '' };
  fnameCheck = true;
  lnameCheck = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.formToValidate = this.fb.group({
      email: '',
      info: [
        {
          fname: '',
          lname: ''
        }
      ]
    });
  }

  submit(form: NgForm) {
    this.userInfo = form.value;
    console.log(this.userInfo);
  }

  onSubmit(post: UserInfo) {}
}
