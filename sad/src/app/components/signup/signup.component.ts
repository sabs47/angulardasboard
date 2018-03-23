import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { ValidateService } from '../../services/validation.service';
import { AuthConfig } from 'angular2-jwt';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public name: string;
  public username: string;
  public email: string;
  public password: string;
  public password2: string;
  public errorMsg: string = null;

  constructor(
    private authService: AuthService,
    private validationService: ValidateService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignup() {
    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password
    };

    //checks if no field is empty
    if (!this.validationService.validateRegister(user)) {
      this.errorMsg = "Please Fill in All Fields";
      this.hideError();
    } 
    else {
      if (!this.validationService.validateEmail(user.email)) {
        this.errorMsg = "Email Address is Not Valid";
        this.hideError();
      } 
      else {
        if (!this.validationService.passwordsMatch(this.password, this.password2)) {
          this.errorMsg = "Passwords Do Not Match";
          this.hideError();
        }
        else {
          this.authService.signClientUp(user).subscribe(
            payload => {
              if(payload.success) {
                this.authService.storeUserData(payload.token);
                this.router.navigate(['/dashboard']);
              }
              else {
                if(!payload.success) {
                  this.errorMsg = payload.message;
                  this.hideError();
                }
              }
            },
            error => {
              this.errorMsg = "Something Went Wrong, Please Try Again";
              this.hideError();
            });
        }
      }
    }
  }
  hideError() {
    setTimeout(() => {
      this.errorMsg = null;
    }, 2000);
  }

}
