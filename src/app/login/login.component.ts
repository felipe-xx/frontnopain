import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  alert: string;
  constructor(public _LoginServ:LoginServiceService, public Fb: FormBuilder) { 
      this.createForm();
  }

  ngOnInit() {

  }

  createForm(){
      this.loginForm = this.Fb.group({
          user: ['', Validators.required],
          pass: ['', Validators.required]
      });
  }

  LoginUsers(){
      console.log('form', this.loginForm.value);
      this._LoginServ.LoginUser(this.loginForm.value);
      this.alert = 'Paila';
  }

}