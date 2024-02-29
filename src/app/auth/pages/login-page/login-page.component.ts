import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  public userLoginForm=new FormGroup({
    email:new FormControl<string>('',[Validators.required]),
    password:new FormControl<string>('',[Validators.required])
  });
}
