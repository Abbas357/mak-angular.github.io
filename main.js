(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n\r\n<head>\r\n   <meta charset=\"UTF-8\">\r\n   <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n   <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\r\n   <title>{{title}}</title>\r\n</head>\r\n\r\n<body>\r\n   <app-navbar></app-navbar>\r\n   <div class=\"container\">\r\n      <router-outlet></router-outlet>\r\n   </div>\r\n</body>\r\n\r\n</html>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Awesome Angular App';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/user-details/user-details.component */ "./src/app/components/user-details/user-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'about', component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"] },
    { path: 'user/:id', component: _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes, { useHash: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\r\n   <label>Select a Country</label>\r\n   <select value=\"name\"[(ngModel)]=\"country\" class=\"form-control\">\r\n      <option value=\"pakistan\">Pakistan</option>\r\n      <option value=\"india\">India</option>\r\n      <option value=\"china\">China</option>\r\n      <option value=\"america\">America</option>\r\n   </select>\r\n</div>\r\n<div [ngSwitch]=\"country\">\r\n   <div *ngSwitchCase=\"'pakistan'\" style=\"width: 100%; height: 500px\" class=\"container bg-success\">\r\n      <h1 class=\"display-4 text-white\">Pakistan</h1>\r\n      <p class=\"lead text-white\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta fuga dolorem nesciunt quisquam atque praesentium facilis na natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum,  natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum, ullam omn natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum, ullam omn natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum, ullam omnullam omn natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum, ullam omntus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum, ullam omnis modi non deleniti impedit!</p>\r\n   </div>\r\n   <div *ngSwitchCase=\"'india'\" style=\"width: 100%; height: 500px\" class=\"container bg-warning\">\r\n      <h1 class=\"display-4 text-white\">India</h1>\r\n      <p class=\"lead text-white\">Lorm orum minus? Laborum, ullam omnis modi non deleniti impedit!m ipsuquod enim  natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribSoluta fuga dolorem nesciunt quisquam atque p dol possimus, paronsequuntur assumenda! Perspiciatis quis saepead magnia</p>\r\n   </div>\r\n   <div *ngSwitchCase=\"'china'\" style=\"width: 100%; height: 500px\" class=\"container bg-danger\">\r\n      <h1 class=\"display-4 text-white\">China</h1>\r\n      <p class=\"lead text-white\">Lore dolorum minus? Laborum, ullam omnis modi non deleniti impedit! eeuom dolor sit amet consectetur adipisicing elit. Solutauiss! Quasi dom ad magn natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum, ullam omn natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatis quis saepe dolorum minus? Laborum, ullam omn natus accusantium eos quod enim ad magnam, distinctio dolorum, eligendi ut qui possimus, pariatur esse quo quas! Quasi quuntur assu fuga dolorem nesciunt quisquam atque praesentium facilis natus accusantium eos quod! Perspiciatis qmendm ipsu, pari saepnise qa</p>\r\n   </div>\r\n   <div *ngSwitchCase=\"'america'\" style=\"width: 100%; height: 500px\" class=\"container bg-info\">\r\n      <h1 class=\"display-4 text-white\">America</h1>\r\n      <p class=\"lead text-white\">Loron delenicusantiut quus alit. Soluta fugaquis saepe dolorum minus? Laborum, ullam omnis modi m eo psum dolor sit amet consectetur adipisicing epossimus, isquam atque praesentium facilis ti impedem i pariaturdolorem s quod enim ad magnam, distinctio dolorum, eligendi ut qui cnatesse quo quas! Quasi doloribus a consequuntur assumenda! Perspiciatisnesciunn it!</p>\r\n   </div>\r\n   <div *ngSwitchDefault>Select a valid Name</div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
        this.country = '';
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a href=\"javascript:void()\" class=\"{{show ? 'mt-4 btn btn-warning':'mt-4 btn btn-success text-white'}}\" (click)='hideShow();'>{{show ? 'hide': 'show'}}</a>\r\n<h1 *ngIf='show' class=\"{{show ? 'border border-warning display-4 text-danger':'border border-success'}}\">This is personal page with some personal materials below. Please click the above button to hide my personal content</h1>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.show = false;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.hideShow = function () {
        this.show = !this.show;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <div class=\"container\">\n    <a class=\"navbar-brand text-danger\" routerLink=\"/\">AngularApp</a>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/about\">About</a>\n        </li>\n        <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/user/Abbas\">Profile</a>\n          </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n        <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n      </form>\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user-details/user-details.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf='id === \"Abbas\"; then correct else error'></span>\r\n<ng-template #correct>\r\n   <h1 class=\"display-4 text-info\" style=\"font-size:30px\">Welcome <span class=\"text-success\">{{id}}</span></h1>\r\n   <h2 class=\"card display-4 text-center text-warning\">Logo Generator</h2>\r\n   <hr>\r\n   <div class=\"container\">\r\n      <div class=\"row\">\r\n         <div class=\"col-sm-3\" style=\"background: radial-gradient(lightgrey,grey); border-radius: 35px 0px 0px 35px\">\r\n            <div class=\"form-group\" style=\"margin-top:50%\">\r\n               <label>Enter Name</label>\r\n               <input type=\"text\" class=\"form-control\" [(ngModel)]='name' maxlength=\"10\" placeholder=\"Enter here...\">\r\n            </div>\r\n         </div>\r\n         <div class=\"col-sm-6\" [ngStyle]=\"{'background': bgcolor,'border-radius.px': round,'border-width.px': bsize, 'border-style': 'solid', 'border-color': bcolor}\">\r\n            <h1 [ngStyle]=\"{'font-size.px': size, 'color': color, 'text-align':align}\" class=\"mt-4\">{{name}}</h1>\r\n         </div>\r\n         <div class=\"col-sm-3\" style=\"background: radial-gradient(lightgrey,grey); border-radius: 0px 35px 35px 0px\">\r\n            <div class=\"form-group\">\r\n               <label>Background:</label>\r\n               <input type=\"color\" [(ngModel)]=\"bgcolor\" name=\"bgcolor\" style=\"width: 100%\">\r\n               <label>Font Size:</label>\r\n               <input type=\"range\" [(ngModel)]=\"size\" min=\"50\" max=\"200\" style=\"width: 100%\" name=\"size\">\r\n               <label>Font Color:</label>\r\n               <input type=\"color\" [(ngModel)]=\"color\" name=\"color\" style=\"width: 100%\">\r\n               <label>Border:</label>\r\n               <div class=\"container\">\r\n                  <div class=\"row\">\r\n                     <div class=\"col\">\r\n                        <input type=\"range\" [(ngModel)]=\"bsize\" min=\"0\" max=\"100\" style=\"width: 100%\" name=\"bsize\">\r\n                     </div>\r\n                     <div class=\"col\">\r\n                        <input type=\"color\" [(ngModel)]=\"bcolor\" min=\"50\" max=\"200\" style=\"width: 100%\" name=\"bcolor\">\r\n                     </div>\r\n                  </div>\r\n               </div>\r\n               <label>Make It Round:</label>\r\n               <input type=\"range\" [(ngModel)]=\"round\" min=\"0\" max=\"200\" style=\"width: 100%\" name=\"round\">\r\n               <label>Align: </label><br>\r\n               Left <input type=\"radio\" [(ngModel)]=\"align\" name=\"align\" value=\"left\">&nbsp;&nbsp;&nbsp;\r\n               Center <input type=\"radio\" [(ngModel)]=\"align\" name=\"align\" value=\"center\">&nbsp;&nbsp;&nbsp;\r\n               Right <input type=\"radio\" [(ngModel)]=\"align\" name=\"align\" value=\"right\">\r\n            </div>\r\n         </div>\r\n      </div>\r\n   </div>\r\n   <hr>\r\n   <button class=\"btn btn-success btn-lg float-right mt-2\">Generate Logo</button>\r\n</ng-template>\r\n<ng-template #error>\r\n   <h1 class=\"display-4 text-danger\">Sorry! You are not Administrator <b>Mr. {{id}}</b></h1>\r\n   <a routerLink=\"/user/Abbas\" class=\"btn btn-success\">Logo Generator</a>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/user-details/user-details.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/user-details/user-details.component.ts ***!
  \*******************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.name = "";
        this.color = '';
        this.bgcolor1 = '';
        this.bgcolor2 = '';
        this.align = '';
        this.bcolor = '';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
    };
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Muhammad Abbas Khan\projects\AngularApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map