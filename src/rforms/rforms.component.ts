import { Component, OnInit } from '@angular/core';

import { FormGroup , FormControl ,Validators } from '@angular/forms';

import { Validator } from './rforms.validators';
@Component({
  selector: 'app-rforms',
  templateUrl: './rforms.component.html',
  styleUrls: ['./rforms.component.css']
})
export class RformsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  form  = new FormGroup({
    email : new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validator.containMax
    ]),
    password: new FormControl('',Validators.required)
  });

  get email()
  {
    return this.form.get('email');
  }
  get password()
  {
    return this.form.get('password');
  }

}
