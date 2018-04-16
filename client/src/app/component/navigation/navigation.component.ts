import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(public productService: ProductService,
              private authService: AuthService,
              private router: Router,
              private flashMessage: FlashMessagesService) { }

  ngOnInit() {
  }

  onLogoutClick() {

    this.authService.logout();

    this.flashMessage.show('Your are successfully logged out!', {cssClass: 'alert-success'});

    this.router.navigate(['/login']);
    return false;

  }


}
