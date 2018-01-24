import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";

import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 
  newLoginForm: FormGroup;
  errorMessage: String;
 
  constructor(private fb: FormBuilder, private router: Router,  private cookieService: CookieService ) {
 
    if(this.cookieService.check('CookieName'))
    {
      this.cookieService.delete('CookieName');
    }

   this.newLoginForm = this.fb.group({
      userName: new FormControl('', {
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),     
    });
   }

  ngOnInit() {
  }

  public login()
  {
    if(this.newLoginForm.get('userName').value == "gimudia" 
    && this.newLoginForm.get('password').value == "gimudia")
    {
      this.router.navigate(['/dashboard']);
      this.cookieService.set( 'CookieName', this.newLoginForm.get('userName').value );      
    }

    else
    {
      this.errorMessage = "incorrect user name or password!";
    }
  }
}
