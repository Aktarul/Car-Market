import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {User} from "../../model/user";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  users: any;
  singleUser: any;
  currentUser: User;


  constructor(private authService: AuthService, private router: Router) {
    this.users = [];
    this.singleUser = null;
  }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log(this.currentUser);
    if (this.currentUser.isAdmin) {
      this.authService.getProfile().subscribe(response => {
        this.users = response.data;
        console.log('user data:');
        console.log(this.users);
      });
    } else {
      this.authService.getSiingleProfile(localStorage.getItem('loginId'))
        .subscribe(response => {
          this.singleUser = JSON.parse(JSON.stringify(response.data));
          console.log('user:');
          console.log( this.singleUser);
        });
    }
  }

  editProfile(id) {
    this.router.navigate([`/editprofile/${id}`]);
  }

  deleteProfile(user) {
    this.users.splice(this.users.indexOf(user), 1);
    this.authService.deleteProfile(user._id).subscribe(respnse => {
    });

  }

}
