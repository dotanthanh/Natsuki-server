webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signin_signin_form_signin_form_component__ = __webpack_require__("../../../../../src/app/signin/signin-form/signin-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__events_display_events_display_component__ = __webpack_require__("../../../../../src/app/events-display/events-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__new_event_new_event_component__ = __webpack_require__("../../../../../src/app/new-event/new-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_form_signup_form_component__["a" /* SignupFormComponent */] },
    { path: 'signin', component: __WEBPACK_IMPORTED_MODULE_4__signin_signin_form_signin_form_component__["a" /* SigninFormComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_9__services_auth_guard_service__["a" /* AuthGuardService */]] },
    { path: 'new-event', component: __WEBPACK_IMPORTED_MODULE_7__new_event_new_event_component__["a" /* NewEventComponent */] },
    { path: 'events', children: [
            { path: 'search', component: __WEBPACK_IMPORTED_MODULE_6__events_display_events_display_component__["a" /* EventsDisplayComponent */] },
            { path: 'id/:id', component: __WEBPACK_IMPORTED_MODULE_8__event_detail_event_detail_component__["a" /* EventDetailComponent */] }
            // unsupported routes for now
            // { path: '', component: EventsDisplayComponent },
            // { path: 'category/:type', component: EventsDisplayComponent },
            // { path: 'hot', component: EventsDisplayComponent },
        ] }
    // route for error
    // { path: 'timeout', component: Unauthorized }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["PreloadAllModules"] })
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id='main-container'>\n  <app-header *ngIf='!isAuthenticated()'></app-header>\n  <app-header-user *ngIf='isAuthenticated()'></app-header-user>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(authService) {
        this.authService = authService;
        this.title = 'app';
    }
    AppComponent.prototype.isAuthenticated = function () {
        return this.authService.isAuthenticated();
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modal__ = __webpack_require__("../../../../ngx-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ngx_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__hot_events_hot_events_component__ = __webpack_require__("../../../../../src/app/hot-events/hot-events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__header_user_header_user_component__ = __webpack_require__("../../../../../src/app/header-user/header-user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_bar_search_bar_component__ = __webpack_require__("../../../../../src/app/search-bar/search-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__signin_signin_component__ = __webpack_require__("../../../../../src/app/signin/signin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__new_event_new_event_component__ = __webpack_require__("../../../../../src/app/new-event/new-event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__signup_signup_form_signup_form_component__ = __webpack_require__("../../../../../src/app/signup/signup-form/signup-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__signin_signin_form_signin_form_component__ = __webpack_require__("../../../../../src/app/signin/signin-form/signin-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__events_display_events_display_component__ = __webpack_require__("../../../../../src/app/events-display/events-display.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__events_display_pagination_pagination_component__ = __webpack_require__("../../../../../src/app/events-display/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__events_display_headline_headline_component__ = __webpack_require__("../../../../../src/app/events-display/headline/headline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__events_display_events_container_events_container_component__ = __webpack_require__("../../../../../src/app/events-display/events-container/events-container.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__event_detail_event_detail_component__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__events_display_events_service__ = __webpack_require__("../../../../../src/app/events-display/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__event_detail_event_detail_service__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__services_auth_interceptor__ = __webpack_require__("../../../../../src/app/services/auth.interceptor.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__category_list_category_list_component__["a" /* CategoryListComponent */],
            __WEBPACK_IMPORTED_MODULE_7__hot_events_hot_events_component__["a" /* HotEventsComponent */],
            __WEBPACK_IMPORTED_MODULE_8__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_9__header_user_header_user_component__["a" /* HeaderUserComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_bar_search_bar_component__["a" /* SearchBarComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_16__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_17__signin_signin_component__["a" /* SigninComponent */],
            __WEBPACK_IMPORTED_MODULE_18__new_event_new_event_component__["a" /* NewEventComponent */],
            __WEBPACK_IMPORTED_MODULE_19__signup_signup_form_signup_form_component__["a" /* SignupFormComponent */],
            __WEBPACK_IMPORTED_MODULE_20__signin_signin_form_signin_form_component__["a" /* SigninFormComponent */],
            __WEBPACK_IMPORTED_MODULE_21__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_22__events_display_events_display_component__["a" /* EventsDisplayComponent */],
            __WEBPACK_IMPORTED_MODULE_23__events_display_pagination_pagination_component__["a" /* PaginationComponent */],
            __WEBPACK_IMPORTED_MODULE_24__events_display_headline_headline_component__["a" /* HeadlineComponent */],
            __WEBPACK_IMPORTED_MODULE_25__events_display_events_container_events_container_component__["a" /* EventsContainerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__event_detail_event_detail_component__["a" /* EventDetailComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["c" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_modal__["ModalModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["d" /* ReactiveFormsModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_14__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_15__services_utils_service__["a" /* UtilsService */],
            __WEBPACK_IMPORTED_MODULE_27__services_data_storage_service__["a" /* DataStorageService */],
            __WEBPACK_IMPORTED_MODULE_28__events_display_events_service__["a" /* EventsService */],
            __WEBPACK_IMPORTED_MODULE_29__dashboard_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_30__event_detail_event_detail_service__["a" /* EventDetailService */],
            __WEBPACK_IMPORTED_MODULE_31__services_auth_guard_service__["a" /* AuthGuardService */],
            {
                provide: __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                useClass: __WEBPACK_IMPORTED_MODULE_32__services_auth_interceptor__["a" /* AuthInterceptor */],
                multi: true
            }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section header span {\r\n  padding: 0 20px;\r\n  background-color: white;\r\n  box-sizing: border-box;\r\n}\r\n\r\nsection .row .col-md-12 {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n      -ms-flex-direction: row;\r\n          flex-direction: row;\r\n  -ms-flex-wrap: wrap;\r\n      flex-wrap: wrap;\r\n  -webkit-box-pack:justify;\r\n      -ms-flex-pack:justify;\r\n          justify-content:space-between;\r\n}\r\n\r\nsection .row .col-md-12 .item {\r\n  width: 150px;\r\n  height: 150px;\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.2);\r\n  box-sizing: border-box;\r\n  margin: 10px;\r\n  text-transform: uppercase;\r\n  letter-spacing: 2px;\r\n  background: linear-gradient(rgba(41, 128, 185,0.8), rgba(41, 128, 185, 0.9));\r\n  display: table;\r\n  border-radius: 2px;\r\n}\r\n\r\nsection .row .col-md-12 .item span {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  text-align: center;\r\n  line-height: 30px;\r\n  font-size: 12px;\r\n  color: rgba(255,255,255,0.7);\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='category'>\n  <header>\n    <span>CATEGORIES</span>\n  </header>\n  <br />\n  <br />\n  <br />\n  <div class='row'>\n    <br />\n    <div class='col-md-12'>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n      <div class='item'>\n        <span>item</span>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CategoryListComponent = (function () {
    function CategoryListComponent() {
    }
    CategoryListComponent.prototype.ngOnInit = function () {
    };
    return CategoryListComponent;
}());
CategoryListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-category-list',
        template: __webpack_require__("../../../../../src/app/category-list/category-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category-list/category-list.component.css")]
    }),
    __metadata("design:paramtypes", [])
], CategoryListComponent);

//# sourceMappingURL=category-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* start dashboard profile display style here */\n\n.title {\n  letter-spacing: 0.5px;\n  font-family: 'Roboto';\n}\n\nsection.events-profile {\n  /*background: linear-gradient(rgba(41, 128, 185,0.8), rgba(41, 128, 185, 0.8));*/\n  background-color: white;\n  margin: 0;\n  padding: 0 7% 4% 7%;\n  box-sizing: border-box;\n}\n\ndiv.inner-wrap-events-profile{\n  margin: 0;\n  width: 100%;\n}\n\ndiv.utility-access {\n  box-sizing: border-box;\n  margin: 5% 0 5% 0;\n  width: 100%;\n}\n\ndiv.utility-access button.new-event {\n  border: solid 0px rgba(255,255,255,1);\n  border-radius: 2px;\n  padding: 1.5%;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.1);\n  color: rgba(255,255,255,1);\n  background-color: rgba(41, 128, 185,0.9);\n  margin: 0 10px 0 10px;\n  letter-spacing: 1px;\n}\n\ndiv.utility-access h3 {\n  margin: 30px 0;\n}\n\ndiv.events-profile-display {\n  margin: 0;\n}\n\ndiv.type-tabs {\n  border-bottom: solid 1px rgba(0,0,0,0.2);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  width: 100%;\n}\n\ndiv.type-tabs a {\n  font-weight: 500;\n  color: rgba(41, 128, 255,1);\n  box-sizing: border-box;\n  margin: 0;\n  padding: 10px 15px 10px 15px;\n  font-size: 15px;\n}\n\ndiv.type-tabs a.isActive {\n  color: rgba(0,0,0,0.8);\n  border-bottom: solid 4px rgba(0,0,0,0.8);\n}\n\ndiv.type-tabs a.isActive:hover {\n  border-bottom: solid 4px rgba(0,0,0,0.8);\n}\n\ndiv.type-tabs a:hover {\n  cursor: pointer;\n  border-bottom: solid 4px rgba(41, 128, 255,1);\n}\n\ndiv.inner-search {\n  padding: 20px 10px 20px 10px;\n  position: relative;\n  letter-spacing: 0.5px;\n  font-family: 'Roboto';\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  height: 100%;\n}\n\ndiv.inner-search input {\n  font-style: italic;\n  padding-left: 5px;\n  width: 40%;\n}\n\ndiv.inner-search select {\n  position: absolute;\n  right: 0;\n  height: 26px;\n}\n\ndiv.events, div.events div.col-md-12 {\n  padding: 0;\n  margin: 10px 0;\n}\n\ndiv.events-list {\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  margin: 0;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  padding: 0;\n}\n\ndiv.events-list div.event-item {\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.2);\n  border: solid 0px rgba(255,255,255,1);\n  border-radius: 2px;\n  box-sizing: border-box;\n  background-color: rgba(255,255,255,1);\n  height: 230px;\n  width: 29.33%;\n  margin: 30px 2%;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  background-color: green;\n}\n\ndiv.events-list div.event-item div {\n  text-align: center;\n  font-size: 16px;\n  margin-top: 20%;\n  color: white;\n}\n\ndiv.events-list div.event-item:hover {\n  cursor: pointer;\n}\n\ndiv.events-list div.message {\n  font-size: 18px;\n  letter-spacing: 1px;\n}\n\ndiv.selected-event {\n  margin: 10% 0 10% 0;\n  height: 200px;\n}\n\ndiv.show-event {\n  box-sizing: border-box;\n  margin: 5% 2% 5% 2% ;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.1);\n  border-radius: 2px;\n}\n\n/* styling for modal start here */\nmodal.friends modal-header {\n  text-align: center;\n}\n\nmodal.friends modal-header h4 {\n  letter-spacing: 1px;\n  font-weight: bold;\n}\n/* styling for modal ends here */\n\n\n@media (max-width: 575px) {\n  div.events-list div.event-item {\n    width: 100%;\n  }\n}\n\n@media (max-width: 768px) and (min-width: 576px) {\n  div.events-list div.event-item {\n    width: 46%;\n  }\n}\n\n@media (min-width: 992px) {\n  div.events-list div.event-item {\n    width: 21%;\n  }\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='events-profile'>\n\n  <div class='container inner-wrap-events-profile'>\n\n    <div class='utility-access'>\n      <button class='new-event title' routerLink='/new-event' >Create Event</button>\n      <button class='new-event title' (click)='friends.open()' >Friends</button>\n\n      <modal #friends class='friends'>\n        <modal-header> <h4> FRIENDS </h4> </modal-header>\n        <modal-content>\n          <ul>\n            <li *ngFor='let friend of user.friends'>\n              {{ friend }}\n            </li>\n          </ul>\n        </modal-content>\n        <modal-header></modal-header>\n      </modal>\n\n      <h3> Welcome, {{user.username}} </h3>\n    </div>\n\n    <div class='events-profile-display'>\n\n      <div class='type-tabs'>\n\n        <a class='active title' [ngClass]='{isActive: mode===\"active\"}' (click)='switchTab($event)'>\n          active events\n          <span class='count'>({{ filter(\"active\").length }})</span>\n        </a>\n        <a class='hosted title' [ngClass]='{isActive: mode===\"hosted\"}' (click)='switchTab($event)'>\n          hosted events\n          <span class='count'>({{user.hosted_events.length}})</span>\n        </a>\n        <a class='joined title' [ngClass]='{isActive: mode===\"joined\"}' (click)='switchTab($event)'>\n          joined events\n          <span class='count'>({{user.joined_events.length}})</span>\n        </a>\n        <a class='saved title' [ngClass]='{isActive: mode===\"saved\"}' (click)='switchTab($event)'>\n          saved events\n          <span class='count'>({{user.saved_events.length}})</span>\n        </a>\n\n      </div>\n\n      <div class='inner-search title'>\n        <input type='text' placeholder=\"Search active/joined/host/saved event\"/>\n        <select>\n          <option value='public'selected>Public</option>\n          <option value='private'>Private</option>\n        </select>\n      </div>\n\n      <div class='row events'>\n\n        <div class='col-md-12'>\n\n          <div class='events-list row'>\n\n            <div [routerLink]=\"'/events/id/'+ event._id\"\n                 class='event-item'\n                 *ngFor='let event of filter(mode)'>\n              <div>\n                {{ event.name }}\n              </div>\n            </div>\n\n            <div class='message' *ngIf='filter(mode).length==0'>\n              <div>\n                There is nothing with this filter. So sad man.\n              </div>\n            </div>\n\n          </div>\n\n        </div>\n\n        <!-- optional detail display when click on an event -->\n        <!-- <div class='col-md-4 selected-event'>\n          <div class='show-event'>\n            haha\n          </div>\n        </div> -->\n\n      </div>\n\n    </div>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(dashboardService) {
        this.dashboardService = dashboardService;
        // mode of displaying event
        this.mode = 'active' || 'hosted' || 'joined' || 'saved';
    }
    // get the information when render the view to display
    // through service defined earlier ( DashboardService )
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.dashboardService.infoChanged.subscribe(function (info) {
            _this.user = info;
            console.log(info);
        });
        // get initial value of user's info ( can be updated with changes later )
        this.user = this.dashboardService.getUserInfo();
        this.dashboardService.requestDashboardInfo();
    };
    // function to switch the tab and display different set of events
    DashboardComponent.prototype.switchTab = function (event) {
        // identify which tab was clicked on
        var current_class = event.target.classList[0];
        // change the mode according to the tab get clicked with switch case
        switch (current_class) {
            case 'hosted':
                this.mode = 'hosted';
                break;
            case 'joined':
                this.mode = 'joined';
                break;
            case 'saved':
                this.mode = 'saved';
                break;
            default:
                this.mode = 'active';
                break;
        }
    };
    // function to filter the events by mode
    DashboardComponent.prototype.filter = function (mode) {
        switch (mode) {
            case 'hosted':
                return this.user.hosted_events;
            case 'joined':
                return this.user.joined_events;
            case 'saved':
                return this.user.saved_events;
            default:
                // combine all events and then filter all events that haven't started yet
                var all = this.user.hosted_events.concat(this.user.joined_events, this.user.saved_events);
                return all.filter(function (event) {
                    var start = new Date(event.start_time);
                    return start.getTime() > Date.now();
                });
        }
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = (function () {
    function DashboardService(dataService) {
        this.dataService = dataService;
        // where you store the information about the current logged in user
        this.user = {
            username: '',
            friends: [],
            hosted_events: [],
            joined_events: [],
            saved_events: [],
        };
        // this variable is to subscribe to (for any change made to it) ,
        // so we can update the view later on syncronously
        this.infoChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    // call the request to the server and get the information
    // ( ex: user's hosted events, saved events, ... )
    DashboardService.prototype.requestDashboardInfo = function () {
        var _this = this;
        this.dataService.getDashboardInfo().subscribe(function (result) {
            _this.user = result;
            // notify that there are changes happened to our old user's information
            // and get updated with the new info
            // Object.assign is to return an object exactly the same with our user's info object
            _this.infoChanged.next(Object.assign({}, _this.user));
        });
    };
    // return a copy of our current user's info object
    DashboardService.prototype.getUserInfo = function () {
        return Object.assign({}, this.user);
    };
    return DashboardService;
}());
DashboardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], DashboardService);

var _a;
//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.banner-image {\n  font-family: 'Roboto';\n  color: rgba(0,0,0,0.8);\n  font-size: 3em;\n\tfont-weight: 300;\n\tletter-spacing: 0.1em;\n\tdisplay: table-cell;\n  text-align: center;\n  vertical-align: middle;\n  width: 100vw;\n  height: 300px;\n  padding-left: 7vw;\n  padding-right: 7vw;\n  position: relative;\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\n  background-color: rgba(41, 120, 180,0.7);\n}\n\n.banner-image div.top-shadow {\n  position: absolute;\n  top: 0;\n  left: 0 ;\n  right: 0;\n  width: 100%;\n  height: 100px;\n  box-shadow: inset 0 18px 20px -3px rgba(0,0,0,0.1);\n}\n\ndiv.bottom-shadow {\n  position: absolute;\n  bottom: 0;\n  left: 0 ;\n  right: 0;\n  width: 100%;\n  height: 100px;\n  box-shadow: inset 0px -18px 20px -3px rgba(0,0,0,0.1);\n}\n\nsection div.event-detail {\n  padding: 7%;\n  font-size: 16px;\n}\n\ndiv.event-detail div.description, div.info {\n\n}\n\nsection div.event-detail div.status-button {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\ndiv.status-button button {\n  border-radius: 2px;\n  border: solid 0px rgba(255,255,255,1);\n  padding: 8px 10px;\n  text-transform: uppercase;\n  font-size: 12px;\n  margin: 20px 5px;\n  letter-spacing: 0.5px;\n  color: rgb(70,70,70);\n}\n\ndiv.detail {\n  margin: 20px 0;\n  padding: 0;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n}\n\ndiv.description h4 {\n  margin: 20px 5px;\n}\n\ndiv.description p {\n  background-color: #f2f2f2;\n  padding: 10px;\n}\n\ndiv.list-tag {\n  margin: 20px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\ndiv.list-tag span#event-category, button {\n  margin: 15px 0;\n}\n\ndiv.list-tag button {\n  border-radius: 2px;\n  border: solid 0px rgba(255,255,255,1);\n  padding: 8px 10px;\n  background-color: rgba(41, 128, 185,0.8);\n  text-transform: uppercase;\n  color: white;\n  letter-spacing: 1px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.1);\n  font-size: 12px;\n  width: 130px;\n  height: 30px;\n}\n\ndiv.detail div.info {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n\ndiv.detail span.wrap-span {\n  margin: 20px 5px;\n  font-weight: bold;\n}\n\ndiv.detail span.event-status {\n  padding: 10px;\n  border-radius: 2px;\n  margin: 0 5px;\n}\n\ndiv.detail div.info input {\n  width: 150px;\n  padding-left: 5px;\n  outline: 0;\n  padding: 12px;\n  border: 0;\n  background: #f2f2f2;\n  margin: 5px 0;\n  font-size: 14px;\n  box-sizing: border-box;\n  letter-spacing: 1px;\n}\n\n/* styling for action here */\n\ndiv.status-button button.active {\n  color: white;\n  background-color: rgb(41, 168, 31);\n}\n\nmodal.list modal-header {\n  text-align: center;\n}\n\nspan#upcoming {\n  background: yellow;\n}\n\nspan#opening {\n  background: rgb(41, 168, 31);\n  color: white;\n}\n\nspan#closed {\n  background-color: red;\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='event-detail-container' *ngIf='event!=={}' >\n\n  <div class='banner-image'>\n    <!-- display event's image here. not supported image upload/display yet -->\n    <div class='top-shadow'></div>\n    {{ event.name }}\n    <div class='bottom-shadow'></div>\n  </div>\n\n  <div class='event-detail'>\n\n    <div class='status-button'>\n      <button [ngClass]='{ active: event.host===authService.decodeToken().username }'\n              disabled='true'>\n        <span *ngIf='event.host===authService.decodeToken().username'\n              class='glyphicon glyphicon-ok'></span> host\n      </button>\n      <button [ngClass]='{ active: didActionEvent(\"joined_events\") }'\n              type='button' (click)='toggleJoin()'>\n        <span *ngIf='didActionEvent(\"joined_events\")' class='glyphicon glyphicon-ok'></span> join\n      </button>\n      <button [ngClass]='{ active: didActionEvent(\"saved_events\") }' \n              type='button' (click)='toggleSave()'>\n        <span *ngIf='didActionEvent(\"saved_events\")' class='glyphicon glyphicon-ok'></span> save\n      </button>\n    </div>\n\n    <div class='detail row'>\n\n      <div class='description col-md-9'>\n        <h4>Description</h4>\n        <p>\n          {{ event.description }}\n        </p>\n\n        <div class='list-tag'>\n\n          <button id='participants' type='button'\n                  (click)='participants.open()' >\n            Participants <span class='glyphicon glyphicon-list'></span>\n          </button>\n\n          <modal #participants class='list'>\n            <modal-header> <h5>PARTICIPANTs</h5> </modal-header>\n            <modal-content>\n              <ul>\n                <li *ngFor='let participant of event.participants'>\n                  {{ participant.user }}\n                </li>\n              </ul>\n            </modal-content>\n            <modal-footer></modal-footer>\n          </modal>\n\n          <span id='event-category'>\n            <strong>Category: </strong> {{ event.category }}\n          </span>\n        </div>\n\n      </div>\n\n      <div class='info col-md-3'>\n\n        <span class='wrap-span'>\n          Status  <span [id]='getStatus()' class='event-status'> {{ getStatus() }} </span>\n        </span>\n\n        <label for='start'> Event starts </label>\n        <input name='start' type='text' disabled\n               [value]='event.start_time' />\n\n        <label for='end'> Event ends </label>\n        <input name='end' type='text' disabled\n               [value]='event.end_time' />\n\n      </div>\n\n    </div>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__event_detail_service__ = __webpack_require__("../../../../../src/app/event-detail/event-detail.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EventDetailComponent = (function () {
    function EventDetailComponent(router, route, eventService, authService) {
        this.router = router;
        this.route = route;
        this.eventService = eventService;
        this.authService = authService;
    }
    EventDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the id from navigated route
        var eventId = this.route.snapshot.params.id;
        this.eventService.requestEventById(eventId);
        // initialize local event object
        this.event = this.eventService.getEvent();
        // subscribe to changes made to local version of event in event-service
        this.subscription = this.eventService.eventChanged.subscribe(function (event) {
            _this.event = Object.assign({}, event, {
                start_time: event.start_time.substring(0, 16).replace('T', ' '),
                end_time: event.end_time.substring(0, 16).replace('T', ' ')
            });
        });
    };
    // function to find if the signed in user joined/saved/hosted the event or not
    EventDetailComponent.prototype.didActionEvent = function (list) {
        var decodedToken = this.authService.decodeToken();
        if (decodedToken[list] === undefined) {
            return false;
        }
        else {
            return decodedToken[list].indexOf(this.event._id) > -1;
        }
    };
    // function to find current status of the event (opening/upcoming/closed...)
    EventDetailComponent.prototype.getStatus = function () {
        var start = new Date(this.event.start_time).getTime();
        var end = new Date(this.event.end_time).getTime();
        if (start > Date.now()) {
            return 'upcoming';
        }
        else if (start <= Date.now() && Date.now() < end) {
            return 'opening';
        }
        else {
            return 'closed';
        }
    };
    // function to let user join/quit an event
    EventDetailComponent.prototype.toggleJoin = function () {
        // condition to verify if user are trying to join or quit the event
        if (this.didActionEvent('joined_events')) {
            this.eventService.doJoinEvent('pull');
        }
        else {
            this.eventService.doJoinEvent('push');
        }
    };
    // function to let user save/unsave an event
    EventDetailComponent.prototype.toggleSave = function () {
        // condition to verify if user are trying to save or unsave the event
        if (this.didActionEvent('saved_events')) {
            this.eventService.doSaveEvent('pull');
        }
        else {
            this.eventService.doSaveEvent('push');
        }
    };
    return EventDetailComponent;
}());
EventDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-event-detail',
        template: __webpack_require__("../../../../../src/app/event-detail/event-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/event-detail/event-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__event_detail_service__["a" /* EventDetailService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__event_detail_service__["a" /* EventDetailService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _d || Object])
], EventDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=event-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/event-detail/event-detail.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventDetailService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_jwt__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EventDetailService = (function () {
    function EventDetailService(http, authService) {
        this.http = http;
        this.authService = authService;
        this.hostname = '';
        this.eventChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.jwt = new __WEBPACK_IMPORTED_MODULE_4_angular2_jwt__["JwtHelper"]();
        this.event = {
            id: '',
            category: '',
            end_time: '',
            start_time: '',
            host: '',
            name: '',
            participants: [],
            status: ''
        };
    }
    EventDetailService.prototype.requestEventById = function (id) {
        var _this = this;
        var request = this.http.get(this.hostname + 'events/byid/' + id);
        // make the request and waiting for response
        request.subscribe(function (result) {
            // set the found event to our local storage
            _this.event = result;
            // dispatch change to other sources of subscription
            _this.eventChanged.next(Object.assign({}, _this.event));
        }, function (errorResponse) {
            // display error message
            console.log(errorResponse);
        });
    };
    // get local event object
    EventDetailService.prototype.getEvent = function () {
        return Object.assign({}, this.event);
    };
    EventDetailService.prototype.doJoinEvent = function (action) {
        var _this = this;
        if (this.authService.isAuthenticated) {
            var decodedToken = this.jwt.decodeToken(this.authService.getToken());
            // modify our local event object
            this.event = Object.assign({}, this.event, {
                participants: this.event.participants.concat([{
                        id: decodedToken.id,
                        user: decodedToken.username
                    }])
            });
            // prepare body object for http request
            var bodyObject = {
                id: this.event._id,
                action: action
            };
            // request the server to update the document of this event object
            this.http.put(this.hostname + 'events/edit/join', bodyObject)
                .subscribe(function (newToken) {
                _this.authService.saveToken(newToken);
                _this.eventChanged.next(Object.assign({}, _this.event));
            }, function (errorResponse) { return console.log(errorResponse); });
        }
        else {
            alert('please sign in to join this event');
        }
    };
    EventDetailService.prototype.doSaveEvent = function (action) {
        var _this = this;
        if (this.authService.isAuthenticated) {
            var decodedToken = this.jwt.decodeToken(this.authService.getToken());
            // prepare body bject
            var bodyObject = {
                id: this.event._id,
                action: action
            };
            // request the server to update the document of this event object
            this.http.put(this.hostname + 'events/edit/save', bodyObject)
                .subscribe(function (newToken) {
                _this.authService.saveToken(newToken);
                _this.eventChanged.next(Object.assign({}, _this.event));
            }, function (errorResponse) { return console.log(errorResponse); });
        }
        else {
            alert('please sign in to save this event');
        }
    };
    return EventDetailService;
}());
EventDetailService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], EventDetailService);

var _a, _b;
//# sourceMappingURL=event-detail.service.js.map

/***/ }),

/***/ "../../../../../src/app/events-display/events-container/events-container.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*override bootstrap's default styling for column */\n\ndiv.items-row div.col-sm-3 {\n  padding: 0;\n}\n\ndiv.filters-group {\n  padding: 0 15%;\n  margin: 10px 0 40px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\ndiv.filters-group .filter {\n  margin: 7px 7px;\n  letter-spacing: 0.5px;\n}\n\ndiv.filters-group button {\n  border-radius: 2px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.1);\n  border: solid 0px rgba(255,255,255,1);\n  padding: 8px 16px;\n  background-color: rgba(41, 128, 185, 0.8);\n  text-transform: uppercase;\n  font-size: 12px;\n}\n\ndiv.filters-group input#hashtag {\n  font-style: italic;\n  padding-left: 5px;\n}\n\ndiv.items-container {\n  width: inherit;\n}\n\ndiv.items-row {\n  margin: 0;\n}\n\ndiv#events-list div.items-row div div.event-item {\n  background-color: pink;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.1);\n  border: solid 0px rgba(255,255,255,1);\n  border-radius: 2px;\n  box-sizing: border-box;\n  height: 150px;\n  margin: 7px;\n}\n\np#search-failed {\n  margin: 50px;\n  text-align: center;\n  font-size: 22px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events-display/events-container/events-container.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class='filters-group row' id='filters'>\n  <button type='button' (click)='switchSortMode(\"all\")'\n          class='btn btn-primary filter' id='all'>all</button>\n  <button type='button' (click)='switchSortMode(\"bytime\")'\n          class='btn btn-primary filter' id='by-time'>by time</button>\n  <input class='filter' type='text' id='hashtag' placeholder='filter by hashtags...'  />\n</div>\n\n<div class='container items-container' id='events-list'>\n\n  <div class='row items-row' *ngIf='events.length > 0; else nothing'>\n    <div class='col-sm-3' *ngFor='let event of sort()'>\n      <div class='event-item' [routerLink]=\"'/events/id/'+ event._id\"> {{event.name}} </div>\n    </div>\n  </div>\n\n  <ng-template #nothing>\n    <p id='search-failed'>\n      <strong>Congratulation ! You found nothing (y) </strong>\n    </p>\n  </ng-template>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events-display/events-container/events-container.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_service__ = __webpack_require__("../../../../../src/app/events-display/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsContainerComponent = (function () {
    function EventsContainerComponent(eventService, route, router) {
        this.eventService = eventService;
        this.route = route;
        this.router = router;
        this.events = [];
        this.sortMode = 'all' || 'bytime';
    }
    EventsContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get the subscription and wait for changes made to our list of events
        this.subscription = this.eventService.eventsChanged.subscribe(function (events) {
            _this.events = events;
        });
        // get initial value for events list
        this.events = this.eventService.getEvents();
        console.log(this.route);
        console.log(this.router);
        var keyword = this.route.snapshot.queryParams.keyword;
        console.log(keyword);
        this.eventService.requestEvent(keyword);
    };
    // function to sort the list of events before displaying
    EventsContainerComponent.prototype.sort = function () {
        switch (this.sortMode) {
            case 'bytime':
                // return a new array of sort elements by start_time
                return this.events.slice().sort(function (event1, event2) {
                    var event1_startTime = new Date(event1.start_time).getTime();
                    var event2_startTime = new Date(event2.start_time).getTime();
                    if (event1_startTime < event2_startTime) {
                        return -1;
                    }
                    else if (event1_startTime > event2_startTime) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                });
            default:
                return this.events;
        }
    };
    // function to change sort mode, switch between 2 mode
    EventsContainerComponent.prototype.switchSortMode = function (mode) {
        this.sortMode = mode;
    };
    return EventsContainerComponent;
}());
EventsContainerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events-container',
        template: __webpack_require__("../../../../../src/app/events-display/events-container/events-container.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events-display/events-container/events-container.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__events_service__["a" /* EventsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _c || Object])
], EventsContainerComponent);

var _a, _b, _c;
//# sourceMappingURL=events-container.component.js.map

/***/ }),

/***/ "../../../../../src/app/events-display/events-display.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.events-display {\n  padding: 4% 8%;\n  font-family: 'Roboto';\n  letter-spacing: 0.5px;\n  color: rgba(0,0,0,0.8);\n}\n\nsection div.container {\n  width: inherit;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events-display/events-display.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='events-display'>\n\n  <div class='container'>\n\n    <app-headline></app-headline>\n    <app-events-container></app-events-container>\n    <app-pagination></app-pagination>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/events-display/events-display.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsDisplayComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsDisplayComponent = (function () {
    function EventsDisplayComponent() {
    }
    EventsDisplayComponent.prototype.ngOnInit = function () {
    };
    return EventsDisplayComponent;
}());
EventsDisplayComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-events-display',
        template: __webpack_require__("../../../../../src/app/events-display/events-display.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events-display/events-display.component.css")]
    }),
    __metadata("design:paramtypes", [])
], EventsDisplayComponent);

//# sourceMappingURL=events-display.component.js.map

/***/ }),

/***/ "../../../../../src/app/events-display/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventsService = (function () {
    function EventsService(dataService) {
        this.dataService = dataService;
        this.events = [];
        this.eventsChanged = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    EventsService.prototype.getEvents = function () {
        return this.events.slice();
    };
    EventsService.prototype.requestEvent = function (query) {
        var _this = this;
        this.dataService.search(query).subscribe(function (result) {
            _this.events = result;
            _this.eventsChanged.next(_this.events.slice());
        });
    };
    return EventsService;
}());
EventsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object])
], EventsService);

var _a;
//# sourceMappingURL=events.service.js.map

/***/ }),

/***/ "../../../../../src/app/events-display/headline/headline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.headline {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 10px 0 30px 0;\n}\n\ndiv.headline h3 {\n  padding: 10px 20px ;\n  font-size: 15px;\n  font-weight: lighter;\n  font-style: italic;\n  border: solid 0px rgba(255,255,255,1);\n  border-radius: 2px;\n  margin: 20px 40px 20px 15px;\n  background: linear-gradient(to right, rgba(41,128,185,0.7), rgba(255,255,255,0) 70%);\n  width: 60%;\n}\n\ndiv.headline button {\n  border-radius: 2px;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1), 0 4px 4px 0 rgba(0, 0, 0, 0.1);\n  border: solid 0px rgba(255,255,255,1);\n  padding: 8px 16px;\n  background-color: rgba(41, 128, 185,0.8);\n  text-transform: uppercase;\n  font-size: 12px;\n  margin: 20px 10px;\n}\n\ndiv.headline select#categories {\n  margin: 20px 10px;\n  height: inherit;\n  padding-left: 3px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events-display/headline/headline.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='headline'>\n  <h3>\n    search result of  <strong> {{ getKeyword() }} </strong>\n  </h3>\n  <button type='button' class='btn btn-primary'\n          id='hot-events'\n          routerLink='events/hot'>hot events</button>\n  <select class='custom-select filter' id='categories'>\n    <option selected>categories...</option>\n    <option >cyberpunk</option>\n    <option>sci-fi</option>\n    <option>robot revolution</option>\n  </select>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events-display/headline/headline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeadlineComponent = (function () {
    function HeadlineComponent(route) {
        this.route = route;
    }
    HeadlineComponent.prototype.ngOnInit = function () {
    };
    // return the 'keyword' parameter associated with the route
    HeadlineComponent.prototype.getKeyword = function () {
        return this.route.snapshot.queryParams.keyword;
    };
    return HeadlineComponent;
}());
HeadlineComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-headline',
        template: __webpack_require__("../../../../../src/app/events-display/headline/headline.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events-display/headline/headline.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]) === "function" && _a || Object])
], HeadlineComponent);

var _a;
//# sourceMappingURL=headline.component.js.map

/***/ }),

/***/ "../../../../../src/app/events-display/pagination/pagination.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.listing-pagination {\n  width: 100%;\n  padding: 30px 0 10px 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.listing-pagination nav ul li a {\n  color: rgba(0,0,0,0.8);\n  font-weight: bold;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/events-display/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='listing-pagination' id='content-pagination'>\n\n  <nav aria-label=\"page navigation\">\n    <ul class=\"pagination\">\n      <li class=\"page-item\">\n        <a class=\"page-link\" aria-label=\"Previous\">\n          <span aria-hidden=\"true\">&laquo;</span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </li>\n      <li class=\"page-item\"><a class=\"page-link\">1</a></li>\n      <li class=\"page-item\"><a class=\"page-link\">2</a></li>\n      <li class=\"page-item\"><a class=\"page-link\">3</a></li>\n      <li class=\"page-item\">\n        <a class=\"page-link\" aria-label=\"Next\">\n          <span aria-hidden=\"true\">&raquo;</span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </li>\n    </ul>\n  </nav>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/events-display/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PaginationComponent = (function () {
    function PaginationComponent() {
    }
    PaginationComponent.prototype.ngOnInit = function () {
    };
    return PaginationComponent;
}());
PaginationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-pagination',
        template: __webpack_require__("../../../../../src/app/events-display/pagination/pagination.component.html"),
        styles: [__webpack_require__("../../../../../src/app/events-display/pagination/pagination.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PaginationComponent);

//# sourceMappingURL=pagination.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section.footer {\r\n  box-sizing: border-box;\r\n  background: linear-gradient(rgba(241, 196, 15,0.8), rgba(241, 196, 15,0.9));\r\n  width: 100vw;\r\n  height: 30vw;\r\n  font-family: 'Roboto';\r\n  color: rgba(0,0,0,0.5);\r\n  font-size: 4vw;\r\n\tfont-weight: 400;\r\n\tletter-spacing: 0.1em;\r\n\tdisplay: table-cell;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  padding-left: 7vw;\r\n  padding-right: 7vw;\r\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.3);\r\n  margin-top: 15vw !important;\r\n  position: relative;\r\n}\r\n\r\nsection.footer div.top-shadow {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0 ;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100px;\r\n  box-shadow: inset 0 18px 20px -3px rgba(0,0,0,0.1);\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='footer'>\n  <div class='top-shadow'></div>\n  <footer>\n    <p>\n      Send us feedback ! Coming soon !\n    </p>\n  </footer>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header-user/header-user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header-user/header-user.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='header'>\n  <nav class='navbar navbar-default'>\n    <div class='container-fluid navbar-more-show'>\n      <div class='mobile-header'>\n        <div class='navbar-header' routerLink='/'>\n          <!-- logo here -->\n        </div>\n        <app-search-bar></app-search-bar>\n      </div>\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#nav-collapse\" aria-expanded=\"false\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n      </button>\n      <div class='navbar-collapse collapse' id='nav-collapse'>\n        <ul class='nav navbar-nav'>\n          <li>\n            <a (click)='signOut()'>Sign out</a>\n          </li>\n          <li>\n            <a href=''><span class='glyphicon glyphicon-flash'></span></a>\n          </li>\n          <li>\n            <a href=''><span class='glyphicon glyphicon-envelope'></span></a>\n          </li>\n          <li>\n            <a routerLink='/dashboard' >Dashboard</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/header-user/header-user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderUserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderUserComponent = (function () {
    function HeaderUserComponent(authService) {
        this.authService = authService;
    }
    HeaderUserComponent.prototype.ngOnInit = function () {
    };
    // call the method in authentication service to log out
    HeaderUserComponent.prototype.signOut = function () {
        this.authService.signOut();
    };
    return HeaderUserComponent;
}());
HeaderUserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header-user',
        template: __webpack_require__("../../../../../src/app/header-user/header-user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header-user/header-user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderUserComponent);

var _a;
//# sourceMappingURL=header-user.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='header'>\n  <nav class='navbar navbar-default'>\n    <div class='container-fluid navbar-more-show'>\n      <div class='mobile-header'>\n        <div class='navbar-header' routerLink='/'>\n          <!-- logo here -->\n        </div>\n        <app-search-bar></app-search-bar>\n      </div>\n      <button type=\"button\" class=\"navbar-toggle collapsed\"\n              data-toggle=\"collapse\" data-target=\"#nav-collapse\"\n              aria-expanded=\"false\">\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n      </button>\n      <div class='navbar-collapse collapse' id='nav-collapse'>\n        <ul class='nav navbar-nav'>\n          <li>\n            <app-signup></app-signup>\n          </li>\n          <li>\n            <app-signin></app-signin>\n          </li>\n          <li>\n            <a type='button' id='new-event-button' routerLink='/new-event' >New Event</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </nav>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    // event handler for sign in
    HeaderComponent.prototype.signIn = function () {
        this.authService.signIn({});
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='banner'>\r\n  Join us and find your favorite events !\r\n  <div class='bottom-shadow'></div>\r\n</div>\r\n<br />\r\n<br />\r\n<br />\r\n<br />\r\n<br />\r\n<app-category-list></app-category-list>\r\n<br />\r\n<app-hot-events></app-hot-events>\r\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/hot-events/hot-events.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "section header span {\r\n  padding: 0 20px;\r\n  background-color: white;\r\n  box-sizing: border-box;\r\n}\r\n\r\nsection.hot-events .row {\r\n  box-sizing: border-box;\r\n  margin: 40px 8vw 100px;\r\n  font-family: 'Roboto';\r\n}\r\n\r\nsection .row .col-md-3 {\r\n  box-sizing: border-box;\r\n  padding: 0 8px 20px;\r\n  margin: 0;\r\n}\r\n\r\nsection .row .col-md-3 div {\r\n  background: linear-gradient(rgba(255, 76, 60, 0.8), rgba(231, 76, 60, 0.9));\r\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.2);\r\n  font-size: 14px;\r\n  height: 20vw;\r\n  text-align: center;\r\n  padding: 5vw;\r\n  text-transform: uppercase;\r\n  font-family: 'Roboto';\r\n  color: rgba(255,255,255,0.7);\r\n  border-radius: 2px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/hot-events/hot-events.component.html":
/***/ (function(module, exports) {

module.exports = "<section class='hot-events'>\n  <header>\n    <span>HOT EVENTS</span>\n  </header>\n  <br />\n  <br />\n  <br />\n  <div class='row'>\n    <div class='col-md-3'>\n      <div>\n        item\n      </div>\n    </div>\n    <div class='col-md-3'>\n      <div>\n        item\n      </div>\n    </div>\n    <div class='col-md-3'>\n      <div>\n        item\n      </div>\n    </div>\n    <div class='col-md-3'>\n      <div>\n        item\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/hot-events/hot-events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HotEventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HotEventsComponent = (function () {
    function HotEventsComponent() {
    }
    HotEventsComponent.prototype.ngOnInit = function () {
    };
    return HotEventsComponent;
}());
HotEventsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-hot-events',
        template: __webpack_require__("../../../../../src/app/hot-events/hot-events.component.html"),
        styles: [__webpack_require__("../../../../../src/app/hot-events/hot-events.component.css")]
    }),
    __metadata("design:paramtypes", [])
], HotEventsComponent);

//# sourceMappingURL=hot-events.component.js.map

/***/ }),

/***/ "../../../../../src/app/new-event/new-event.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\ndiv.new-event-form {\n  background-color: white;\n  width: inherit;\n  margin: 6% 15%;\n}\n\ndiv.new-event-form h2 {\n  font-family: 'Roboto';\n  letter-spacing: 2px;\n  font-weight: normal;\n  color: rgba(0,0,0,0.8);\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 40px;\n}\n\ndiv.new-event-form form#new-event-form {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  padding: 30px;\n\n}\n\ndiv.new-event-form form#new-event-form label {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\nform#new-event-form input, textarea, select {\n  outline: 0;\n  width: 100%;\n  padding: 12px;\n  border: 0;\n  background: #f2f2f2;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0px 0 15px;\n  font-size: 14px;\n  box-sizing: border-box;\n  letter-spacing: 1px;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n\n/* styling the submit button */\nbutton#create-event {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background-color: rgba(41, 128, 185, 0.9);\n  width: 100%;\n  border: 0;\n  color: #FFFFFF;\n  font-size: 13px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  letter-spacing: 1px;\n  position: relative;\n  margin: 30px 0 0 0;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  height: 50px;\n}\n\nspan.invalid {\n  text-align: center ;\n  font-family: 'Roboto';\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: none;\n  color: rgba(216, 60, 60, 0.9);\n}\n\ninput.ng-invalid.ng-touched {\n  border: solid 1px rgba(216, 60, 60, 0.9) !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/new-event/new-event.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='new-event-form'>\n\n  <h2>New Event</h2>\n\n  <form id='new-event-form' [formGroup]='form'\n        ngNativeValidate\n        (onSubmit)='onSubmit()' >\n\n    <input type='text' [required]='true' formControlName='eventName'\n           name='event-name' placeholder=\"event name\" />\n\n    <textarea rows='5' formControlName='description'\n              placeholder=\"description\" [required]='true'></textarea>\n\n    <select formControlName='category'>\n        <option [selected]='true' >select...</option>\n        <option>Cyberpunk</option>\n        <option>Machine Learning</option>\n        <option>Algorithm</option>\n        <option>Front-end</option>\n      </select>\n\n    <label for='start-time'></label>\n    <input type='text' name='hashtag' formControlName='startTime' [required]='true'\n           placeholder=\"start time\" onfocus=\"(this.type='datetime-local')\" />\n\n    <label for='end-time'></label>\n    <input type='text' name='hashtag' formControlName='endTime' [required]='true'\n           placeholder='end time' onfocus=\"(this.type='datetime-local')\" />\n\n    <span class='invalid' *ngIf='!authService.isAuthenticated() && form.touched'>\n          sign in to create your new event\n    </span>\n\n    <button  id='create-event' type='submit'\n            [disabled]='!form.valid || !authService.isAuthenticated()'\n            (click)='onSubmit()' >Create event</button>\n\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/new-event/new-event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__ = __webpack_require__("../../../../../src/app/services/data-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewEventComponent = (function () {
    function NewEventComponent(dataStorage, authService, router) {
        this.dataStorage = dataStorage;
        this.authService = authService;
        this.router = router;
    }
    NewEventComponent.prototype.ngOnInit = function () {
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'eventName': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'description': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'category': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'startTime': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'endTime': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
    };
    // function to handle submission
    // create desired object from form controls and pass to
    // asynchronous function in authentication service to make the request
    NewEventComponent.prototype.onSubmit = function () {
        var _this = this;
        var eventObject = Object.assign(this.form.value, {
            startTime: new Date(this.form.value.startTime),
            endTime: new Date(this.form.value.endTime),
        });
        this.dataStorage.submitEvent(eventObject).subscribe(
        // we expect response Object to contain new token and
        // new event's id
        function (responseObject) {
            // reset the token
            _this.authService.saveToken(responseObject.token);
            alert('You created event ' + _this.form.value.eventName);
            _this.router.navigate(['/events/id/' + responseObject.data]);
        }, function (errorResponse) {
            // deal with the error here
            console.log(errorResponse);
        });
    };
    return NewEventComponent;
}());
NewEventComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-new-event',
        template: __webpack_require__("../../../../../src/app/new-event/new-event.component.html"),
        styles: [__webpack_require__("../../../../../src/app/new-event/new-event.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_data_storage_service__["a" /* DataStorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object])
], NewEventComponent);

var _a, _b, _c;
//# sourceMappingURL=new-event.component.js.map

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "i.glyphicon:hover {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='search-bar'>\n\n  <!-- add handle submit -->\n\n  <form class='form-group' (ngSubmit)='search()'>\n    <div class=\"inner-addon left-addon\">\n      <i class=\"glyphicon glyphicon-search\" (click)='search()'></i>\n\n<!-- ngModel for 2 ways databinding, instance variable\n    query of the component will get update syncronously -->\n      <input type=\"text\"\n             name='search'\n             class=\"form-control\"\n             [(ngModel)]='query'\n             placeholder=\"Search...\" />\n    </div>\n  </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/search-bar/search-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__events_display_events_service__ = __webpack_require__("../../../../../src/app/events-display/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchBarComponent = (function () {
    function SearchBarComponent(router, eventService) {
        this.router = router;
        this.eventService = eventService;
        this.query = '';
    }
    SearchBarComponent.prototype.ngOnInit = function () {
    };
    // take the search input, query-ize it and prepare for request to server
    // ( redirect to result page )
    SearchBarComponent.prototype.search = function () {
        // process the keywords
        var query = this.query.replace(' ', '+');
        this.router.navigate(['events/search'], { queryParams: { keyword: query } });
        if (this.router.url.indexOf('/events/') > -1) {
            this.eventService.requestEvent(query);
        }
    };
    return SearchBarComponent;
}());
SearchBarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-bar',
        template: __webpack_require__("../../../../../src/app/search-bar/search-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/search-bar/search-bar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__events_display_events_service__["a" /* EventsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__events_display_events_service__["a" /* EventsService */]) === "function" && _b || Object])
], SearchBarComponent);

var _a, _b;
//# sourceMappingURL=search-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuardService = (function () {
    function AuthGuardService(authService) {
        this.authService = authService;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.authService.isAuthenticated();
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AuthGuardService);

var _a;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = (function () {
    function AuthInterceptor(injector) {
        this.injector = injector;
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var auth = this.injector.get(__WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* AuthService */]);
        var authHeader = 'bearer' + ' ' + auth.getToken();
        request = request.clone({
            setHeaders: {
                Authorization: authHeader
            }
        });
        console.log(request);
        return next.handle(request);
    };
    return AuthInterceptor;
}());
AuthInterceptor = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]) === "function" && _a || Object])
], AuthInterceptor);

var _a;
//# sourceMappingURL=auth.interceptor.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = (function () {
    // declare for using HttpClient (communicate with the server by HTTP protocols)
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.tokenKey = 'token';
        this.jwt = new __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["JwtHelper"]();
        this.hostname = '';
    }
    // signing in, passing to the function credentials - object containing
    // username and password for the request body
    AuthService.prototype.signIn = function (credentials) {
        var request = this.http.post(this.hostname + 'signin', credentials);
        // make the request and subscribe for response
        return request;
    };
    // check if the app is currently authenticated
    AuthService.prototype.isAuthenticated = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])() && this.getToken() !== null;
    };
    // signing up, pass to the function user info
    // username, password and email for the request body
    AuthService.prototype.signUp = function (credentials) {
        // make the request and subscribe for response
        var request = this.http.post(this.hostname + 'signup', credentials);
        return request;
    };
    // save token to localstorage, function to inject to form component to handle
    // token handlings
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem(this.tokenKey, token);
    };
    // signing out - delete the token in the localstorage
    AuthService.prototype.signOut = function () {
        localStorage.removeItem(this.tokenKey);
        console.log(this.router.url);
        this.router.navigate(['/']);
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem(this.tokenKey);
    };
    AuthService.prototype.decodeToken = function () {
        if (this.getToken() !== null) {
            var decodedToken = this.jwt.decodeToken(this.getToken());
            return decodedToken;
        }
        return {};
    };
    return AuthService;
}());
AuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["Router"]) === "function" && _b || Object])
], AuthService);

var _a, _b;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/data-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataStorageService = (function () {
    function DataStorageService(http) {
        this.http = http;
        this.hostname = '';
    }
    // function take in the path where user make the request and
    // make the appropriate request to the server to get the searched events
    DataStorageService.prototype.search = function (query) {
        var request = this.http.get(this.hostname + 'events/byname/' + query);
        return request;
    };
    DataStorageService.prototype.getDashboardInfo = function () {
        var request = this.http.get(this.hostname + 'dashboard');
        return request;
    };
    DataStorageService.prototype.submitEvent = function (bodyObject) {
        var request = this.http.post(this.hostname + 'events/new', bodyObject);
        return request;
    };
    return DataStorageService;
}());
DataStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]) === "function" && _a || Object])
], DataStorageService);

var _a;
//# sourceMappingURL=data-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UtilsService = (function () {
    function UtilsService() {
    }
    // check if the device is desktop
    UtilsService.prototype.largeSize = function () {
        // get the window size
        var size = window.innerWidth;
        // return true or false depend on the size of the window
        if (size <= 767) {
            return false;
        }
        else {
            return true;
        }
    };
    // check if the current pathname is /signup
    UtilsService.prototype.inSignUpLink = function () {
        // get the window location href
        var href = window.location.pathname;
        // return true or false depend on the size of the window
        if (href === '/signup') {
            return true;
        }
        else {
            return false;
        }
    };
    UtilsService.prototype.inSignInLink = function () {
        // get the window location href
        var href = window.location.pathname;
        // return true or false depend on the size of the window
        if (href === '/signin') {
            return true;
        }
        else {
            return false;
        }
    };
    return UtilsService;
}());
UtilsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], UtilsService);

//# sourceMappingURL=utils.service.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin-form/signin-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-family: 'Roboto';\n  letter-spacing: 2px;\n  font-weight: normal;\n  color: rgba(0,0,0,0.8);\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 40px;\n}\n\ndiv.form {\n  margin: 6% 15% 0 15%;\n}\n\n/*styling the form container*/\nform#signin-form {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n  padding: 30px;\n}\n\n /*styling the input field*/\nform#signin-form input {\n  outline: 0;\n  width: 100%;\n  padding: 12px;\n  border: 0;\n  background: #f2f2f2;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0px 0 15px;\n  font-size: 14px;\n  box-sizing: border-box;\n  letter-spacing: 1px;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n/* styling the submit button */\nbutton#signing-in {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background-color: rgba(41, 128, 185, 0.9);\n  width: 100%;\n  border: 0;\n  color: #FFFFFF;\n  font-size: 13px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  letter-spacing: 1px;\n  position: relative;\n  margin: 30px 0 0 0;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  height: 50px;\n}\n\n/* styling the error message */\nspan#message {\n  text-align: center ;\n  font-family: 'Roboto';\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: none;\n  color: rgba(216, 60, 60, 0.9);\n}\n\ninput.ng-invalid.ng-touched {\n  border: solid 1px rgba(216, 60, 60, 0.9) !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin-form/signin-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='form'>\n  <h1 *ngIf='inSignInLink()'>Sign In</h1>\n  <form [formGroup]='signinForm'\n        class=\"signin-form\"\n        id='signin-form'>\n    <input formControlName='username' type=\"text\" placeholder=\"username\" />\n    <input formControlName='password' type=\"password\" placeholder=\"password\" />\n    <span id='message' class='false'\n      *ngIf=' failed && signinForm.valid'>\n      {{errorMessage}}\n    </span>\n    <span id='message' class='invalid' *ngIf='signinForm.touched && !signinForm.valid'>\n      the info is not valid\n    </span>\n    <button type='submit' id='signing-in'\n            (click)='onSubmit()'\n            [disabled]='!signinForm.valid' > Sign In </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin-form/signin-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SigninFormComponent = (function () {
    function SigninFormComponent(utils, authService, router) {
        this.utils = utils;
        this.authService = authService;
        this.router = router;
        this.errorMessage = '';
    }
    SigninFormComponent.prototype.ngOnInit = function () {
        this.signinForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        this.failed = false;
    };
    // submit the signup form
    SigninFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var request = this.authService.signIn({
            username: this.signinForm.controls.username.value,
            password: this.signinForm.controls.password.value
        });
        // handle the case when the request is successful - a token is returned
        //    and the when the request has error - save error message to display to UI
        request.subscribe(function (token) {
            _this.authService.saveToken(token);
            _this.router.navigate(['/dashboard']);
        }, function (errorResponse) {
            _this.failed = true;
            _this.errorMessage = errorResponse.error.message;
        });
    };
    SigninFormComponent.prototype.inSignInLink = function () {
        return this.utils.inSignInLink();
    };
    return SigninFormComponent;
}());
SigninFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin-form',
        template: __webpack_require__("../../../../../src/app/signin/signin-form/signin-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signin/signin-form/signin-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["Router"]) === "function" && _c || Object])
], SigninFormComponent);

var _a, _b, _c;
//# sourceMappingURL=signin-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.modal-content {\n  width: 30vw;\n  top: 100px !important;\n  border-radius: 2px !important;\n}\n\n/* styling the header when in modal mode */\n#signin-modal-header {\n  font-size: 20px !important;\n  letter-spacing: 3px;\n  line-height: 20px;\n  color: rgba(50,50,50,1);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='largeSize()'>\n  <a *ngIf='!inSignInLink()' (click)=\"signIn.open()\">Sign In</a>\n  <a *ngIf='inSignInLink()' routerLink='signin' >Sign In</a>\n  <!-- to not use modal dialog when user on mobile viewport -->\n  <modal #signIn\n        [hideCloseButton]=\"true\"\n        [closeOnEscape]='false  '>\n\n    <modal-header id='signin-modal-header'>\n      Sign in\n    </modal-header>\n\n    <modal-content>\n      <app-signin-form></app-signin-form>\n    </modal-content>\n\n    <modal-footer>\n    </modal-footer>\n\n  </modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signin/signin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SigninComponent = (function () {
    function SigninComponent(utils) {
        this.utils = utils;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    // check the viewport size to upadte the layout
    SigninComponent.prototype.largeSize = function () {
        return this.utils.largeSize();
    };
    SigninComponent.prototype.inSignInLink = function () {
        return this.utils.inSignInLink();
    };
    return SigninComponent;
}());
SigninComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signin',
        template: __webpack_require__("../../../../../src/app/signin/signin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signin/signin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], SigninComponent);

var _a;
//# sourceMappingURL=signin.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup-form/signup-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 {\n  font-family: 'Roboto';\n  letter-spacing: 2px;\n  font-weight: normal;\n  color: rgba(0,0,0,0.8);\n  text-transform: uppercase;\n  text-align: center;\n  line-height: 40px;\n}\n\ndiv.form {\n  margin: 6% 15% 0 15%;\n}\n\n/*styling the form container*/\nform#signup-form {\n  display: -webkit-box !important;\n  display: -ms-flexbox !important;\n  display: flex !important;\n  -webkit-box-orient: vertical !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: column !important;\n          flex-direction: column !important;\n  padding: 30px;\n}\n\n /*styling the input field*/\nform#signup-form input {\n  outline: 0;\n  width: 100%;\n  padding: 12px;\n  border: 0;\n  background: #f2f2f2;\n  font-family: \"Roboto\", sans-serif;\n  margin: 0px 0 15px;\n  font-size: 14px;\n  box-sizing: border-box;\n  letter-spacing: 1px;\n  font-weight: lighter;\n  font-style: italic;\n}\n\n/* styling the submit button */\nbutton#create-account {\n  font-family: \"Roboto\", sans-serif;\n  text-transform: uppercase;\n  outline: 0;\n  background-color: rgba(41, 128, 185, 0.9);\n  width: 100%;\n  border: 0;\n  color: #FFFFFF;\n  font-size: 13px;\n  transition: all 0.3 ease;\n  cursor: pointer;\n  letter-spacing: 1px;\n  position: relative;\n  margin: 30px 0 0 0;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.2);\n  height: 50px;\n}\n\n/* styling the error message */\nspan#message {\n  text-align: center ;\n  font-family: 'Roboto';\n  font-size: 14px;\n  letter-spacing: 1px;\n  text-transform: none;\n  color: rgba(216, 60, 60, 0.9);\n}\n\nspan#message.success {\n  color: rgba(38, 175, 48,0.9);\n}\n\ninput.ng-invalid.ng-touched {\n  border: solid 1px rgba(216, 60, 60, 0.9) !important;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup-form/signup-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class='form'>\n  <h1 *ngIf='inSignUpLink()'>Sign Up</h1>\n  <form [formGroup]='signupForm'\n        class=\"register-form\"\n        id='signup-form'>\n    <input formControlName='username' type=\"text\" placeholder=\"username\" />\n    <input formControlName='password' type=\"password\" placeholder=\"password\" />\n    <input formControlName='email' type=\"text\" placeholder=\"email address\" />\n    <span id='message' class='false'\n      *ngIf=' errorMessage!==\"\" && state==\"failed\" && signupForm.valid'>\n      {{errorMessage}}\n    </span>\n    <span id='message' class='invalid' *ngIf='signupForm.touched && !signupForm.valid'>\n      the info is not valid\n    </span>\n    <span id='message' class='success'\n      *ngIf='responseMessage!==\"\" && state==\"success\" && signupForm.valid'>\n      {{responseMessage}}\n    </span>\n    <button type='submit' id='create-account'\n            (click)='onSubmit()'\n            [disabled]='!signupForm.valid' > Create account </button>\n  </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup-form/signup-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupFormComponent = (function () {
    function SignupFormComponent(utils, authService) {
        this.utils = utils;
        this.authService = authService;
        this.state = '' || 'success' || 'failed';
        this.responseMessage = '';
        this.errorMessage = '';
    }
    SignupFormComponent.prototype.ngOnInit = function () {
        this.signupForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'username': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'password': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].email]),
        });
    };
    // submit the signup form
    SignupFormComponent.prototype.onSubmit = function () {
        var _this = this;
        var request = this.authService.signUp({
            username: this.signupForm.controls.username.value,
            password: this.signupForm.controls.password.value,
            email: this.signupForm.controls.email.value,
        });
        // control the flow error/success with the response object here
        // return error if the request is rejected
        // return the success messageage ( in body ) if the account is created
        request.subscribe(function (response) {
            _this.state = 'success';
            _this.responseMessage = response.message;
        }, function (errorResponse) {
            _this.state = 'failed';
            _this.errorMessage = errorResponse.error.message;
        });
    };
    SignupFormComponent.prototype.inSignUpLink = function () {
        return this.utils.inSignUpLink();
    };
    return SignupFormComponent;
}());
SignupFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup-form',
        template: __webpack_require__("../../../../../src/app/signup/signup-form/signup-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup-form/signup-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_utils_service__["a" /* UtilsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]) === "function" && _b || Object])
], SignupFormComponent);

var _a, _b;
//# sourceMappingURL=signup-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.modal-content {\n  width: 30vw;\n  top: 100px !important;\n  border-radius: 2px !important;\n}\n\n/* styling the header when in modal mode */\n#signup-modal-header {\n  font-size: 20px !important;\n  letter-spacing: 3px;\n  line-height: 20px;\n  color: rgba(50,50,50,1);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf='largeSize()'>\n  <a *ngIf='!inSignUpLink()' (click)=\"signUp.open()\">Sign Up</a>\n  <a *ngIf='inSignUpLink()' routerLink='signup'>Sign Up</a>\n  <!-- to not use modal dialog when user on mobile viewport -->\n  <modal #signUp\n        [hideCloseButton]=\"true\"\n        [closeOnEscape]='false  '>\n\n    <modal-header id='signup-modal-header'>\n      Sign up\n    </modal-header>\n\n    <modal-content>\n      <app-signup-form></app-signup-form>\n    </modal-content>\n\n    <modal-footer>\n    </modal-footer>\n\n  </modal>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_utils_service__ = __webpack_require__("../../../../../src/app/services/utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignupComponent = (function () {
    function SignupComponent(utils) {
        this.utils = utils;
    }
    SignupComponent.prototype.ngOnInit = function () { };
    // check the viewport size to upadte the layout
    SignupComponent.prototype.largeSize = function () {
        return this.utils.largeSize();
    };
    SignupComponent.prototype.inSignUpLink = function () {
        return this.utils.inSignUpLink();
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_utils_service__["a" /* UtilsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_utils_service__["a" /* UtilsService */]) === "function" && _a || Object])
], SignupComponent);

var _a;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata__ = __webpack_require__("../../../../reflect-metadata/Reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reflect_metadata___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reflect_metadata__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");





if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map