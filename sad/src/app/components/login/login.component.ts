import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Route } from '@angular/compiler/src/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public username: string;
  public password: string;
  public errorMsg: string = null;
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  onSignin() {
    const user = {
      username: this.username,
      password: this.password
    };
    this.authService.signClientIn(user).subscribe( payload => {
      if(payload.success){
        this.authService.storeUserData(payload.token);
        this.router.navigate(['/dashboard']);
      }else{
        this.errorMsg = payload.message;
        setTimeout(() => {
          this.errorMsg = null;
        }, 2000);
      }
    });
  }

}
