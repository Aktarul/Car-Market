import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { ValidateService } from '../../service/validate.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: String;
  password: String;

  constructor(
    private authService: AuthService,
    private _flashMessagesService: FlashMessagesService,
    private router: Router,
    private validate: ValidateService
  ) { }

  ngOnInit() {
  }

  onLogIn() {
     // console.log("logIn : " + this.email + " " + this.password);

    const user  = {
      email: this.email,
      password: this.password
    };

    if (!this.validate.validEmail(user.email)) {
      this._flashMessagesService.show('Email is not valid!', { cssClass: 'alert-danger'});
      return;
    }

    if (typeof this.password == 'undefined') {
      this._flashMessagesService.show('Please enter Password!', { cssClass: 'alert-danger'});
      return;
    }

    this.authService.authenticateUser(user)
      .subscribe(res => {

        if (res.success) {

          localStorage.setItem('loginId', res.data._id);

          console.log(res.data._id);
          // console.log('isAdmin: ' + res.data.isAdmin);
          // console.log(res.token);
          localStorage.setItem('currentUser', JSON.stringify(res.data));
          localStorage.setItem('isAdmin', JSON.parse(res.data.isAdmin));
          this.authService.storeUserData(res.token, res.data);

          this._flashMessagesService.show('You are now Logged in!', { cssClass: 'alert-success' });
          this.router.navigate(['/profile']);
        } else {
          this._flashMessagesService.show('Service is not available!', { cssClass: 'alert-danger' });
          this.router.navigate(['/login']);
        }
      });
  }

}
