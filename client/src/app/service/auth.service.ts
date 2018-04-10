import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from "@angular/common/http";
import { tokenNotExpired } from "angular2-jwt";


@Injectable()
export class AuthService {

  authToken: any;
  user: any;

  constructor( private http: Http ) { }

  registerUser(user) {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');

    return this.http.post('http://localhost:3000/user', user, { headers: headers})
      .map(res => res.json());
  }

  authenticateUser(user) {
    const headers = new Headers();
    headers.append('Content-type','application/json');

    return this.http.post('http://localhost:3000/auth/login',user,{headers: headers})
      .map(res => res.json());
  }

  storeUserData(token, user){
    localStorage.setItem('id_token', token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

}
