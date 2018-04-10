import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { ValidateService } from '../../service/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  name: String;
  email: String ;
  username: String;
  password: String;
  confirm: String;
  wishList: [String];
  buyList: [String];

  constructor(private authService: AuthService,
              private router: Router,
              private validate: ValidateService,
              private _flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onSignUp() {
    console.log('Hello World: ' + this.name + ' ' + this.username + ' ' + this.password + ' ' + this.email + ' ' + this.confirm);
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password,
      // confirm: this.confirm,
      withList: this.wishList,
      buyList: this.buyList
    };

    if (!this.validate.checkEmpty(user)) {
      this._flashMessagesService.show('Fill all the fields!', { cssClass: 'alert-danger'});
    }

    if (!this.validate.validEmail(user.email)) {
      // this._flashMessagesService.show('Email is not valid!', { cssClass: 'alert'});
    }

    this.authService.registerUser(user)
      .subscribe( data => {
        if (data.success) {
          this._flashMessagesService.show('Your are now Registered.', {cssClass: 'alert-success'});
          this.router.navigate(['/login']);
        } else {
          this._flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger' });
          this.router.navigate(['/register']);
        }
      });
  }

}
