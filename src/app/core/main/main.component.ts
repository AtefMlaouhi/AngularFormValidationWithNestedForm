import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
import { UserInfo } from '../models/user.info';

@Component({
  selector: 'am-app',
  templateUrl: 'main.component.html',
  styleUrls: ['main.component.scss']
})
export class MainComponent implements OnInit {
  myForm: FormGroup;
  userInfo: UserInfo;
  fnameCheck = true;
  lnameCheck = true;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      email: ['', Validators.required],
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
}
