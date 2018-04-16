import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Http, HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoginComponent } from './component/login/login.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AuthService } from './service/auth.service';
import { ProductService } from './service/product.service';
import { UserService } from './service/user.service';
import { RouterModule, Router } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';
import {FlashMessagesModule, FlashMessagesService} from 'angular2-flash-messages';
import {ValidateService} from './service/validate.service';
import { ProfileComponent } from './component/profile/profile.component';
import {ProductComponent} from './component/product/product.component';
import {PhotoUploadComponent} from './component/photo-upload/photo-upload.component';

import { FileUploadModule } from 'ng2-file-upload';
import { FormsModule} from '@angular/forms';
import { ProductEditComponent } from './component/product-edit/product-edit.component';
import {CartComponent} from "./component/cart/cart.component";
import {EditProfileComponent} from "./component/editprofile/editprofile.component";
import { PaymentSystemComponent } from './component/payment-system/payment-system.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    LoginComponent,
    RegistrationComponent,
    ProfileComponent,
    ProductComponent,
    PhotoUploadComponent,
    ProductEditComponent,
    CartComponent,
    EditProfileComponent,
    PaymentSystemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    FileUploadModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    RouterModule.forRoot( [
      { path: 'home', component: HomeComponent, pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'product', component: ProductComponent },
      { path: 'photo/:id', component: PhotoUploadComponent },
      { path: 'product/:id', component: ProductEditComponent },
      { path: 'cart', component: CartComponent },
      { path: 'editprofile/:id', component: EditProfileComponent },
      { path: 'payment', component: PaymentSystemComponent },
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: '**', redirectTo: '/home', pathMatch: 'full' }
    ])
  ],
  providers: [
    AuthGuardService,
    AuthService,
    ProductService,
    UserService,
    FlashMessagesService,
    ValidateService,
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
