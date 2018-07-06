webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n<flash-messages></flash-messages>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_home_home_component__ = __webpack_require__("../../../../../src/app/component/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_navigation_navigation_component__ = __webpack_require__("../../../../../src/app/component/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__component_footer_footer_component__ = __webpack_require__("../../../../../src/app/component/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__component_login_login_component__ = __webpack_require__("../../../../../src/app/component/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__component_registration_registration_component__ = __webpack_require__("../../../../../src/app/component/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__service_auth_guard_service__ = __webpack_require__("../../../../../src/app/service/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__service_user_service__ = __webpack_require__("../../../../../src/app/service/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_validate_service__ = __webpack_require__("../../../../../src/app/service/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__component_profile_profile_component__ = __webpack_require__("../../../../../src/app/component/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__component_product_product_component__ = __webpack_require__("../../../../../src/app/component/product/product.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__component_photo_upload_photo_upload_component__ = __webpack_require__("../../../../../src/app/component/photo-upload/photo-upload.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__component_product_edit_product_edit_component__ = __webpack_require__("../../../../../src/app/component/product-edit/product-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__component_cart_cart_component__ = __webpack_require__("../../../../../src/app/component/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__component_editprofile_editprofile_component__ = __webpack_require__("../../../../../src/app/component/editprofile/editprofile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__component_payment_system_payment_system_component__ = __webpack_require__("../../../../../src/app/component/payment-system/payment-system.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__component_home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__component_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_6__component_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__component_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_8__component_registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_17__component_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_18__component_product_product_component__["a" /* ProductComponent */],
                __WEBPACK_IMPORTED_MODULE_19__component_photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */],
                __WEBPACK_IMPORTED_MODULE_21__component_product_edit_product_edit_component__["a" /* ProductEditComponent */],
                __WEBPACK_IMPORTED_MODULE_22__component_cart_cart_component__["a" /* CartComponent */],
                __WEBPACK_IMPORTED_MODULE_23__component_editprofile_editprofile_component__["a" /* EditProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__component_payment_system_payment_system_component__["a" /* PaymentSystemComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_20_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_14__angular_forms__["b" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__component_home_home_component__["a" /* HomeComponent */], pathMatch: 'full' },
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__component_login_login_component__["a" /* LoginComponent */] },
                    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_8__component_registration_registration_component__["a" /* RegistrationComponent */] },
                    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_17__component_profile_profile_component__["a" /* ProfileComponent */] },
                    { path: 'product', component: __WEBPACK_IMPORTED_MODULE_18__component_product_product_component__["a" /* ProductComponent */] },
                    { path: 'photo/:id', component: __WEBPACK_IMPORTED_MODULE_19__component_photo_upload_photo_upload_component__["a" /* PhotoUploadComponent */] },
                    { path: 'product/:id', component: __WEBPACK_IMPORTED_MODULE_21__component_product_edit_product_edit_component__["a" /* ProductEditComponent */] },
                    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_22__component_cart_cart_component__["a" /* CartComponent */] },
                    { path: 'editprofile/:id', component: __WEBPACK_IMPORTED_MODULE_23__component_editprofile_editprofile_component__["a" /* EditProfileComponent */] },
                    { path: 'payment', component: __WEBPACK_IMPORTED_MODULE_24__component_payment_system_payment_system_component__["a" /* PaymentSystemComponent */] },
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                    { path: '**', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__service_auth_guard_service__["a" /* AuthGuardService */],
                __WEBPACK_IMPORTED_MODULE_10__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_11__service_product_service__["a" /* ProductService */],
                __WEBPACK_IMPORTED_MODULE_12__service_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesService"],
                __WEBPACK_IMPORTED_MODULE_16__service_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_11__service_product_service__["a" /* ProductService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/component/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary\" style=\"width: 100%; margin: 0%\">\r\n  <div class=\"panel-heading\" style=\"text-align: center; font-size: 200%; background-color: rgba(120,120,120,0.3); color: black;\">Cart Checkout</div>\r\n  <div class=\"panel-body\">\r\n\r\n\r\n    <table  class=\"table\">\r\n      <thead>\r\n      <tr>\r\n        <th style=\"text-align: center\">Product Name</th>\r\n        <th style=\"text-align: center\">Product Image</th>\r\n        <th style=\"text-align: center\">Product Quantity</th>\r\n        <th style=\"text-align: center\">Product Price</th>\r\n        <th style=\"text-align: center\">Total Product Price</th>\r\n        <th>Action</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody *ngFor=\"let product of myProductArray; let i = index\">\r\n\r\n\r\n      <tr class=\"success\" *ngIf=\"product.myProductCount\">\r\n        <td style=\"text-align: center\">{{product.myProduct.name}}</td>\r\n\r\n        <td style=\"text-align: center\">\r\n          <img src=\"http://localhost:3000/{{product.myProduct.picture}}\" alt=\"...\" class=\"img-responsive\" height=\"50px\" width=\"80px\">\r\n        </td>\r\n        <td style=\"text-align: center\">{{product.myProductCount}}</td>\r\n        <td style=\"text-align: center\">{{product.myProduct.price}} ৳</td>\r\n        <td style=\"text-align: center\">{{product.myProduct.price*product.myProductCount}} ৳</td>\r\n\r\n        <td>\r\n          <ul class=\"nav nav-pills nav-stacked\">\r\n\r\n            <li class=\"dropdown\">\r\n              <button (click)=\"removeAll(product.myProduct.name)\" class=\"dropdown-toggle\" class=\"btn btn-danger\" data-toggle=\"dropdown\"><span class=\"glyphicon glyphicon-remove\"></span> Remove</button>\r\n              <!--<ul class=\"dropdown-menu\">-->\r\n              <!--<li (click)=\"reduceByOne(product.myProduct.name)\"><a >Remove 1</a></li>-->\r\n              <!--<li (click)=\"removeAll(product.myProduct.name)\"><a >Remove all</a></li>-->\r\n              <!--</ul>-->\r\n            </li>\r\n          </ul>\r\n        </td>\r\n      </tr>\r\n\r\n\r\n\r\n      </tbody>\r\n      <div *ngIf=\"!myProductArray\" class=\"alert alert-warning\">\r\n        <strong>Warning!</strong> You have not added any cart to Buy.\r\n      </div>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td></td>\r\n      <td><h4 style=\"margin-bottom: 2%\">Total = {{sum}} ৳</h4></td>\r\n\r\n      <td></td>\r\n\r\n\r\n\r\n      <tr>\r\n        <td>\r\n          <button type=\"button\" class=\"btn btn-default\"    [routerLink]=\"['/home']\" >\r\n            <span class=\"fa fa-shopping-cart\"></span>\r\n            <a style = \"text-decoration: none\">Continue Shopping</a>\r\n          </button>\r\n        </td>\r\n\r\n        <td></td>\r\n        <td></td>\r\n        <td></td>\r\n\r\n        <td></td>\r\n        <td>\r\n          <button (click)=\"payment()\" type=\"button\" class=\"btn btn-success\" >\r\n            Checkout <span class=\"glyphicon glyphicon-play\"></span>\r\n          </button></td>\r\n\r\n      </tr>\r\n    </table>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartComponent = /** @class */ (function () {
    function CartComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.sum = 0;
        this.arrObj = new Array(0);
    }
    CartComponent.prototype.getCart = function () {
    };
    CartComponent.prototype.ngOnInit = function () {
        this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));
        for (var i = 0; i < this.myProductArray.length; i++) {
            this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
            this.arrObj.push(this.myProductArray[i].myProduct._id);
        }
        console.log(this.arrObj);
    };
    CartComponent.prototype.continueShopping = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/checkout']);
            var User = {
                wishList: this.arrObj
            };
            this.authService.UpdateProfile(localStorage.getItem('loginId'), User)
                .subscribe(function (response) {
                console.log('Here in update');
                console.log(response.data.name);
            });
        }
        else
            this.router.navigate(['/login']);
    };
    CartComponent.prototype.buyList = function () {
        if (this.authService.loggedIn()) {
            this.router.navigate(['/checkout']);
            var User = {
                wishList: this.arrObj
            };
            this.authService.UpdateProfile(localStorage.getItem('loginId'), User)
                .subscribe(function (response) {
                console.log('Here in update');
                console.log(response.data.name);
            });
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    CartComponent.prototype.reduceByOne = function (name) {
        for (var i = 0; i < this.myProductArray.length; i++) {
            if (this.myProductArray[i].myProduct.name === name) {
                this.myProductArray[i].myProductCount = this.myProductArray[i].myProductCount - 1;
                localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));
                this.cnt2 = localStorage.getItem('cnt');
                this.cnt2 = this.cnt2 - 1;
                localStorage.setItem('cnt', this.cnt2);
                console.log(localStorage.getItem('cnt'));
            }
        }
        this.sum = 0;
        for (var i = 0; i < this.myProductArray.length; i++) {
            this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
            this.arrObj.push(this.myProductArray[i].myProduct._id);
        }
        this.router.navigate(['/cart']);
    };
    CartComponent.prototype.removeAll = function (name) {
        for (var i = 0; i < this.myProductArray.length; i++) {
            if (this.myProductArray[i].myProduct.name === name) {
                this.cnt2 = localStorage.getItem('cnt');
                this.cnt2 = this.cnt2 - this.myProductArray[i].myProductCount;
                localStorage.setItem('cnt', this.cnt2);
                this.myProductArray[i].myProductCount = 0;
                localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));
                console.log(localStorage.getItem('cnt'));
            }
        }
        this.sum = 0;
        for (var i = 0; i < this.myProductArray.length; i++) {
            this.sum = this.sum + parseInt(this.myProductArray[i].myProduct.price) * parseInt(this.myProductArray[i].myProductCount);
            this.arrObj.push(this.myProductArray[i].myProduct._id);
        }
        this.router.navigate(['/cart']);
    };
    CartComponent.prototype.payment = function () {
        this.router.navigate(['/payment']);
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/component/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/editprofile/editprofile.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#playground-container {\r\n  height: 500px;\r\n  overflow: hidden !important;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.bg{\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  /* background:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n  background:url(http://t.wallpaperweb.org/wallpaper/cars/1920x1200/Ferrari_6.jpg);*/\r\n  background:url(" + escape(__webpack_require__("../../../../../src/app/component/editprofile/most-bg.jpg")) + ");\r\n  font-family: 'Oxygen', sans-serif;\r\n  background-size: cover;\r\n  padding: 50px 20px;\r\n}\r\n.main{\r\n  margin:50px 15px;\r\n}\r\nh1.title {\r\n  font-size: 50px;\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n}\r\nhr{\r\n  width: 10%;\r\n  color: #fff;\r\n}\r\n.form-group{\r\n  margin-bottom: 15px;\r\n}\r\nlabel{\r\n  margin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  padding-top: 3px;\r\n}\r\n.main-login{\r\n  background-color: #fff;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n  height: auto!important;\r\n  padding: 8px 12px !important;\r\n}\r\n.input-group {\r\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n  border: 1px solid #ccc;\r\n  margin-top: 28px;\r\n  padding: 6px 12px;\r\n  color: #666;\r\n  text-shadow: 0 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 3px 3px;\r\n  -webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  background: #f5f5f5;\r\n  background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center{\r\n  margin-top: 30px;\r\n  margin: 0 auto;\r\n  max-width: 500px;\r\n  padding: 15px 25px;\r\n  background: rgba(133, 150, 150,0.5);\r\n  color: #FFF;\r\n  border-radius: 15px;\r\n  text-shadow: none;\r\n  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n  color: #009edf;\r\n  font-size: 17px;\r\n}\r\n.login-button{\r\n  margin-top: 5px;\r\n}\r\n.login-register{\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/editprofile/editprofile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\r\n  <div class=\"main-center\">\r\n    <div class=\"form-group\">\r\n      <h3 style=\"text-align: center\">Edit Profile</h3>\r\n      <label class=\"cols-sm-2 control-label\">Name</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"text\" [(ngModel)]=\"user.name\" name=\"first_name\" id=\"first_name\" class=\"form-control\" placeholder=\"Enter Name\">\r\n        </div>\r\n      </div>\r\n    </div> <br>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"cols-sm-2 control-label\">Username</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"text\" [(ngModel)]=\"user.username\" name=\"last_name\" id=\"last_name\" class=\"form-control\" placeholder=\"Enter User Name\">\r\n        </div>\r\n      </div>\r\n    </div>  <br>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"cols-sm-2 control-label\">Email</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\" id=\"email\" class=\"form-control\" placeholder=\"Enter Email\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-block btn-primary\" *ngIf=\"user\" (click)=\"onUpdate(user)\">Update Info</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/editprofile/editprofile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_validate_service__ = __webpack_require__("../../../../../src/app/service/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(authService, validateService, _flashMessagesService, router, route) {
        this.authService = authService;
        this.validateService = validateService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.route = route;
    }
    EditProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.authService.getSiingleProfile(id).subscribe(function (response) {
            _this.user = response.data;
        });
    };
    EditProfileComponent.prototype.onUpdate = function (user) {
        var _this = this;
        // Required Fiels
        if (!this.validateService.checkEmpty(user)) {
            // this.flashMessages.show('Please fill in all fields',{cssClass: 'alert-danger',timeout:300});
            // this.flashMessage.warning('Please fill in all fields',{delay:2000});
            this._flashMessagesService.show('Please fill in all fields!', { cssClass: 'alert-danger' });
            return false;
        }
        // Validate Email
        if (!this.validateService.validEmail(user.email)) {
            // this.flashMessages.show('Please use a valid email',{cssClass: 'alert-danger',timeout:300});
            this._flashMessagesService.show('Please use valid Email!', { cssClass: 'alert-danger' });
            return false;
        }
        var id = this.route.snapshot.paramMap.get('id');
        this.authService.UpdateProfile(id, user)
            .subscribe(function (data) {
            if (data.success) {
                _this._flashMessagesService.show('You are now Registered.', { cssClass: 'alert-success' });
                _this.router.navigate(['/profile']);
            }
            else {
                _this._flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    EditProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-editprofile',
            template: __webpack_require__("../../../../../src/app/component/editprofile/editprofile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/editprofile/editprofile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__service_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], EditProfileComponent);
    return EditProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/editprofile/most-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "most-bg.94de0fec8f34d6262145.jpg";

/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer-distributed{\r\n\tbackground-color: #292c2f;\r\n\t-webkit-box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\t        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);\r\n\t-webkit-box-sizing: border-box;\r\n\t        box-sizing: border-box;\r\n\twidth: 100%;\r\n\ttext-align: left;\r\n\tfont: bold 11px sans-serif;\r\n\r\n\tpadding: 5px 5px;\r\n\tmargin-top: 0px; /* margin top of footer */\r\n}\r\n\r\n.footer-distributed .footer-left,\r\n.footer-distributed .footer-center,\r\n.footer-distributed .footer-right{\r\n\tdisplay: inline-block;\r\n\tvertical-align: top;\r\n}\r\n\r\n/* Footer left */\r\n\r\n.footer-distributed .footer-left{\r\n\twidth: 25%;\r\n  margin-left: 20px;\r\n}\r\n\r\n/* The company logo */\r\n\r\n.footer-distributed h3{\r\n\tcolor:  #ffffff;\r\n\tfont: normal 50px 'Cookie', cursive;\r\n\tmargin: 0;\r\n}\r\n\r\n.footer-distributed h3 span{\r\n\tcolor:  #5383d3;\r\n}\r\n\r\n/* Footer links */\r\n\r\n.footer-distributed .footer-links{\r\n\tcolor:  #ffffff;\r\n\tmargin: 20px 0 12px;\r\n\tpadding: 0;\r\n}\r\n\r\n.footer-distributed .footer-links a{\r\n\tdisplay:inline-block;\r\n\tline-height: 1.8;\r\n\ttext-decoration: none;\r\n\tcolor:  inherit;\r\n}\r\n\r\n.footer-distributed .footer-company-name{\r\n\tcolor:  #8f9296;\r\n\tfont-size: 14px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n/* Footer Center */\r\n\r\n.footer-distributed .footer-center{\r\n\twidth: 40%;\r\n}\r\n\r\n.footer-distributed .footer-center i{\r\n\tbackground-color:  #33383b;\r\n\tcolor: #ffffff;\r\n\tfont-size: 25px;\r\n\twidth: 38px;\r\n\theight: 38px;\r\n\tborder-radius: 50%;\r\n\ttext-align: center;\r\n\tline-height: 42px;\r\n\tmargin: 10px 15px;\r\n\tvertical-align: middle;\r\n}\r\n\r\n.footer-distributed .footer-center i.fa-envelope{\r\n\tfont-size: 17px;\r\n\tline-height: 38px;\r\n}\r\n\r\n.footer-distributed .footer-center p{\r\n\tdisplay: inline-block;\r\n\tcolor: #ffffff;\r\n\tvertical-align: middle;\r\n\tmargin:0;\r\n}\r\n\r\n.footer-distributed .footer-center p span{\r\n\tdisplay:block;\r\n\tfont-weight: normal;\r\n\tfont-size:14px;\r\n\tline-height:2;\r\n}\r\n\r\n.footer-distributed .footer-center p a{\r\n\tcolor:  #5383d3;\r\n\ttext-decoration: none;;\r\n}\r\n\r\n/* Footer Right */\r\n\r\n.footer-distributed .footer-right{\r\n\twidth: 25%;\r\n}\r\n\r\n.footer-distributed .footer-company-about{\r\n\tline-height: 20px;\r\n\tcolor:  #92999f;\r\n\tfont-size: 13px;\r\n\tfont-weight: normal;\r\n\tmargin: 0;\r\n}\r\n\r\n.footer-distributed .footer-company-about span{\r\n\tdisplay: block;\r\n\tcolor:  #ffffff;\r\n\tfont-size: 14px;\r\n\tfont-weight: bold;\r\n\tmargin-bottom: 10px;\r\n}\r\n\r\n.footer-distributed .footer-icons{\r\n\tmargin-top: 10px;\r\n}\r\n\r\n.footer-distributed .footer-icons a{\r\n\tdisplay: inline-block;\r\n\twidth: 35px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tbackground-color:  #33383b;\r\n\tborder-radius: 2px;\r\n\r\n\tfont-size: 20px;\r\n\tcolor: #ffffff;\r\n\ttext-align: center;\r\n\tline-height: 35px;\r\n\r\n\tmargin-right: 3px;\r\n\tmargin-bottom: 5px;\r\n}\r\n\r\n/* If you don't want the footer to be responsive, remove these media queries */\r\n\r\n@media (max-width: 880px) {\r\n\r\n\t.footer-distributed{\r\n\t\tfont: bold 14px sans-serif;\r\n\t}\r\n\r\n\t.footer-distributed .footer-left,\r\n\t.footer-distributed .footer-center,\r\n\t.footer-distributed .footer-right{\r\n\t\tdisplay: block;\r\n\t\twidth: 100%;\r\n\t\tmargin-bottom: 40px;\r\n\t\ttext-align: center;\r\n\t}\r\n\r\n\t.footer-distributed .footer-center i{\r\n\t\tmargin-left: 0;\r\n\t}\r\n\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<head>\r\n\t<link rel=\"stylesheet\" href=\"http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css\">\r\n\r\n\t<link href=\"http://fonts.googleapis.com/css?family=Cookie\" rel=\"stylesheet\" type=\"text/css\">\r\n\r\n</head>\r\n\r\n<body>\r\n\r\n<footer class=\"footer-distributed\">\r\n\r\n  <div class=\"footer-left\">\r\n\r\n    <h3>Car<span> Market</span></h3>\r\n\r\n    <p class=\"footer-links\">\r\n      <a href=\"#\">Home</a>\r\n      ·\r\n      <a href=\"#\">Blog</a>\r\n      ·\r\n      <a href=\"#\">Pricing</a>\r\n      ·\r\n      <a href=\"#\">About</a>\r\n      ·\r\n      <a href=\"#\">Contact</a>\r\n    </p>\r\n\r\n    <p class=\"footer-company-name\">Car Market &copy; 2018</p>\r\n  </div>\r\n\r\n  <div class=\"footer-center\">\r\n\r\n    <div>\r\n      <i class=\"fa fa-map-marker\"></i>\r\n      <p><span>Shaheb Bazar </span> Rajshahi, Dhaka</p>\r\n      &nbsp;\r\n      <i class=\"fa fa-phone\"></i>\r\n      <p>+1 555 123456</p>\r\n    </div>\r\n\r\n    <div>\r\n      <i class=\"fa fa-envelope\"></i>\r\n      <p><a href=\"mailto:support@company.com\">support@company.com</a></p>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"footer-right\">\r\n\r\n    <p class=\"footer-company-about\">\r\n      <span>About the company</span>\r\n      Car Market is an online car buying platform. Buy the best car here.\r\n    </p>\r\n\r\n    <div class=\"footer-icons\">\r\n\r\n      <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n      <a href=\"#\"><i class=\"fa fa-github\"></i></a>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</footer>\r\n</body>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/component/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/home/home-bg2.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "home-bg2.94ec6f3233b3f8a57ad7.jpg";

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/app/component/home/home-bg2.jpg")) + ");\r\n}\r\n\r\n.thumbnail {\r\n  background-color: rgba(240,230,160,0.35);\r\n}\r\n\r\n.card {\r\n  -webkit-box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n          box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  -webkit-transition: 0.3s;\r\n  transition: 0.3s;\r\n  width: 300px;\r\n  margin-left: 40px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.card:hover {\r\n  -webkit-box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n          box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\n.container {\r\n  padding: 2px 12px;\r\n  overflow-x: hidden;\r\n\r\n}\r\n\r\n.thumbnail img {\r\n  height: 220px;\r\n  width: 400px;\r\n\r\n}\r\n\r\n.thumbnail .description {\r\n  color: #003333;\r\n  font-size: 130%;\r\n  text-align: center;\r\n}\r\n\r\n.price {\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"background\">\r\n<div *ngIf=\"products\" class=\"row\">\r\n  <div *ngFor=\"let product of products;let i = index\" class=\"col-sm-6 col-md-4\">\r\n\r\n    <div  class=\"thumbnail\">\r\n      <h3 style=\"float: left\">{{product.code}}</h3>\r\n\r\n\r\n      <h3 (click)=\"detailsView(product._id)\" style=\"color: #26734d;text-align: center\">{{product.name}}</h3>\r\n\r\n      <img (click)=\"detailsView(product._id)\" src=\"http://localhost:3000/{{product.picture}}\" alt=\"...\" class=\"img-responsive\">\r\n      <div class=\"caption\">\r\n        <div class=\"clearfix\">\r\n          <div class=\"price pull-left\">{{ product.price }} ৳</div>\r\n\r\n\r\n          <a (click)=\"cart(1,product._id,product)\" class=\"btn btn-success pull-right\" role=\"button\">\r\n            <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\r\n          </a>\r\n          <p class=\"description\">{{ product.description }}</p>\r\n\r\n          <button (click)=\"delFunc(product)\" *ngIf=\"isAdmin\" style=\"float: right;margin-top: 18px;margin-right: 15px;\" type=\"button\" class=\"btn btn-danger btn-lg\">\r\n            Trash<br>\r\n          </button>\r\n\r\n          <button *ngIf=\"isAdmin\" (click)=\"editProduct(product._id)\" style=\"float: left;margin-top: 18px;margin-right: 15px;\" type=\"button\" class=\"btn btn-primary btn-lg\">\r\n            Edit\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(productService, router) {
        this.productService = productService;
        this.router = router;
        this.products = [];
        if (localStorage.getItem('isAdmin') === 'true') {
            this.isAdmin = 1;
        }
        console.log('Admin: ' + this.isAdmin);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.productService.getProduct()
            .subscribe(function (value) {
            _this.products = value.data;
            console.log(_this.products);
        });
    };
    HomeComponent.prototype.cart = function (cnt, productId, product) {
        this.productService.storeUserDatta(cnt, productId, product);
    };
    HomeComponent.prototype.detailsView = function (id) {
        this.router.navigate(["/details/" + id]);
    };
    HomeComponent.prototype.editProduct = function (id) {
        this.router.navigate(["/product/" + id]);
    };
    HomeComponent.prototype.delFunc = function (product) {
        this.products.splice(this.products.indexOf(product), 1);
        this.productService.deleteProduct(product._id).subscribe(function (response) {
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/component/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/login/logInBG.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logInBG.41efaacbbced79885e44.jpg";

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#playground-container {\r\n  height: 500px;\r\n  overflow: hidden !important;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.bg{\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  /*background:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n  background:url(http://t.wallpaperweb.org/wallpaper/cars/1920x1200/Ferrari_6.jpg);*/\r\n  background:url(" + escape(__webpack_require__("../../../../../src/app/component/login/logInBG.jpg")) + ");\r\n  font-family: 'Oxygen', sans-serif;\r\n  background-size: cover;\r\n  padding: 150px 20px;\r\n}\r\n.main{\r\n  margin:50px 15px;\r\n}\r\nh1.title {\r\n  font-size: 50px;\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n}\r\nhr{\r\n  width: 10%;\r\n  color: #fff;\r\n}\r\n.form-group{\r\n  margin-bottom: 15px;\r\n}\r\nlabel{\r\n  margin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  padding-top: 3px;\r\n}\r\n.main-login{\r\n  background-color: #fff;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n  height: auto!important;\r\n  padding: 8px 12px !important;\r\n}\r\n.input-group {\r\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n  border: 1px solid #ccc;\r\n  margin-top: 28px;\r\n  padding: 6px 12px;\r\n  color: #666;\r\n  text-shadow: 0 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 3px 3px;\r\n  -webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  background: #f5f5f5;\r\n  background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center{\r\n  margin-top: 30px;\r\n  margin: 0 auto;\r\n  max-width: 500px;\r\n  padding: 15px 25px;\r\n  background: rgba(86, 102, 115, 0.5);\r\n  color: #FFF;\r\n  border-radius: 15px;\r\n  text-shadow: none;\r\n  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n  color: #009edf;\r\n  font-size: 17px;\r\n}\r\n.login-button{\r\n  margin-top: 5px;\r\n}\r\n.login-register{\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"form-group\">\r\n  <label >Name:</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\">\r\n</div>\r\n-->\r\n<div class=\"bg\">\r\n  <div class=\"main-center\">\r\n      <div class=\"form-group\">\r\n        <label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\r\n        <div class=\"cols-sm-10\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\r\n            <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" id=\"email\"  placeholder=\"Enter your Email\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n<!--\r\n      <div class=\"form-group\">\r\n        <label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\r\n        <div class=\"cols-sm-10\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n            <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" id=\"username\"  placeholder=\"Enter your Username\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n-->\r\n      <div class=\"form-group\">\r\n        <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n        <div class=\"cols-sm-10\">\r\n          <div class=\"input-group\">\r\n            <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n            <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password\"  placeholder=\"Enter your Password\"/>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <button class=\"btn btn-block btn-primary\" (click)=\"onLogIn()\">Log In</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_validate_service__ = __webpack_require__("../../../../../src/app/service/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, _flashMessagesService, router, validate) {
        this.authService = authService;
        this._flashMessagesService = _flashMessagesService;
        this.router = router;
        this.validate = validate;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onLogIn = function () {
        // console.log("logIn : " + this.email + " " + this.password);
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        if (!this.validate.validEmail(user.email)) {
            this._flashMessagesService.show('Email is not valid!', { cssClass: 'alert-danger' });
            return;
        }
        if (typeof this.password == 'undefined') {
            this._flashMessagesService.show('Please enter Password!', { cssClass: 'alert-danger' });
            return;
        }
        this.authService.authenticateUser(user)
            .subscribe(function (res) {
            if (res.success) {
                localStorage.setItem('loginId', res.data._id);
                console.log(res.data._id);
                // console.log('isAdmin: ' + res.data.isAdmin);
                // console.log(res.token);
                localStorage.setItem('currentUser', JSON.stringify(res.data));
                localStorage.setItem('isAdmin', JSON.parse(res.data.isAdmin));
                _this.authService.storeUserData(res.token, res.data);
                _this._flashMessagesService.show('You are now Logged in!', { cssClass: 'alert-success' });
                _this.router.navigate(['/profile']);
            }
            else {
                _this._flashMessagesService.show('Service is not available!', { cssClass: 'alert-danger' });
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/component/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__service_validate_service__["a" /* ValidateService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/navigation/navigation.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\r\n  color: #23dbdb;\r\n  text-decoration: none;\r\n}\r\n\r\na:hover {\r\n  color: #000;\r\n}\r\n\r\nol, ul {\r\n  list-style: none;\r\n  padding:0px;\r\n  margin:0px;\r\n}\r\n\r\n#wrap {\r\n  margin: 0 auto;\r\n}\r\n\r\n.inner {\r\n  margin: 0 auto;\r\n  max-width: 90%;\r\n  padding: 0 40px;\r\n}\r\n\r\n.relative {\r\n  position: relative;\r\n}\r\n\r\n.right {\r\n  float: right;\r\n}\r\n\r\n.left {\r\n  float: left;\r\n}\r\n\r\n/* HEADER */\r\n\r\n#wrap > header {\r\n  background-color: #333;\r\n  padding-bottom: 10px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.logo {\r\n  display: inline-block;\r\n  font-size: 0;\r\n  height: 50px;\r\n  padding-top:15px;\r\n}\r\n\r\n#navigation {\r\n  position: absolute;\r\n  right: 40px;\r\n  bottom: 0px;\r\n}\r\n\r\n#menu-toggle {\r\n  display: none;\r\n  float: right;\r\n}\r\n\r\n/* HEADER > MENU */\r\n\r\n#main-menu {\r\n  float: right;\r\n  font-size: 0;\r\n  margin: 10px 0;\r\n}\r\n\r\n#main-menu > li {\r\n  display: inline-block;\r\n  margin-left: 30px;\r\n  padding: 2px 0;\r\n}\r\n\r\n#main-menu > li.parent {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyRTQyNEQ5ODVCNzRFMjExQkMwRkMxOEIxQjE3MzRGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxNzY0NDlFQjkyMTcxMUUyQkNBNkVGOEYzQzkyQkVCOCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxNzY0NDlFQTkyMTcxMUUyQkNBNkVGOEYzQzkyQkVCOCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0RDZBRkRFQTA4Q0UyMTFBMUM4QzE1REM0NEFFQUQzIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJFNDI0RDk4NUI3NEUyMTFCQzBGQzE4QjFCMTczNEY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+msXehQAAACdJREFUeNpi6ejoYEAC/4GYEcZhYsAD8EqyQI1CNxouyUh9OwECDAAcTwWsomGprAAAAABJRU5ErkJggg==);\r\n  background-size: 7px 7px;\r\n  background-repeat: no-repeat;\r\n  background-position: left center;\r\n}\r\n\r\n#main-menu > li.parent > a {\r\n  padding-left: 14px;\r\n}\r\n\r\n#main-menu > li > a {\r\n  color: #eee;\r\n  font-size: 18px;\r\n  line-height: 14px;\r\n  padding: 30px 0;\r\n  text-decoration:none;\r\n}\r\n\r\n#main-menu > li:hover > a,\r\n#main-menu > li.current-menu-item > a {\r\n  color: #23dbdb;\r\n}\r\n\r\n/* HEADER > MENU > DROPDOWN */\r\n\r\n#main-menu li {\r\n  position: relative;\r\n}\r\n\r\nul.sub-menu { /* level 2 */\r\n  display: none;\r\n  left: 0px;\r\n  top: 38px;\r\n  padding-top: 10px;\r\n  position: absolute;\r\n  width: 150px;\r\n  z-index: 9999;\r\n}\r\n\r\nul.sub-menu ul.sub-menu { /* level 3+ */\r\n  margin-top: -1px;\r\n  padding-top: 0;\r\n  left: 149px;\r\n  top: 0px;\r\n}\r\n\r\nul.sub-menu > li > a {\r\n  background-color: #333;\r\n  border: 1px solid #444;\r\n  border-top: none;\r\n  color: #bbb;\r\n  display: block;\r\n  font-size: 15px;\r\n  line-height: 15px;\r\n  padding: 10px 12px;\r\n}\r\n\r\nul.sub-menu > li > a:hover {\r\n  background-color: #2a2a2a;\r\n  color: #fff;\r\n}\r\n\r\nul.sub-menu > li:first-child {\r\n  border-top: 3px solid #23dbdb;\r\n}\r\n\r\nul.sub-menu ul.sub-menu > li:first-child {\r\n  border-top: 1px solid #444;\r\n}\r\n\r\nul.sub-menu > li:last-child > a {\r\n  border-radius: 0 0 2px 2px;\r\n}\r\n\r\nul.sub-menu > li > a.parent {\r\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAJCAYAAAD6reaeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyRTQyNEQ5ODVCNzRFMjExQkMwRkMxOEIxQjE3MzRGOCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMzQ0OUU0NTdGNjYxMUUyQUI1M0MxMkZCNUQyMDNCRCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMzQ0OUU0NDdGNjYxMUUyQUI1M0MxMkZCNUQyMDNCRCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQ2MkRDQTE1NjM3RkUyMTFBMDg0Q0QzOTA1RDFDMjg0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjJFNDI0RDk4NUI3NEUyMTFCQzBGQzE4QjFCMTczNEY4Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+WqLCAwAAAGtJREFUeNpiTEtLW8rAwDAViI8xQAETEK8A4g1AbIwsuBmIc4F4CxDrgARZoJIrgZgbiHcAsQMTAwLMA+LjIJoFSTAJiK2A2B4mGA7ErUDsBsR3QIK+QDwZiD2B+DLM9kggDgTiszBzAAIMALfMENJK0DjpAAAAAElFTkSuQmCC);\r\n  background-size: 5px 9px;\r\n  background-repeat: no-repeat;\r\n  background-position: 95% center;\r\n}\r\n\r\n#main-menu li:hover > ul.sub-menu {\r\n  display: block; /* show the submenu */\r\n}\r\n\r\n@media all and (max-width: 700px) {\r\n\r\n  #navigation {\r\n    position: static;\r\n    margin-top: 20px;\r\n  }\r\n\r\n  #menu-toggle {\r\n    display: block;\r\n  }\r\n\r\n  #main-menu {\r\n    display: none;\r\n    float: none;\r\n  }\r\n\r\n  #main-menu li {\r\n    display: block;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n\r\n  #main-menu > li {\r\n    margin-top: -1px;\r\n  }\r\n\r\n  #main-menu > li:first-child {\r\n    margin-top: 0;\r\n  }\r\n\r\n  #main-menu > li > a {\r\n    background-color: #333;\r\n    border: 1px solid #444;\r\n    color: #bbb;\r\n    display: block;\r\n    font-size: 14px;\r\n    padding: 12px;\r\n    padding: 0;\r\n  }\r\n\r\n  #main-menu li > a:hover {\r\n    background-color: #444;\r\n  }\r\n\r\n  #main-menu > li.parent {\r\n    background: none;\r\n    padding: 0;\r\n  }\r\n\r\n  #main-menu > li:hover > a,\r\n  #main-menu > li.current-menu-item > a {\r\n    border: 1px solid #444;\r\n    color: #fff;\r\n  }\r\n\r\n  ul.sub-menu {\r\n    display: block;\r\n    margin-top: -1px;\r\n    margin-left: 20px;\r\n    position: static;\r\n    padding: 0;\r\n    width: inherit;\r\n  }\r\n\r\n  ul.sub-menu > li:first-child {\r\n    border-top: 1px solid #444 ;\r\n  }\r\n\r\n  ul.sub-menu > li > a.parent {\r\n    background: #333;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrap\">\r\n  <header>\r\n    <div class=\"inner relative\">\r\n      <h3 style=\"color:  #ffffff; font: normal 60px 'Cookie', cursive;\">Car <span style=\"color:  #5383d3;\">Market</span></h3>\r\n      <!--<a href=\"/home\">Car Market</a>-->\r\n      <a id=\"menu-toggle\" class=\"button dark\" href=\"#\"><i class=\"icon-reorder\"></i></a>\r\n      <nav id=\"navigation\">\r\n        <ul id=\"main-menu\">\r\n\r\n          <li><a href=\"/home\">Home</a></li>\r\n\r\n          <!--<li class=\"parent\">-->\r\n            <!--<a href=\"/register\">Register</a>-->\r\n            <!--<ul class=\"sub-menu\">-->\r\n              <!--<li><a href=\"#\"><i class=\"icon-wrench\"></i> Elements</a></li>-->\r\n              <!--<li><a href=\"#\"><i class=\"icon-credit-card\"></i>  Pricing Tables</a></li>-->\r\n              <!--<li><a href=\"#\"><i class=\"icon-gift\"></i> Icons</a></li>-->\r\n              <!--<li>-->\r\n                <!--<a class=\"parent\" href=\"#\"><i class=\"icon-file-alt\"></i> Pages</a>-->\r\n                <!--<ul class=\"sub-menu\">-->\r\n                  <!--<li><a href=\"#\">Full Width</a></li>-->\r\n                  <!--<li><a href=\"#\">Left Sidebar</a></li>-->\r\n                  <!--<li><a href=\"#\">Right Sidebar</a></li>-->\r\n                  <!--<li><a href=\"#\">Double Sidebar</a></li>-->\r\n                <!--</ul>-->\r\n              <!--</li>-->\r\n            <!--</ul>-->\r\n          <!--</li>-->\r\n\r\n          <!--<li><a href=\"/login\">login</a></li>-->\r\n\r\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n            <a [routerLink]=\"['/register']\">Register</a>\r\n          </li>\r\n          <li *ngIf=\"!authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n            <a [routerLink]=\"['/login']\"> Login</a>\r\n          </li>\r\n\r\n          <li *ngIf=\"isAdmin\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n            <a [routerLink]=\"['/product']\"> Add Product</a>\r\n          </li>\r\n\r\n          <li [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n            <a [routerLink]=\"['/cart']\"><i class=\"glyphicon glyphicon-shopping-cart\"></i>\r\n            <span class=\"badge\">{{ productService.getProductCartSize() || cart }}</span>\r\n            </a>\r\n          </li>\r\n\r\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n            <a [routerLink]=\"['/profile']\"> Profile </a>\r\n          </li>\r\n\r\n          <li *ngIf=\"authService.loggedIn()\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{exact:true}\" >\r\n            <a  (click)=\"onLogoutClick()\"  [routerLink]=\"['/home']\"> Logout</a>\r\n          </li>\r\n\r\n          <!--<li class=\"parent\">-->\r\n            <!--<a href=\"#\">User Info</a>-->\r\n            <!--<ul class=\"sub-menu\"  *ngIf=\"authService.loggedIn()\">-->\r\n              <!--<li><a href=\"/profile\">Profile</a></li>-->\r\n              <!--<li><a (click)=\"onLogoutClick()\" href=\"#\">Logout</a></li>-->\r\n            <!--</ul>-->\r\n          <!--</li>-->\r\n\r\n        </ul>\r\n      </nav>\r\n    </div>\r\n  </header>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(productService, authService, router, flashMessage) {
        this.productService = productService;
        this.authService = authService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.isAdmin = 0;
        if (localStorage.getItem('isAdmin') == 'true')
            this.isAdmin = 1;
        console.log(this.isAdmin);
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent.prototype.onLogoutClick = function () {
        this.authService.logout();
        this.flashMessage.show('Your are successfully logged out!', { cssClass: 'alert-success' });
        this.router.navigate(['/login']);
        return false;
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__("../../../../../src/app/component/navigation/navigation.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/payment-system/payment-system.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/payment-system/payment-system.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 style=\"text-align: center; margin-top: 100px; margin-bottom: 300px;\">Payment System is not implemented Yet!</h2>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/payment-system/payment-system.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentSystemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaymentSystemComponent = /** @class */ (function () {
    function PaymentSystemComponent() {
    }
    PaymentSystemComponent.prototype.ngOnInit = function () {
    };
    PaymentSystemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-payment-system',
            template: __webpack_require__("../../../../../src/app/component/payment-system/payment-system.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/payment-system/payment-system.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PaymentSystemComponent);
    return PaymentSystemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/photo-upload/photo-upload.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/app/component/photo-upload/upload.jpg")) + ");\r\n  min-height: 405px;\r\n}\r\n\r\n.header-section{\r\n    height: 80px;\r\n    line-height: 80px;\r\n    color: beige;\r\n    background-color: rgb(46, 43, 43);\r\n    font-size: 24px;\r\n    padding-left: 20px;\r\n  }\r\n\r\n.row {\r\n  min-height: 200px;\r\n}\r\n\r\n.card{\r\n    background-color: rgba(200,150,90,0.4);\r\n    -webkit-box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n            box-shadow:0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);\r\n    color:black;\r\n    font-size: 20px;\r\n    margin: 20px;\r\n    padding: 10px;\r\n  }\r\n\r\n.uploadList{\r\n    padding: 10px;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/photo-upload/photo-upload.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"card\">\r\n      <h2 style=\"text-align: center\"> Image Upload Section </h2>\r\n    </div>\r\n  </div>\r\n<div class=\"container-fluid\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-md-2\"></div>\r\n    <div class=\"col-md-8\">\r\n      <div class=\"row card\">\r\n        <div class=\"col-sm-12\">\r\n          <div id=\"fileSelector\">\r\n            <input type=\"file\" name=\"fileUplaod\" id=\"fileUpload\"\r\n                   multiple ng2FileSelect [uploader]=\"uploader\">\r\n          </div>\r\n          <div>\r\n            <div class=\"row uploadList\" *ngFor=\"let item of uploader.queue\">\r\n              <div class=\"col-sm-4\"><b>File Name:</b> {{item.file.name}}</div>\r\n              <div class=\"col-sm-4\">\r\n                <div class=\"progress\">\r\n                  <div class=\"progress-bar bg-success\"\r\n                       [ngStyle]=\"{'width':item.progress+'%'}\"></div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col-sm-4\">\r\n                <button type=\"button\" class=\"btn btn-dark\" (click)=\"item.upload()\">Upload</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"item.remove()\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"row\" *ngIf=\"uploader?.queue?.length > 0\">-->\r\n            <!--<button type=\"button\" class=\"btn btn-primary\" (click)=\"uploader.uploadAll()\">Upload All</button>-->\r\n          <!--</div>-->\r\n        </div> <br><br>\r\n        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <button type=\"button\" class=\"btn btn-primary\"    [routerLink]=\"['/home']\" >\r\n          <span class=\"fa fa-shopping-cart\"></span>\r\n          <a style = \"color: black;\">Continue Shopping</a>\r\n        </button><br>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-2\"></div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/photo-upload/photo-upload.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhotoUploadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var uri = 'http://localhost:3000/product';
var ur2;
var PhotoUploadComponent = /** @class */ (function () {
    // http://localhost:4200/photo/5aca319a784c6127c01e3f48
    function PhotoUploadComponent(productService, route, router) {
        var _this = this;
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.attachmentList = [];
        var id = this.route.snapshot.paramMap.get('id');
        ur2 = "http://localhost:3000/product/" + id;
        console.log('Here ' + id + ' there');
        console.log(ur2);
        this.product = [];
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1_ng2_file_upload__["FileUploader"]({ url: ur2 });
        this.uploader.onAfterAddingFile = function (file) { file.withCredentials = false; };
        this.uploader.onCompleteItem = function (item, response, status, headers) {
            _this.attachmentList.push(JSON.parse(response));
            console.log(item);
        };
    }
    PhotoUploadComponent.prototype.ngOnInit = function () {
    };
    PhotoUploadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-photo-upload',
            template: __webpack_require__("../../../../../src/app/component/photo-upload/photo-upload.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/photo-upload/photo-upload.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__angular_router__["b" /* Router */]])
    ], PhotoUploadComponent);
    return PhotoUploadComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/photo-upload/upload.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "upload.55b85af229c0bb28ccc7.jpg";

/***/ }),

/***/ "../../../../../src/app/component/product-edit/most-bg.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "most-bg.94de0fec8f34d6262145.jpg";

/***/ }),

/***/ "../../../../../src/app/component/product-edit/product-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#playground-container {\r\n  height: 500px;\r\n  overflow: hidden !important;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.bg{\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  /* background:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n  background:url(http://t.wallpaperweb.org/wallpaper/cars/1920x1200/Ferrari_6.jpg);*/\r\n  background:url(" + escape(__webpack_require__("../../../../../src/app/component/product-edit/most-bg.jpg")) + ");\r\n  font-family: 'Oxygen', sans-serif;\r\n  background-size: cover;\r\n  padding: 50px 20px;\r\n}\r\n.main{\r\n  margin:50px 15px;\r\n}\r\nh1.title {\r\n  font-size: 50px;\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n}\r\nhr{\r\n  width: 10%;\r\n  color: #fff;\r\n}\r\n.form-group{\r\n  margin-bottom: 15px;\r\n}\r\nlabel{\r\n  margin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  padding-top: 3px;\r\n}\r\n.main-login{\r\n  background-color: #fff;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n  height: auto!important;\r\n  padding: 8px 12px !important;\r\n}\r\n.input-group {\r\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n  border: 1px solid #ccc;\r\n  margin-top: 28px;\r\n  padding: 6px 12px;\r\n  color: #666;\r\n  text-shadow: 0 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 3px 3px;\r\n  -webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  background: #f5f5f5;\r\n  background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center{\r\n  margin-top: 30px;\r\n  margin: 0 auto;\r\n  max-width: 500px;\r\n  padding: 15px 25px;\r\n  background: rgba(133, 150, 150,0.5);\r\n  color: #FFF;\r\n  border-radius: 15px;\r\n  text-shadow: none;\r\n  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n  color: #009edf;\r\n  font-size: 17px;\r\n}\r\n.login-button{\r\n  margin-top: 5px;\r\n}\r\n.login-register{\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/product-edit/product-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<h2 class=\"page-header\" style=\"text-align: center\">Edit Product</h2>-->\r\n\r\n<!--<form (submit)=\"update(product._id)\" >-->\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Name</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"text\" [(ngModel)]=\"product.name\" name=\"name\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n\r\n\r\n  <!--&lt;!&ndash;<div class=\"form-group row\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<label class=\"col-sm-2 col-form-label\">Code</label>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<div class=\"col-sm-10\">&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<input type=\"text\" [(ngModel)]=\"product.code\" name=\"code\" class=\"form-control\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n  <!--&lt;!&ndash;<div class=\"form-group row\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<label class=\"col-sm-2 col-form-label\">Picture</label>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<div class=\"col-sm-10\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;<input type=\"text\" [(ngModel)]=\"picture\" name=\"picture\" class=\"form-control\">&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Description</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"textarea\" [(ngModel)]=\"product.description\" name=\"description\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Price</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"text\" [(ngModel)]=\"product.price\" name=\"price\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n\r\n  <!--&lt;!&ndash;<div class=\"form-group row\">&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<label class=\"col-sm-2 col-form-label\">Category</label>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;<div class=\"col-sm-10\" >&ndash;&gt;-->\r\n      <!--&lt;!&ndash;<select type=\"text\" [(ngModel)]=\"product.category\" name=\"category\" class=\"form-control\">&ndash;&gt;-->\r\n\r\n        <!--&lt;!&ndash;<option *ngFor=\"let cat of category\" >{{cat.category}}</option>&ndash;&gt;-->\r\n\r\n      <!--&lt;!&ndash;</select>&ndash;&gt;-->\r\n    <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n  <!--&lt;!&ndash;</div>&ndash;&gt;-->\r\n\r\n  <!--<div class=\"form-group row\">-->\r\n    <!--<label class=\"col-sm-2 col-form-label\">Availability</label>-->\r\n    <!--<div class=\"col-sm-10\">-->\r\n      <!--<input type=\"text\" [(ngModel)]=\"product.avl\" name=\"avl\" class=\"form-control\">-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n\r\n  <!--<button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\">Submit</button>-->\r\n\r\n\r\n<!--</form>-->\r\n\r\n\r\n<div class=\"bg\">\r\n  <div class=\"main-center\">\r\n    <div class=\"form-group\">\r\n      <h3 style=\"text-align: center\">Edit Product</h3>\r\n      <label class=\"cols-sm-2 control-label\">Name</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"text\" [(ngModel)]=\"product.name\" name=\"name\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n    </div> <br>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"cols-sm-2 control-label\">Description</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"textarea\" [(ngModel)]=\"product.description\" name=\"description\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n    </div>  <br>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"cols-sm-2 control-label\">Price</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"text\" [(ngModel)]=\"product.price\" name=\"price\" class=\"form-control\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-block btn-primary\" (click)=\"update(product._id)\">Update Info</button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/product-edit/product-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_product__ = __webpack_require__("../../../../../src/app/model/product.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductEditComponent = /** @class */ (function () {
    function ProductEditComponent(productService, route, router) {
        this.productService = productService;
        this.route = route;
        this.router = router;
        this.product = new __WEBPACK_IMPORTED_MODULE_3__model_product__["a" /* Product */]();
        this.category = [];
    }
    ProductEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        // console.log(id);
        this.productService.getSingleProduct(id).subscribe(function (response) {
            _this.product = response.data;
            console.log(_this.product);
        });
        // this.productService.getCategory()
        //   .subscribe(response=>{
        //     this.category = response.data;
        //   });
        console.log(this.product);
    };
    ProductEditComponent.prototype.update = function (id) {
        this.productService.updateProduct(id, this.product)
            .subscribe(function (response) {
            console.log(response);
        });
        this.router.navigate(['/']);
    };
    ProductEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product-edit',
            template: __webpack_require__("../../../../../src/app/component/product-edit/product-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product-edit/product-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProductEditComponent);
    return ProductEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/product/addProduct.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "addProduct.368b53eb9df3c11c4714.jpg";

/***/ }),

/***/ "../../../../../src/app/component/product/product.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#playground-container {\r\n  height: 500px;\r\n  overflow: hidden !important;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.bg{\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  /* background:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n  background:url(http://t.wallpaperweb.org/wallpaper/cars/1920x1200/Ferrari_6.jpg);*/\r\n  background:url(" + escape(__webpack_require__("../../../../../src/app/component/product/addProduct.jpg")) + ");\r\n  font-family: 'Oxygen', sans-serif;\r\n  background-size: cover;\r\n  padding: 50px 20px;\r\n}\r\n.main{\r\n  margin:50px 15px;\r\n}\r\nh1.title {\r\n  font-size: 50px;\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n}\r\nhr{\r\n  width: 10%;\r\n  color: #fff;\r\n}\r\n.form-group{\r\n  margin-bottom: 15px;\r\n}\r\nlabel{\r\n  margin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  padding-top: 3px;\r\n}\r\n.main-login{\r\n  background-color: #fff;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n  height: auto!important;\r\n  padding: 8px 12px !important;\r\n}\r\n.input-group {\r\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n  border: 1px solid #ccc;\r\n  margin-top: 28px;\r\n  padding: 6px 12px;\r\n  color: #666;\r\n  text-shadow: 0 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 3px 3px;\r\n  -webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  background: #f5f5f5;\r\n  background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center{\r\n  margin-top: 30px;\r\n  margin: 0 auto;\r\n  max-width: 500px;\r\n  padding: 15px 25px;\r\n  background: rgba(133, 150, 150,0.5);\r\n  color: #FFF;\r\n  border-radius: 15px;\r\n  text-shadow: none;\r\n  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n  color: #009edf;\r\n  font-size: 17px;\r\n}\r\n.login-button{\r\n  margin-top: 5px;\r\n}\r\n.login-register{\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/product/product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"bg\">\r\n  <div class=\"main-center\">\r\n    <div class=\"form-group\">\r\n      <label class=\"cols-sm-2 control-label\">Name</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" name=\"name\"  placeholder=\"Enter Product Name\"/>\r\n        </div>\r\n      </div>\r\n    </div> <br>\r\n\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"cols-sm-2 control-label\">Description</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"textarea\" [(ngModel)]=\"description\" class=\"form-control\" name=\"description\" placeholder=\"Enter description\"/>\r\n        </div>\r\n      </div>\r\n    </div>  <br>\r\n\r\n    <div class=\"form-group\">\r\n      <label class=\"cols-sm-2 control-label\">Price</label>\r\n      <div class=\"cols-sm-10\">\r\n        <div class=\"input-group\">\r\n          <span class=\"input-group-addon\"></span>\r\n          <input type=\"text\" [(ngModel)]=\"price\" class=\"form-control\" name=\"price\" placeholder=\"Enter price\"/>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <button class=\"btn btn-block btn-primary\" (click)=\"onRegisterSubmit()\">Add Product</button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/product/product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_product_service__ = __webpack_require__("../../../../../src/app/service/product.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_validate_service__ = __webpack_require__("../../../../../src/app/service/validate.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductComponent = /** @class */ (function () {
    function ProductComponent(productService, router, flashMessage, validateService) {
        this.productService = productService;
        this.router = router;
        this.flashMessage = flashMessage;
        this.validateService = validateService;
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ProductComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        console.log('Submit clicked');
        var product = {
            name: this.name,
            description: this.description,
            price: this.price
        };
        this.productService.registerProduct(product).subscribe(function (response) {
            if (response.success) {
                console.log(response.data._id);
                var id = response.data._id;
                _this.flashMessage.show('Successfully created Product', { cssClass: 'alert-success' });
                _this.router.navigate(["/photo/" + id]);
            }
            else {
                _this.router.navigate(['/product']);
            }
        });
    };
    ProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-product',
            template: __webpack_require__("../../../../../src/app/component/product/product.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/product/product.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_product_service__["a" /* ProductService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"],
            __WEBPACK_IMPORTED_MODULE_4__service_validate_service__["a" /* ValidateService */]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg2 {\r\n  background-image: url(" + escape(__webpack_require__("../../../../../src/app/component/profile/profile.jpg")) + ");\r\n}\r\n\r\n.thumbnail {\r\n  background-color: rgba(200,230,240,.8);\r\n}\r\n\r\n.title {\r\n  text-align: center;\r\n  font-size: 200%;\r\n  background-color: rgba(120,120,120,0.7);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-primary bg2\" style=\"width: 100%; margin: 0%\">\r\n  <div *ngIf=\"!singleUser\" class=\"title\">Registered Users</div>\r\n  <div *ngIf=\"singleUser\" class=\"title\">Your Profile</div>\r\n\r\n  <div class=\"panel-body\">\r\n    <div *ngFor=\"let user of users;let i = index\" class=\"col-sm-6 col-md-3\">\r\n      <div  class=\"thumbnail\" style=\"padding-left: 20px; font-size: 120%\">\r\n        <p><b>Name: </b>{{user.name}}</p>\r\n        <p><b>Email: </b>{{user.email}}</p>\r\n        <p><b>Username: </b>{{user.username}}</p>\r\n        <p *ngIf=\"user.isAdmin==false\"><a (click)=\"deleteProfile(user)\" class=\"btn btn-danger a-btn-slide-text\">\r\n          <span><strong>Delete</strong></span>\r\n        </a></p>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"singleUser\" class=\"col-lg-6 col-md-3\" style=\"padding-bottom: 100px\"> <br><br>\r\n      <div  class=\"thumbnail\" style=\"padding-left: 40px; font-size: 150%; padding-bottom: 50px\">\r\n        <p><b>Name: </b>{{singleUser.name}}</p>\r\n        <p>\r\n          <b>Email: </b>{{singleUser.email}}\r\n          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n          <a (click)=\"editProfile(singleUser._id)\" class=\"btn btn-info a-btn-slide-text\">\r\n            <span><strong>Edit Your Profile</strong></span>\r\n          </a>\r\n        </p>\r\n        <p><b>Username: </b>{{singleUser.username}}</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/component/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.users = [];
        this.singleUser = null;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log(this.currentUser);
        if (this.currentUser.isAdmin) {
            this.authService.getProfile().subscribe(function (response) {
                _this.users = response.data;
                console.log('user data:');
                console.log(_this.users);
            });
        }
        else {
            this.authService.getSiingleProfile(localStorage.getItem('loginId'))
                .subscribe(function (response) {
                _this.singleUser = JSON.parse(JSON.stringify(response.data));
                console.log('user:');
                console.log(_this.singleUser);
            });
        }
    };
    ProfileComponent.prototype.editProfile = function (id) {
        this.router.navigate(["/editprofile/" + id]);
    };
    ProfileComponent.prototype.deleteProfile = function (user) {
        this.users.splice(this.users.indexOf(user), 1);
        this.authService.deleteProfile(user._id).subscribe(function (respnse) {
        });
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__("../../../../../src/app/component/profile/profile.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/component/profile/profile.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "profile.f829ec327eea2ca21301.jpg";

/***/ }),

/***/ "../../../../../src/app/component/registration/logInBG.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "logInBG.ca24ad5ce46947e4ff91.jpg";

/***/ }),

/***/ "../../../../../src/app/component/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#playground-container {\r\n  height: 500px;\r\n  overflow: hidden !important;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.bg{\r\n  height: 100%;\r\n  background-repeat: no-repeat;\r\n  /* background:url(https://i.ytimg.com/vi/4kfXjatgeEU/maxresdefault.jpg);\r\n  background:url(http://t.wallpaperweb.org/wallpaper/cars/1920x1200/Ferrari_6.jpg);*/\r\n  background:url(" + escape(__webpack_require__("../../../../../src/app/component/registration/logInBG.jpg")) + ");\r\n  font-family: 'Oxygen', sans-serif;\r\n  background-size: cover;\r\n  padding: 50px 20px;\r\n}\r\n.main{\r\n  margin:50px 15px;\r\n}\r\nh1.title {\r\n  font-size: 50px;\r\n  font-family: 'Passion One', cursive;\r\n  font-weight: 400;\r\n}\r\nhr{\r\n  width: 10%;\r\n  color: #fff;\r\n}\r\n.form-group{\r\n  margin-bottom: 15px;\r\n}\r\nlabel{\r\n  margin-bottom: 15px;\r\n}\r\ninput,\r\ninput::-webkit-input-placeholder {\r\n  font-size: 11px;\r\n  padding-top: 3px;\r\n}\r\n.main-login{\r\n  background-color: #fff;\r\n  /* shadows and rounded borders */\r\n  border-radius: 2px;\r\n  -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\r\n\r\n}\r\n.form-control {\r\n  height: auto!important;\r\n  padding: 8px 12px !important;\r\n}\r\n.input-group {\r\n  -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n  box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.21)!important;\r\n}\r\n#button {\r\n  border: 1px solid #ccc;\r\n  margin-top: 28px;\r\n  padding: 6px 12px;\r\n  color: #666;\r\n  text-shadow: 0 1px #fff;\r\n  cursor: pointer;\r\n  border-radius: 3px 3px;\r\n  -webkit-box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  box-shadow: 0 1px #fff inset, 0 1px #ddd;\r\n  background: #f5f5f5;\r\n  background: -ms-linear-gradient(top, #f5f5f5 0%, #eeeeee 100%);\r\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#eeeeee', GradientType=0);\r\n}\r\n.main-center{\r\n  margin-top: 30px;\r\n  margin: 0 auto;\r\n  max-width: 500px;\r\n  padding: 15px 25px;\r\n  background: rgba(51, 204, 255,0.5);\r\n  color: #FFF;\r\n  border-radius: 15px;\r\n  text-shadow: none;\r\n  -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n  box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.31);\r\n\r\n}\r\nspan.input-group-addon i {\r\n  color: #009edf;\r\n  font-size: 17px;\r\n}\r\n.login-button{\r\n  margin-top: 5px;\r\n}\r\n.login-register{\r\n  font-size: 11px;\r\n  text-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/component/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"form-group\">\r\n  <label >Name:</label>\r\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"name\">\r\n</div>\r\n-->\r\n<div class=\"bg\">\r\n<div class=\"main-center\">\r\n<div class=\"form-group\">\r\n  <label for=\"name\" class=\"cols-sm-2 control-label\">Your Name</label>\r\n  <div class=\"cols-sm-10\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"fa fa-user fa\" aria-hidden=\"true\"></i></span>\r\n      <input type=\"text\" [(ngModel)]=\"name\" class=\"form-control\" name=\"name\" id=\"name\"  placeholder=\"Enter your Name\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"email\" class=\"cols-sm-2 control-label\">Your Email</label>\r\n  <div class=\"cols-sm-10\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"fa fa-envelope fa\" aria-hidden=\"true\"></i></span>\r\n      <input type=\"text\" [(ngModel)]=\"email\" class=\"form-control\" name=\"email\" id=\"email\"  placeholder=\"Enter your Email\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"username\" class=\"cols-sm-2 control-label\">Username</label>\r\n  <div class=\"cols-sm-10\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"fa fa-users fa\" aria-hidden=\"true\"></i></span>\r\n      <input type=\"text\" [(ngModel)]=\"username\" class=\"form-control\" name=\"username\" id=\"username\"  placeholder=\"Enter your Username\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"password\" class=\"cols-sm-2 control-label\">Password</label>\r\n  <div class=\"cols-sm-10\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n      <input type=\"password\" [(ngModel)]=\"password\" class=\"form-control\" name=\"password\" id=\"password\"  placeholder=\"Enter your Password\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"form-group\">\r\n  <label for=\"confirm\" class=\"cols-sm-2 control-label\">Confirm Password</label>\r\n  <div class=\"cols-sm-10\">\r\n    <div class=\"input-group\">\r\n      <span class=\"input-group-addon\"><i class=\"fa fa-lock fa-lg\" aria-hidden=\"true\"></i></span>\r\n      <input type=\"password\" [(ngModel)]=\"confirm\" class=\"form-control\" name=\"confirm\" id=\"confirm\"  placeholder=\"Confirm your Password\"/>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<button class=\"btn btn-block btn-primary\" (click)=\"onSignUp()\">Submit</button>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/component/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("../../../../../src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_validate_service__ = __webpack_require__("../../../../../src/app/service/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/module/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(authService, router, validate, _flashMessagesService) {
        this.authService = authService;
        this.router = router;
        this.validate = validate;
        this._flashMessagesService = _flashMessagesService;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.onSignUp = function () {
        var _this = this;
        // console.log('Hello World: ' + this.name + ' ' + this.username + ' ' + this.password + ' ' + this.email + ' ' + this.confirm);
        var user = {
            name: this.name,
            email: this.email,
            username: this.username,
            password: this.password,
            // confirm: this.confirm,
            withList: this.wishList,
            buyList: this.buyList
        };
        if (!this.validate.checkEmpty(user)) {
            this._flashMessagesService.show('Fill all the fields!', { cssClass: 'alert-danger' });
            return;
        }
        if (!this.validate.validEmail(user.email)) {
            this._flashMessagesService.show('Email is not valid!', { cssClass: 'alert-danger' });
            return;
        }
        this.authService.registerUser(user)
            .subscribe(function (data) {
            console.log(data);
            if (data.success) {
                _this._flashMessagesService.show('Your are now Registered.', { cssClass: 'alert-success' });
                _this.router.navigate(['/login']);
            }
            else {
                _this._flashMessagesService.show('Something went wrong', { cssClass: 'alert-danger' });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/component/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/component/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/model/product.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Product; });
var Product = /** @class */ (function () {
    function Product() {
    }
    return Product;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AuthGuardService = /** @class */ (function () {
    function AuthGuardService() {
    }
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        // return this.http.post('http://localhost:3000/user', user, { headers: headers})
        return this.http.post('user', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.authenticateUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post('auth/login', user, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.storeUserData = function (token, user) {
        localStorage.setItem('id_token', token);
        localStorage.setItem('user', JSON.stringify(user));
        this.authToken = token;
        this.user = user;
    };
    AuthService.prototype.getSiingleProfile = function (loginId) {
        console.log('hello world kaj kor abar' + loginId);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Content-type', 'application/json');
        return this.http.get("user/" + loginId, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.UpdateProfile = function (loginId, User) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log('In service upadte' + JSON.stringify(User));
        headers.append('Content-type', 'application/json');
        return this.http.patch("user/" + loginId, User, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        // console.log('Token '+this.authToken);
        // headers.append('authorization', this.authToken);
        // headers.append('Content-Type', 'application/json');
        console.log('Getting profile');
        return this.http.get('user')
            .map(function (res) {
            console.log(res);
            return res.json();
        });
    };
    AuthService.prototype.deleteProfile = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        console.log('In delete profile');
        // console.log('Token '+this.authToken);
        headers.append('authorization', this.authToken);
        headers.append('Content-Type', 'application/json');
        return this.http.delete("user/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    AuthService.prototype.loadToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    AuthService.prototype.logout = function () {
        this.authToken = null;
        this.user = null;
        localStorage.clear();
    };
    AuthService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_3_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/service/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductService = /** @class */ (function () {
    function ProductService(http) {
        this.http = http;
        this.productCartSize = 0;
        this.myProductArray = [];
    }
    ProductService.prototype.registerProduct = function (product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('product', JSON.stringify(product), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProduct = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get('product', { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.getProductCartSize = function () {
        return localStorage.getItem('cnt');
    };
    ProductService.prototype.getSingleProduct = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.get("product/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService.prototype.deleteProduct = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.getToken();
        // console.log('Token '+this.authToken);
        headers.append('authorization', this.authToken);
        headers.append('Content-type', 'application/json');
        return this.http.delete("product/" + id, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    // getCategory(){
    //
    //   let headers = new Headers();
    //
    //   headers.append('Content-type', 'application/json');
    //
    //   return this.http.get('http://localhost:3000/category', { headers: headers })
    //     .map(res => res.json());
    //
    // }
    ProductService.prototype.storeUserDatta = function (paramcnt, userId, product) {
        console.log(product);
        var cnt2 = localStorage.getItem('cnt');
        this.myProductArray = JSON.parse(localStorage.getItem('myProductCart'));
        if (this.myProductArray == null) {
            console.log('My product cart array is null.');
            this.myProductArray = [];
        }
        if (cnt2 == null) {
            // console.log('cnt2 is null.');
            cnt2 = '0';
        }
        var productExistence = false;
        var productIndex;
        console.log('My Product Cart array length: ' + this.myProductArray.length);
        for (var index = 0; index < this.myProductArray.length; index++) {
            var myProductInfo = this.myProductArray[index];
            console.log(myProductInfo);
            console.log();
            var myProduct = myProductInfo.myProduct;
            var myProductCount = myProductInfo.myProductCount;
            if (myProduct._id === product._id) {
                console.log('My Product exists');
                productExistence = true;
                console.log(this.myProductArray[index].myProductCount);
                this.myProductArray[index].myProductCount = this.myProductArray[index].myProductCount + 1;
                break;
            }
        }
        if (productExistence === false) {
            var myProductInfo = {};
            myProductInfo.myProduct = product;
            myProductInfo.myProductCount = 1;
            this.myProductArray.push(myProductInfo);
        }
        localStorage.setItem('myProductCart', JSON.stringify(this.myProductArray));
        var myPreviousCount = parseInt(cnt2);
        // console.log('After parsing: ' + myPreviousCount);
        cnt2 = (myPreviousCount + 1).toString();
        this.productCartSize = (myPreviousCount + 1);
        // console.log('After add: '  + paramcnt + ' get:  ' + cnt2);
        localStorage.setItem('cnt', cnt2);
        // console.log(user);
        // localStorage.setItem('user',JSON.stringify(user));
    };
    ProductService.prototype.loadToken = function () {
        return localStorage.getItem('cnt');
    };
    ProductService.prototype.getToken = function () {
        var token = localStorage.getItem('id_token');
        this.authToken = token;
    };
    ProductService.prototype.updateProduct = function (id, product) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.patch("product/" + id, product, { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/service/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/service/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = /** @class */ (function () {
    function ValidateService() {
    }
    ValidateService.prototype.checkEmpty = function (user) {
        if (user.name === undefined || user.email === undefined || user.username === undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    ValidateService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ValidateService);
    return ValidateService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map