"use strict";
(self["webpackChunktaxiapp"] = self["webpackChunktaxiapp"] || []).push([["main"],{

/***/ 8698:
/*!*****************************************************!*\
  !*** ./src/app/_services/authentication.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthenticationService": () => (/* binding */ AuthenticationService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 745);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);






const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({
        'Content-Type': 'application/json',
    })
};
const options = {
    observe: "response",
    responseType: "json",
};
const apiUrl = 'https://ifindtaxi.herokuapp.com/';
class AuthenticationService {
    constructor(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.isLoggedIn = false;
        this.redirectUrl = "";
    }
    login(logins) {
        const url = apiUrl + 'api/auth/login/';
        return this.http.post(url, logins, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => this.isLoggedIn = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('login', [])));
    }
    register(accountInfo) {
        const url = apiUrl + 'api/auth/registration/';
        return this.http.post(url, accountInfo, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => this.isLoggedIn = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('register', [])));
    }
    updateUser(userInfo) {
        const url = apiUrl + 'user/';
        return this.http.patch(url, userInfo, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => this.isLoggedIn = true), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('register', [])));
    }
    user() {
        return this.http.get(apiUrl + 'user/', httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('got user')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('register', [])));
    }
    addDriver(driverObj) {
        return this.http.post(apiUrl + 'driver/', driverObj, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('added car')));
    }
    usernameExist(username) {
        return this.http.get(apiUrl + 'api/cars/validate-username/' + username + '/', httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('>>')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(this.handleError('register', [])));
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(result);
        };
    }
    log(message) {
        console.log(message);
    }
}
AuthenticationService.ɵfac = function AuthenticationService_Factory(t) { return new (t || AuthenticationService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
AuthenticationService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AuthenticationService, factory: AuthenticationService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 9408:
/*!************************************************!*\
  !*** ./src/app/_services/taxiranks.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaxiranksService": () => (/* binding */ TaxiranksService)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);





const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpHeaders({ 'Content-Type': 'application/json' })
};
const apiUrl = 'https://ifindtaxi.herokuapp.com/';
class TaxiranksService {
    constructor(http) {
        this.http = http;
    }
    cars(carFilters = {
        name: '',
        brand: '',
        color: '',
        category: '',
        startDate: '',
        endDate: '',
        minPrice: '',
        maxPrice: '',
        city: '',
        owner: ''
    }) {
        console.log(carFilters.category);
        if (carFilters.category.length > 0) {
            return this.http.get(`${apiUrl}/cars/list/?name=${carFilters.name}&brand=${carFilters.brand}&is_verified=&color=${carFilters.color}&category=${carFilters.category}&bookings__start_date__gte=${carFilters.startDate}&bookings__start_date__lte=&bookings__end_date__gte=&bookings__end_date__lte=${carFilters.endDate}&price__gte=${carFilters.minPrice}&price__lte=${carFilters.maxPrice}&city=${carFilters.city}&owner=${carFilters.owner}`, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('fetch products')));
        }
        else {
            return this.http.get(`${apiUrl}/cars/list/?name=${carFilters.name}&brand=${carFilters.brand}&is_verified=&color=${carFilters.color}&bookings__start_date__gte=${carFilters.startDate}&bookings__start_date__lte=&bookings__end_date__gte=&bookings__end_date__lte=${carFilters.endDate}&price__gte=${carFilters.minPrice}&price__lte=${carFilters.maxPrice}&city=${carFilters.city}&owner=${carFilters.owner}`, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('fetch products')));
        }
    }
    carDetails(productID) {
        return this.http.get(apiUrl + '/cars/list/' + productID + '/', httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('detailed')));
    }
    search(q) {
        return this.http.get(`${apiUrl}ranks/?search=${q}`, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('search complete')));
    }
    addDriver(car) {
        return this.http.post(apiUrl + '/cars/add-car/', car, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('added car')));
    }
    upload(formData) {
        return this.http.post(`${apiUrl}/cars/use-form/`, formData);
    }
    // Move to its own service
    nearByPlaces(lat = '-25.7458176', lng = '28.1935872') {
        let newlocation = {
            lat: lat,
            lng: lng
        };
        return this.http.post(apiUrl + '/cars/places/', newlocation, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('got near')));
    }
    payTaxi(bookingData) {
        return this.http.post(`${apiUrl}/cars/add-booking/`, bookingData, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('added car')));
    }
    bookings(userId, ownerId) {
        return this.http.get(`${apiUrl}/cars/bookings/?booking_user=${userId}&car__owner=${ownerId}`, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('fetch products')));
    }
    newsletter(newsletter) {
        return this.http.post(`${apiUrl}/cars/policy-and-newsletter/`, newsletter, httpOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(_ => console.log('added car')));
    }
}
TaxiranksService.ɵfac = function TaxiranksService_Factory(t) { return new (t || TaxiranksService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__.HttpClient)); };
TaxiranksService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TaxiranksService, factory: TaxiranksService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _pay_successful_successful_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pay/successful/successful.component */ 8805);
/* harmony import */ var _pay_unsuccessful_unsuccessful_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pay/unsuccessful/unsuccessful.component */ 6999);
/* harmony import */ var _rank_details_rank_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rank-details/rank-details.component */ 8802);
/* harmony import */ var _rank_list_rank_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./rank-list/rank-list.component */ 3251);
/* harmony import */ var _ranks_ranks_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ranks/ranks.component */ 8295);
/* harmony import */ var _register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-driver/register-driver.component */ 4757);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _taxis_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./taxis/list/list.component */ 4339);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2560);













const routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_8__.RegisterComponent },
    { path: 'register-driver', component: _register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_7__.RegisterDriverComponent },
    { path: 'rank', component: _ranks_ranks_component__WEBPACK_IMPORTED_MODULE_6__.RanksComponent },
    { path: 'rank-details/:id', component: _rank_details_rank_details_component__WEBPACK_IMPORTED_MODULE_4__.RankDetailsComponent },
    { path: 'taxi/:id', component: _taxis_list_list_component__WEBPACK_IMPORTED_MODULE_9__.ListComponent },
    { path: 'ranks', component: _rank_list_rank_list_component__WEBPACK_IMPORTED_MODULE_5__.RankListComponent },
    { path: 'payment/success', component: _pay_successful_successful_component__WEBPACK_IMPORTED_MODULE_2__.SuccessfulComponent },
    { path: 'payment/failed', component: _pay_unsuccessful_unsuccessful_component__WEBPACK_IMPORTED_MODULE_3__.UnsuccessfulComponent },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AppComponent {
    constructor() {
        this.title = 'taxiapp';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 8357);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ 9087);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./interceptors/token.interceptor */ 9325);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/nav/nav.component */ 9273);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register-driver/register-driver.component */ 4757);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _edit_account_account_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./edit/account/account.component */ 8311);
/* harmony import */ var _ranks_ranks_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ranks/ranks.component */ 8295);
/* harmony import */ var _taxis_list_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./taxis/list/list.component */ 4339);
/* harmony import */ var _trips_trips_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./trips/trips.component */ 5238);
/* harmony import */ var _loads_loads_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loads/loads.component */ 3886);
/* harmony import */ var _rank_details_rank_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rank-details/rank-details.component */ 8802);
/* harmony import */ var _rank_list_rank_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./rank-list/rank-list.component */ 3251);
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ 8362);
/* harmony import */ var _pay_successful_successful_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pay/successful/successful.component */ 8805);
/* harmony import */ var _pay_unsuccessful_unsuccessful_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pay/unsuccessful/unsuccessful.component */ 6999);
/* harmony import */ var _driver_passenger_list_passenger_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./driver/passenger-list/passenger-list.component */ 102);
/* harmony import */ var _driver_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./driver/profile/profile.component */ 138);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/footer/footer.component */ 5227);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/core */ 2560);































class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HTTP_INTERCEPTORS,
            useClass: _interceptors_token_interceptor__WEBPACK_IMPORTED_MODULE_5__.TokenInterceptor,
            multi: true
        },
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientXsrfModule.withOptions({
            cookieName: 'csrftoken',
            headerName: 'X-CSRFToken',
        }),
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
        _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatGoogleMapsAutocompleteModule,
        _agm_core__WEBPACK_IMPORTED_MODULE_26__.AgmCoreModule.forRoot({
            apiKey: 'AIzaSyDB1U3Pe1Kdd-D88F2ZRi1_jCYP7Hif9fU',
            libraries: ['places']
        }),
        ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastNoAnimationModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_21__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_3__.LoginComponent,
        _register_register_component__WEBPACK_IMPORTED_MODULE_4__.RegisterComponent,
        _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__.NavComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_7__.HomeComponent,
        _register_driver_register_driver_component__WEBPACK_IMPORTED_MODULE_8__.RegisterDriverComponent,
        _edit_account_account_component__WEBPACK_IMPORTED_MODULE_9__.AccountComponent,
        _ranks_ranks_component__WEBPACK_IMPORTED_MODULE_10__.RanksComponent,
        _taxis_list_list_component__WEBPACK_IMPORTED_MODULE_11__.ListComponent,
        _trips_trips_component__WEBPACK_IMPORTED_MODULE_12__.TripsComponent,
        _loads_loads_component__WEBPACK_IMPORTED_MODULE_13__.LoadsComponent,
        _rank_details_rank_details_component__WEBPACK_IMPORTED_MODULE_14__.RankDetailsComponent,
        _rank_list_rank_list_component__WEBPACK_IMPORTED_MODULE_15__.RankListComponent,
        _pay_successful_successful_component__WEBPACK_IMPORTED_MODULE_16__.SuccessfulComponent,
        _pay_unsuccessful_unsuccessful_component__WEBPACK_IMPORTED_MODULE_17__.UnsuccessfulComponent,
        _driver_passenger_list_passenger_list_component__WEBPACK_IMPORTED_MODULE_18__.PassengerListComponent,
        _driver_profile_profile_component__WEBPACK_IMPORTED_MODULE_19__.ProfileComponent,
        _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__.FooterComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__.HttpClientXsrfModule, _angular_forms__WEBPACK_IMPORTED_MODULE_24__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_24__.ReactiveFormsModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
        _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_25__.MatGoogleMapsAutocompleteModule, _agm_core__WEBPACK_IMPORTED_MODULE_26__.AgmCoreModule, ngx_toastr__WEBPACK_IMPORTED_MODULE_27__.ToastNoAnimationModule] }); })();


/***/ }),

/***/ 102:
/*!*******************************************************************!*\
  !*** ./src/app/driver/passenger-list/passenger-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassengerListComponent": () => (/* binding */ PassengerListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PassengerListComponent {
    constructor() { }
    ngOnInit() {
    }
}
PassengerListComponent.ɵfac = function PassengerListComponent_Factory(t) { return new (t || PassengerListComponent)(); };
PassengerListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PassengerListComponent, selectors: [["app-passenger-list"]], decls: 2, vars: 0, template: function PassengerListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "passenger-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXNzZW5nZXItbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 138:
/*!*****************************************************!*\
  !*** ./src/app/driver/profile/profile.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": () => (/* binding */ ProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class ProfileComponent {
    constructor() { }
    ngOnInit() {
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(); };
ProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 2, vars: 0, template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "profile works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8311:
/*!***************************************************!*\
  !*** ./src/app/edit/account/account.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountComponent": () => (/* binding */ AccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class AccountComponent {
    constructor() { }
    ngOnInit() {
    }
}
AccountComponent.ɵfac = function AccountComponent_Factory(t) { return new (t || AccountComponent)(); };
AccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountComponent, selectors: [["app-account"]], decls: 2, vars: 0, template: function AccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "account works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-material-extensions/google-maps-autocomplete */ 8362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shared/nav/nav.component */ 9273);
/* harmony import */ var _ranks_ranks_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ranks/ranks.component */ 8295);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/footer/footer.component */ 5227);









class HomeComponent {
    constructor(router) {
        this.router = router;
        this.isApiLoaded = false;
        this.options = {
            componentRestrictions: { country: 'IN' }
        };
        this.ranks = [
            {
                "id": 0,
                "name": "xxxxx",
                "brand": "TAxi rank populate here",
                "owner": 6,
                "category": [
                    1
                ],
                "extra": "dygfggfdf hfdhfdhfbdf fdhbfhdbfdhbfdhf",
                "is_booked": true,
                "color": "black",
                "main_image": "",
                "price": 0,
                "bookings": [
                    "http://localhost:8000/api/ranks/bookings/1/",
                    "http://localhost:8000/api/ranks/bookings/2/",
                    "http://localhost:8000/api/ranks/bookings/3/"
                ]
            },
            {
                "id": 0,
                "name": "xxxxx",
                "brand": "TAxi rank populate here",
                "owner": 6,
                "category": [
                    1
                ],
                "extra": "dygfggfdf hfdhfdhfbdf fdhbfhdbfdhbfdhf",
                "is_booked": true,
                "color": "black",
                "main_image": "",
                "price": 0,
                "bookings": [
                    "http://localhost:8000/api/ranks/bookings/1/",
                    "http://localhost:8000/api/ranks/bookings/2/",
                    "http://localhost:8000/api/ranks/bookings/3/"
                ]
            }
        ];
        this.q = {
            from: '',
            to: '',
        };
        this.cartItems = 1;
        this.showing = 0;
        this.featuredProducts = [];
        this.newAddress = '';
        this.latitude = 0.0000000;
        this.longitude = 0.000000;
        this.appearance = _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_3__.Appearance;
        this.zoom = 10;
    }
    ngOnInit() {
    }
    goto(taxi_id) {
    }
    search() {
        const navigationExtras = {
            state: {
                q: [
                    this.q.from,
                    this.q.to,
                ]
            }
        };
        this.router.navigate(['ranks/'], navigationExtras);
    }
    handleAddressChange(address) {
        console.log(address.formatted_address);
        console.log(address.geometry.location.lat());
        console.log(address.geometry.location.lng());
    }
    onAutocompleteSelected(result) {
        console.log('onAutocompleteSelected: ', result);
        this.q.from = result.name;
    }
    onLocationSelected(location) {
        console.log('onLocationSelected: ', location);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
    }
    onAutocompleteToSelected(result) {
        console.log('onAutocompleteSelected: ', result);
        this.q.to = result.name;
    }
    onLocationToSelected(location) {
        console.log('onLocationSelected: ', location);
        this.latitude = location.latitude;
        this.longitude = location.longitude;
    }
    onGermanAddressMapped($event) {
        console.log('onGermanAddressMapped', $event);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 2, consts: [[1, "main-banner"], [1, "banner-overlay"], ["id", "", 1, "container"], [1, "search-bar", "mt-5", "p-3", "p-lg-1", "pl-lg-4"], [3, "ngSubmit"], [1, "row"], [1, "col-lg-5", "d-flex", "align-items-center", "form-group"], ["matInput", "", "matGoogleMapsAutocomplete", "", "type", "text", "placeholder", "Where to get ride?", "name", "from", 1, "form-control", "border-0", "shadow-0", 3, "ngModel", "onAutocompleteSelected", "onLocationSelected", "ngModelChange"], ["matInput", "", "matGoogleMapsAutocomplete", "", "type", "text", "placeholder", "Where are you going?", "name", "to", 1, "form-control", "border-0", "shadow-0", 3, "ngModel", "onAutocompleteSelected", "onLocationSelected", "ngModelChange"], [1, "col-lg-2"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "rounded-xl", "h-100"], [2, "color", "white"], [1, "btn", "btn-block", "btn-dark", "rounded-xl"], ["routerLink", "/register-driver", 1, "btn", "btn-block", "btn-dark", "rounded-xl"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "section", 0)(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 3)(6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_6_listener() { return ctx.search(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onAutocompleteSelected", function HomeComponent_Template_input_onAutocompleteSelected_9_listener($event) { return ctx.onAutocompleteSelected($event); })("onLocationSelected", function HomeComponent_Template_input_onLocationSelected_9_listener($event) { return ctx.onLocationSelected($event); })("ngModelChange", function HomeComponent_Template_input_ngModelChange_9_listener($event) { return ctx.q.from = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 6)(11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onAutocompleteSelected", function HomeComponent_Template_input_onAutocompleteSelected_11_listener($event) { return ctx.onAutocompleteToSelected($event); })("onLocationSelected", function HomeComponent_Template_input_onLocationSelected_11_listener($event) { return ctx.onLocationToSelected($event); })("ngModelChange", function HomeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.q.to = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "br")(16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "h1", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Travel Safe with IFindTaxi!!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "locate taxi ranks you can find taxis your destinations!");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Browse Rank");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "Drive and Earn");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "app-ranks")(26, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.q.from);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.q.to);
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgForm, _angular_material_extensions_google_maps_autocomplete__WEBPACK_IMPORTED_MODULE_3__.MatGoogleMapsAutocompleteDirective, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _ranks_ranks_component__WEBPACK_IMPORTED_MODULE_1__.RanksComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: [".rounded-xl[_ngcontent-%COMP%]{\n    border-radius: 5px;\n    margin: 5px;\n}\n\n.main-banner[_ngcontent-%COMP%]{\n    width: 100%;\n    max-width: 100vw;\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yb3VuZGVkLXhse1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW46IDVweDtcbn1cblxuLm1haW4tYmFubmVye1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gfSJdfQ== */"] });


/***/ }),

/***/ 9325:
/*!***************************************************!*\
  !*** ./src/app/interceptors/token.interceptor.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenInterceptor": () => (/* binding */ TokenInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 5474);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3158);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);





class TokenInterceptor {
    constructor(router) {
        this.router = router;
        this.requests = [];
        this.totalRequests = 0;
    }
    intercept(request, next) {
        const token = 'Token ' + localStorage.getItem('token');
        this.totalRequests++;
        if (token) {
            request = request.clone({
                setHeaders: {
                    'Authorization': token
                }
            });
        }
        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }
            });
        }
        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });
        return next.handle(request).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_0__.map)((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpResponse) {
                console.log('event--->>>', event);
                this.totalRequests--;
                if (this.totalRequests === 0) {
                    console.log("iii");
                }
            }
            return event;
        }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)((error) => {
            if (error.status === 401 || error.status === 403 || error.status === 500) {
                if (error.error.success === false) {
                }
                else {
                    this.router.navigate(['/']);
                }
            }
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(error);
        }));
    }
}
TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) { return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
TokenInterceptor.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: TokenInterceptor, factory: TokenInterceptor.ɵfac });


/***/ }),

/***/ 3886:
/*!******************************************!*\
  !*** ./src/app/loads/loads.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoadsComponent": () => (/* binding */ LoadsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class LoadsComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadsComponent.ɵfac = function LoadsComponent_Factory(t) { return new (t || LoadsComponent)(); };
LoadsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadsComponent, selectors: [["app-loads"]], decls: 2, vars: 0, template: function LoadsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "loads works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2Fkcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/authentication.service */ 8698);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nav/nav.component */ 9273);








const _c0 = function (a0) { return { "is-invalid": a0 }; };
class LoginComponent {
    constructor(formBuilder, authService, toastr, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = "";
        this.isLoggedIn = false;
        this.submittedR = false;
        this.state = '';
        this.form = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
        });
    }
    ngOnInit() {
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        // use the rest service here.
        const auth = {
            email: this.f.email.value,
            password: this.f.password.value
        };
        this.authService.login(auth)
            .subscribe(res => {
            let token = res.key;
            localStorage.setItem('token', token);
            if (token) {
                this.isLoggedIn = this.authService.isLoggedIn;
                this.toastr.success('Login successful', 'Welcome back!!!! Great ');
                this.user();
                this.router.navigate(['']);
            }
            else {
                this.toastr.error('Login Failed', 'Check your credentials');
            }
        }, err => {
            console.log(err);
            console.log("gdgdgdg");
            this.toastr.error('Login failed', 'Oopsie!!! something going wrong with your Login');
            this.loading = false;
        });
    }
    user() {
        this.authService.user().subscribe(res => {
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res));
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], decls: 24, vars: 7, consts: [[1, "container"], [1, "h3", "mb-3", "fw-normal"], [3, "formGroup", "ngSubmit"], [1, "form-floating"], ["type", "email", "formControlName", "email", "id", "floatingInput", "placeholder", "johndoe", 1, "form-control", 3, "ngClass"], ["for", "floatingInput"], ["type", "password", "formControlName", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["for", "floatingPassword"], [1, "checkbox", "mb-3"], ["type", "checkbox", "value", "remember-me"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-outline-secondary", "rounded-xl"], ["routerLink", "/register", 1, "w-100", "btn", "btn-lg", "btn-outline-dark", "rounded-xl"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "br")(3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8)(16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Sign in");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " or ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Create new Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](3, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](5, _c0, ctx.submitted && ctx.f.password.errors));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 8805:
/*!********************************************************!*\
  !*** ./src/app/pay/successful/successful.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessfulComponent": () => (/* binding */ SuccessfulComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var src_app_services_taxiranks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/taxiranks.service */ 9408);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/nav/nav.component */ 9273);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);





class SuccessfulComponent {
    constructor(taxiService, router) {
        this.taxiService = taxiService;
        this.router = router;
        this.booking = {
            car: 0,
            booking_user: 0,
            start_date: '',
            end_date: '',
        };
    }
    ngOnInit() {
        if (localStorage.getItem('booking') != null) {
            const from_storage = localStorage.getItem('booking');
            this.booking = JSON.parse(from_storage ?? '');
        }
        else {
            this.booking = {
                car: 0,
                booking_user: 0,
                start_date: '',
                end_date: '',
            };
        }
        this.payTaxi();
    }
    payTaxi() {
        if (this.booking.car === 0) {
            this.router.navigate(['my-car-rentals']);
        }
        else {
            this.taxiService.payTaxi(this.booking).subscribe(data => {
                console.log(data);
                if (data.car === this.booking.car) {
                    localStorage.removeItem('booking');
                }
            });
        }
    }
}
SuccessfulComponent.ɵfac = function SuccessfulComponent_Factory(t) { return new (t || SuccessfulComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_services_taxiranks_service__WEBPACK_IMPORTED_MODULE_0__.TaxiranksService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SuccessfulComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SuccessfulComponent, selectors: [["app-successful"]], decls: 20, vars: 0, consts: [[1, "car-list"], [1, "container"], ["xmlns", "http://www.w3.org/2000/svg", 2, "display", "none"], ["id", "check-circle-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"], ["id", "info-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"], ["id", "exclamation-triangle-fill", "fill", "currentColor", "viewBox", "0 0 16 16"], ["d", "M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"], ["role", "alert", 1, "alert", "alert-success"], [1, "alert-heading"]], template: function SuccessfulComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "section", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "svg", 2)(4, "symbol", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "symbol", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "symbol", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "br")(11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 9)(13, "h4", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "You have successfully Paid for this taxi!");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "You can not cancel this trip, you can just ask the driver to drop off, should you onboard a wrong taxi");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "app-footer");
    } }, dependencies: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWNjZXNzZnVsLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 6999:
/*!************************************************************!*\
  !*** ./src/app/pay/unsuccessful/unsuccessful.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnsuccessfulComponent": () => (/* binding */ UnsuccessfulComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/nav/nav.component */ 9273);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/footer/footer.component */ 5227);



class UnsuccessfulComponent {
    constructor() { }
    ngOnInit() {
    }
}
UnsuccessfulComponent.ɵfac = function UnsuccessfulComponent_Factory(t) { return new (t || UnsuccessfulComponent)(); };
UnsuccessfulComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UnsuccessfulComponent, selectors: [["app-unsuccessful"]], decls: 16, vars: 0, consts: [[1, "car-list"], [1, "container"], ["role", "alert", 1, "alert", "alert-danger"], [1, "alert-heading"], [1, "btn1", "btn-lg", "btn-block", "btn-danger"]], template: function UnsuccessfulComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section", 0)(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "br")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 2)(6, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Payment Failed, Check With Your Bank!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Your payment for the trip did not go through, check your bank and try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "br")(12, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Try again");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](15, "app-footer");
    } }, dependencies: [_shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent, _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1bnN1Y2Nlc3NmdWwuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 8802:
/*!********************************************************!*\
  !*** ./src/app/rank-details/rank-details.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RankDetailsComponent": () => (/* binding */ RankDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class RankDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
}
RankDetailsComponent.ɵfac = function RankDetailsComponent_Factory(t) { return new (t || RankDetailsComponent)(); };
RankDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RankDetailsComponent, selectors: [["app-rank-details"]], decls: 2, vars: 0, template: function RankDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "rank-details works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5rLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3251:
/*!**************************************************!*\
  !*** ./src/app/rank-list/rank-list.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RankListComponent": () => (/* binding */ RankListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _services_taxiranks_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/taxiranks.service */ 9408);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ 3333);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nav/nav.component */ 9273);






function RankListComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RankListComponent_div_9_div_1_Template_img_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r3.goto(item_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 11)(5, "div", 12)(6, "a", 13)(7, "h5", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Pretoria CBD --> Soshanguve");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 15)(12, "small", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "From R20");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RankListComponent_div_9_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r5.goto(1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "ride here");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate1"]("routerLink", "/rank-details/", item_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r2.name);
} }
function RankListComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, RankListComponent_div_9_div_1_Template, 16, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.ranks);
} }
class RankListComponent {
    constructor(router, route, taxiService) {
        this.router = router;
        this.route = route;
        this.taxiService = taxiService;
        this.searchData = [];
        this.message = "Recommended Taxi Ranks";
        this.ranks = [{
                id: 0,
                name: "Bloedmall taxi rank",
                ranking_taxis: ""
            }, {
                id: 0,
                name: "Bosman taxi rank",
                ranking_taxis: ""
            }];
        this.title = 'My first AGM project';
        this.lat = -25.731340;
        this.lng = 28.218370;
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation()?.extras.state) {
                const newObj = this.router.getCurrentNavigation()?.extras.state;
                this.searchData = newObj?.q;
                this.ranks = this.searchData;
                this.search();
            }
        });
    }
    ngOnInit() {
    }
    goto(id) {
        const filteredCars = this.ranks.filter(car => car.id === id);
        const navigationExtras = {
            state: {
                car: filteredCars[0]
            }
        };
        this.router.navigate(['taxi', 1], navigationExtras);
    }
    search() {
        this.taxiService.search(this.searchData[0]).subscribe(data => {
            this.ranks = data;
            this.message = "Result Of Taxi ranks you should use.";
        });
    }
}
RankListComponent.ɵfac = function RankListComponent_Factory(t) { return new (t || RankListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_taxiranks_service__WEBPACK_IMPORTED_MODULE_0__.TaxiranksService)); };
RankListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RankListComponent, selectors: [["app-rank-list"]], decls: 14, vars: 6, consts: [["id", "", 1, "container"], [1, "row"], [1, "col-md-6"], [4, "ngIf"], [1, "map"], [3, "latitude", "longitude"], ["class", "card mb-3", "style", "max-width: 540px;", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "g-0"], [1, "col-md-5"], ["src", "../../../assets/bus-stop.png", "width", "120px", "height", "120px", "alt", "...", 3, "click"], [1, "col-md-7"], [1, "card-body", "mxf"], [3, "routerLink"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], [1, "btn1", "btn-lg", "btn-block", "btn-danger", 2, "padding-left", "30px", "padding-right", "30px", 3, "click"]], template: function RankListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br")(3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 0)(5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 1)(8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RankListComponent_div_9_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 2)(11, "div", 4)(12, "agm-map", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "agm-marker", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.ranks);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("latitude", ctx.lat)("longitude", ctx.lng);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _agm_core__WEBPACK_IMPORTED_MODULE_5__.AgmMap, _agm_core__WEBPACK_IMPORTED_MODULE_5__.AgmMarker, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent], styles: ["agm-map[_ngcontent-%COMP%] {\n    height: 600px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhbmstbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtFQUNmIiwiZmlsZSI6InJhbmstbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYWdtLW1hcCB7XG4gICAgaGVpZ2h0OiA2MDBweDtcbiAgfSJdfQ== */"] });


/***/ }),

/***/ 8295:
/*!******************************************!*\
  !*** ./src/app/ranks/ranks.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RanksComponent": () => (/* binding */ RanksComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);



function RanksComponent_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RanksComponent_div_5_div_1_Template_img_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r3.goto(item_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8)(5, "div", 9)(6, "a", 10)(7, "h5", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pretoria CBD");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 12)(12, "small", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "From R20");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/car-details/", item_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.name);
} }
function RanksComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RanksComponent_div_5_div_1_Template, 14, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.ranks);
} }
class RanksComponent {
    constructor() {
        this.ranks = [{
                id: 0,
                name: "Bloedmall taxi rank",
                main_image: ""
            }, {
                id: 0,
                name: "Bosman taxi rank",
                main_image: ""
            }];
    }
    ngOnInit() {
    }
    goto(id) {
    }
}
RanksComponent.ɵfac = function RanksComponent_Factory(t) { return new (t || RanksComponent)(); };
RanksComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RanksComponent, selectors: [["app-ranks"]], decls: 6, vars: 1, consts: [["id", "", 1, "container"], [1, "col-md-6"], [4, "ngIf"], ["class", "card mb-3", "style", "max-width: 540px;", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "g-0"], [1, "col-md-5"], ["src", "../../../assets/bus-stop.png", "width", "120px", "height", "120px", "alt", "...", 3, "click"], [1, "col-md-7"], [1, "card-body", "mxf"], [3, "routerLink"], [1, "card-title"], [1, "card-text"], [1, "text-muted"]], template: function RanksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br")(2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 0)(4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RanksComponent_div_5_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.ranks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyYW5rcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4757:
/*!**************************************************************!*\
  !*** ./src/app/register-driver/register-driver.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterDriverComponent": () => (/* binding */ RegisterDriverComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/authentication.service */ 8698);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nav/nav.component */ 9273);








function RegisterDriverComponent_form_8_p_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "username is alredy taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterDriverComponent_form_8_p_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm Password is required and must match Password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
function RegisterDriverComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterDriverComponent_form_8_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r4.onSubmit()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "First Names");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, RegisterDriverComponent_form_8_p_14_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Confirm Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, RegisterDriverComponent_form_8_p_28_Template, 2, 0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 15)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](31, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, " Remember me ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Sign Up");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx_r0.submitted && ctx_r0.f.username.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx_r0.submitted && ctx_r0.f.firstName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx_r0.submitted && ctx_r0.f.lastName.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.f.username.errors == null ? null : ctx_r0.f.username.errors.usernameExist);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c0, ctx_r0.submitted && ctx_r0.f.email.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](17, _c0, ctx_r0.submitted && ctx_r0.f.password.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](19, _c0, ctx_r0.submitted && ctx_r0.f.password2.errors));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r0.submitted && ctx_r0.f.password2.errors);
} }
function RegisterDriverComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function RegisterDriverComponent_button_9_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r6.addAsDriver()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class RegisterDriverComponent {
    constructor(formBuilder, authService, toastr, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = "";
        this.isLoggedIn = false;
        this.state = 0;
        this.form = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            lastName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    ngOnInit() {
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        if (this.f.password.value != this.f.password2.value) {
            this.f.password2.setErrors({ doesNotMatch: true });
            return;
        }
        this.loading = true;
        // use the rest service here.
        const auth = {
            username: this.f.username.value,
            email: this.f.email.value,
            password1: this.f.password.value,
            password2: this.f.password2.value,
        };
        const userInfo = {
            first_name: this.f.firstName.value,
            last_name: this.f.lastName.value
        };
        this.authService.register(auth)
            .subscribe(res => {
            localStorage.setItem('token', res.key);
            this.isLoggedIn = this.authService.isLoggedIn;
            this.toastr.success('Registration successful', 'wow, thats a snap! ');
            this.updateUser(userInfo);
            console.log(res);
        }, err => {
            console.log(err);
            this.toastr.error('Registration failes', 'Oopsie!!! something going wrong with your registration');
            console.log("gdgdgdg");
            this.loading = false;
        });
    }
    updateUser(userInfo) {
        this.authService.updateUser(userInfo)
            .subscribe(res => {
            this.toastr.success('Updated User', '.....');
            console.log(res);
        }, err => {
            console.log(err);
            this.toastr.error('Registration failes', 'Oopsie!!! something going wrong with your registration');
            console.log("gdgdgdg");
            this.loading = false;
        });
    }
    addAsDriver() {
        console.log;
        if (localStorage.getItem('token') != null) {
            this.isLoggedIn = true;
            if (localStorage.getItem('user') != null) {
                const from_storage = localStorage.getItem('user');
                console.log(from_storage);
                const userId = JSON.parse(from_storage ?? '');
                const driverInfo = {
                    id: userId.id
                };
                this.authService.addDriver(driverInfo).subscribe(res => {
                    this.toastr.success('Updated driver', '.....');
                    console.log(res);
                    this.router.navigate(['']);
                }, err => {
                    console.log(err);
                    this.toastr.error('Registration failes', 'Oopsie!!! something going wrong with your registration');
                    console.log("gdgdgdg");
                    this.loading = false;
                });
            }
        }
    }
}
RegisterDriverComponent.ɵfac = function RegisterDriverComponent_Factory(t) { return new (t || RegisterDriverComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
RegisterDriverComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterDriverComponent, selectors: [["app-register-driver"]], decls: 10, vars: 2, consts: [[1, "container"], [1, "h3", "mb-3", "fw-normal"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "w-100 btn btn-lg btn-outline-secondary rounded-xl", 3, "click", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-floating"], ["type", "text", "formControlName", "username", "id", "floatingInput", "placeholder", "username", 1, "form-control", 3, "ngClass"], ["for", "floatingInput"], ["type", "text", "formControlName", "firstName", "id", "floatingInput", "placeholder", "first name", 1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "lastName", "id", "floatingInput", "placeholder", "last name", 1, "form-control", 3, "ngClass"], ["class", "text-danger", 4, "ngIf"], ["type", "email", "formControlName", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["for", "floatingPassword"], ["type", "password", "formControlName", "password2", "id", "floatingPassword", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "checkbox", "mb-3"], ["type", "checkbox", "value", "remember-me"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-outline-secondary", "rounded-xl"], [1, "text-danger"], [1, "w-100", "btn", "btn-lg", "btn-outline-secondary", "rounded-xl", 3, "click"]], template: function RegisterDriverComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br")(3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sign Up as Driver");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "You must be legal to drive commercially.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, RegisterDriverComponent_form_8_Template, 35, 21, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, RegisterDriverComponent_button_9_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci1kcml2ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 9087:
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_services/authentication.service */ 8698);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/nav/nav.component */ 9273);








function RegisterComponent_p_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "username is alredy taken");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function RegisterComponent_p_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Confirm Password is required and must match Password. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class RegisterComponent {
    constructor(formBuilder, authService, toastr, route, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.toastr = toastr;
        this.route = route;
        this.router = router;
        this.loading = false;
        this.submitted = false;
        this.returnUrl = "";
        this.isLoggedIn = false;
        this.state = '';
        this.form = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    }
    ngOnInit() {
    }
    get f() { return this.form.controls; }
    onSubmit() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.form.invalid) {
            return;
        }
        if (this.f.password.value != this.f.password2.value) {
            this.f.password2.setErrors({ doesNotMatch: true });
            return;
        }
        this.loading = true;
        // use the rest service here.
        const auth = {
            username: this.f.username.value,
            email: this.f.email.value,
            password1: this.f.password.value,
            password2: this.f.password2.value,
        };
        this.authService.register(auth)
            .subscribe(res => {
            localStorage.setItem('token', res.key);
            this.isLoggedIn = this.authService.isLoggedIn;
            this.toastr.success('Registration successful', 'wow, thats a snap! ');
            console.log(res);
            this.user();
            this.router.navigate(['']);
        }, err => {
            console.log(err);
            this.toastr.error('Registration failes', 'Oopsie!!! something going wrong with your registration');
            console.log("gdgdgdg");
            this.loading = false;
        });
    }
    user() {
        this.authService.user().subscribe(res => {
            console.log(res);
            localStorage.setItem('user', JSON.stringify(res));
        });
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], decls: 33, vars: 15, consts: [[1, "container"], [1, "h3", "mb-3", "fw-normal"], [3, "formGroup", "ngSubmit"], [1, "form-floating"], ["type", "text", "formControlName", "username", "id", "floatingInput", "placeholder", "username", 1, "form-control", 3, "ngClass"], ["for", "floatingInput"], ["class", "text-danger", 4, "ngIf"], ["type", "email", "formControlName", "email", "id", "floatingInput", "placeholder", "name@example.com", 1, "form-control", 3, "ngClass"], ["type", "password", "formControlName", "password", "id", "floatingPassword", "placeholder", "Password", 1, "form-control", 3, "ngClass"], ["for", "floatingPassword"], ["type", "password", "formControlName", "password2", "id", "floatingPassword", "placeholder", "Password", 1, "form-control", 3, "ngClass"], [1, "checkbox", "mb-3"], ["type", "checkbox", "value", "remember-me"], ["type", "submit", 1, "w-100", "btn", "btn-lg", "btn-outline-secondary", "rounded-xl"], [1, "text-danger"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "br")(3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, RegisterComponent_p_12_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, RegisterComponent_p_26_Template, 2, 0, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 11)(28, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, " Remember me ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](7, _c0, ctx.submitted && ctx.f.username.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.f.username.errors == null ? null : ctx.f.username.errors.usernameExist);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c0, ctx.submitted && ctx.f.email.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.f.password.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.f.password2.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.f.password2.errors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 5227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 21, vars: 0, consts: [[1, "footer-container", "text-white", "pt-5", "pb-4", "margin-top-5"], [1, "container", "text-md-left"], [1, "row", "align-items-center"], [1, "col-md-7", "col-lg-8"], [1, "col-md-5", "col-lg-4"], [1, "text-md-right"], [1, "list-unstyled", "list-inline"], [1, "list-inline-item"], ["href", "#", 1, "btn-floating", "btn-sm", "text-white", 2, "font-size", "23px"], [1, "fab", "fa-facebook"], ["href", "https://twitter.com/prosper_One", 1, "btn-floating", "btn-sm", "text-white", 2, "font-size", "23px"], [1, "fab", "fa-twitter"], [1, "fab", "fa-instagram"], [1, "fab", "fa-tiktok"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\tCopyright \u00A92022 IFindTaxi All rights ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "div", 5)(8, "ul", 6)(9, "li", 7)(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li", 7)(13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 7)(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 7)(19, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } }, styles: [".margin-top-5[_ngcontent-%COMP%] {\n    margin-top: 5%;\n}\n\n.footer-headers[_ngcontent-%COMP%]{\n\tcolor: #ffffff;\n\tfont-size:30px;\n\tfont-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\n    margin-bottom: 2px;\n}\n\n\n\n.footer-container[_ngcontent-%COMP%]{\n\tbackground-color: #1d1d1d;\n}\n\n.mb-3[_ngcontent-%COMP%]{\n    border: 0;\n    height: 0.2px; \n    box-shadow: 0 1px 5px 1px white;\n    margin-bottom: 8px;\n    width: 150px;\n}\n\n.input-group[_ngcontent-%COMP%]{\n    margin-top: 30px;\n}\n\n.btn[_ngcontent-%COMP%]{\n    color:white;\n    background-color: #d9534f;\n}\n\n.btn[_ngcontent-%COMP%]:hover{\n    background-color: #000;\n    color: #fff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1FQUFtRTs7QUFFbkU7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCwyREFBMkQ7SUFDeEQsa0JBQWtCO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWEsRUFBRSxlQUFlO0lBQzlCLCtCQUErQjtJQUMvQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7QUFDN0I7O0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztBQUNmIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tRk9PVEVSLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuLm1hcmdpbi10b3AtNSB7XG4gICAgbWFyZ2luLXRvcDogNSU7XG59XG5cbi5mb290ZXItaGVhZGVyc3tcblx0Y29sb3I6ICNmZmZmZmY7XG5cdGZvbnQtc2l6ZTozMHB4O1xuXHRmb250LWZhbWlseTonU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgICBtYXJnaW4tYm90dG9tOiAycHg7XG59XG5cbi8qLm1iLTR7XG5tYXJnaW4tYm90dG9tOiAwcHg7XG59Ki9cblxuLmZvb3Rlci1jb250YWluZXJ7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxZDFkMWQ7XG59XG5cbi5tYi0ze1xuICAgIGJvcmRlcjogMDtcbiAgICBoZWlnaHQ6IDAuMnB4OyAvKiBGaXJlZm94Li4uICovXG4gICAgYm94LXNoYWRvdzogMCAxcHggNXB4IDFweCB3aGl0ZTtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgd2lkdGg6IDE1MHB4O1xufVxuXG4uaW5wdXQtZ3JvdXB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJ0bntcbiAgICBjb2xvcjp3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xufVxuLmJ0bjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xuICAgIGNvbG9yOiAjZmZmO1xufSJdfQ== */"] });


/***/ }),

/***/ 9273:
/*!*********************************************!*\
  !*** ./src/app/shared/nav/nav.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavComponent": () => (/* binding */ NavComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ 4817);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/_services/authentication.service */ 8698);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);






const _c0 = ["closeAddExpenseModal"];
function NavComponent_a_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavComponent_a_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "register");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function NavComponent_button_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21)(1, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.user.username);
} }
function NavComponent_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavComponent_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.logout()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor(toastr, router, authService) {
        this.toastr = toastr;
        this.router = router;
        this.authService = authService;
        this.isLoggedIn = false;
        this.user = {
            username: ""
        };
    }
    ngOnInit() {
        if (localStorage.getItem('token') != null) {
            this.isLoggedIn = true;
            if (localStorage.getItem('user') != null) {
                const from_storage = localStorage.getItem('user');
                console.log(from_storage);
                this.user = JSON.parse(from_storage ?? '');
            }
        }
    }
    logout() {
        // Clear all stored user info from device.
        localStorage.clear();
        sessionStorage.clear();
        this.isLoggedIn = false;
        this.toastr.success('You are successfully logged out', 'Great');
        this.closeAddExpenseModal.nativeElement.click();
        this.router.navigate(['']);
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__.ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_authentication_service__WEBPACK_IMPORTED_MODULE_0__.AuthenticationService)); };
NavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], viewQuery: function NavComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.closeAddExpenseModal = _t.first);
    } }, decls: 24, vars: 5, consts: [[1, "main-headers"], [1, "container"], [1, "navbar", "navbar-expand-lg", "navbar-dark", "main-nav"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["routerLink", "/login", "class", "btn btn-light rounded-xl", "type", "submit", "data-bs-toggle", "modal", "href", "#exampleModalToggle", 4, "ngIf"], ["routerLink", "/register", "class", "btn btn-light rounded-xl", "type", "submit", "data-bs-toggle", "modal", "href", "#exampleModalToggle", 4, "ngIf"], ["class", "btn btn-light rounded-xl", "type", "submit", "data-bs-toggle", "modal", "href", "#exampleModalToggle", 4, "ngIf"], ["id", "exampleModalToggle", "aria-hidden", "true", "aria-labelledby", "exampleModalToggleLabel", "tabindex", "-1", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog"], [1, "modal-content"], [1, "modal-body"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], ["closeAddExpenseModal", ""], ["class", "btn btn-light rounded-xl", 3, "click", 4, "ngIf"], ["routerLink", "/login", "type", "submit", "data-bs-toggle", "modal", "href", "#exampleModalToggle", 1, "btn", "btn-light", "rounded-xl"], [1, "fas", "fa-user-circle"], ["routerLink", "/register", "type", "submit", "data-bs-toggle", "modal", "href", "#exampleModalToggle", 1, "btn", "btn-light", "rounded-xl"], ["type", "submit", "data-bs-toggle", "modal", "href", "#exampleModalToggle", 1, "btn", "btn-light", "rounded-xl"], [1, "fas", "fa-bars"], [1, "btn", "btn-light", "rounded-xl", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "nav", 2)(3, "div", 3)(4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "IFindTaxi");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NavComponent_a_9_Template, 3, 0, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NavComponent_a_10_Template, 3, 0, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NavComponent_button_11_Template, 4, 1, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 1)(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "button", 15, 16)(19, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "br")(22, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](23, NavComponent_button_23_Template, 3, 0, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" you are logged in as ", ctx.user.username, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.isLoggedIn);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuYXYuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 4339:
/*!**********************************************!*\
  !*** ./src/app/taxis/list/list.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": () => (/* binding */ ListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/nav/nav.component */ 9273);




function ListComponent_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_div_12_div_1_Template_img_click_3_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const item_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r3.goto(item_r2.id)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10)(5, "div", 11)(6, "a", 12)(7, "h5", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Toyota");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 14)(12, "small", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "R20");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ListComponent_div_12_div_1_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2); return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r5.submitForm()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Pay taxi fair");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("routerLink", "/car-details/", item_r2.id, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r2.name);
} }
function ListComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ListComponent_div_12_div_1_Template, 16, 2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.ranks);
} }
class ListComponent {
    constructor() {
        this.ranks = [{
                id: 0,
                name: "Siyaya XYZ 123 GP",
                main_image: ""
            },
            {
                id: 0,
                name: "Quantum XYZ 123 GP",
                main_image: ""
            }];
        this.myUrl = 'http://localhost:4200';
    }
    ngOnInit() {
    }
    goto(itemId) {
    }
    submitForm() {
        const form = document.createElement('form');
        form.style.display = 'none';
        form.method = 'POST';
        form.action = "https://www.payfast.co.za/eng/process";
        form.style.display = 'none';
        let paymentId = Math.floor((Math.random() * 10000000) + 1).toString();
        let merchant_id = document.createElement('input');
        merchant_id.name = 'merchant_id';
        merchant_id.value = '10566576';
        form.appendChild(merchant_id);
        let merchant_key = document.createElement('input');
        merchant_key.name = 'merchant_key';
        merchant_key.value = 'nznw1degc8slg';
        form.appendChild(merchant_key);
        let payment = document.createElement('input');
        payment.name = 'm_payment_id';
        payment.value = paymentId;
        form.appendChild(payment);
        let amount = document.createElement('input');
        amount.name = 'amount';
        amount.value = '20';
        form.appendChild(amount);
        let itemName = document.createElement('input');
        itemName.name = 'item_name';
        itemName.value = 'taxi-fare';
        form.appendChild(itemName);
        let returnUrl = document.createElement('input');
        returnUrl.name = 'return_url';
        returnUrl.value = this.myUrl + '/suceess';
        form.appendChild(returnUrl);
        let cancelUrl = document.createElement('input');
        cancelUrl.name = 'cancel_url';
        cancelUrl.value = this.myUrl + '/cancel';
        form.appendChild(cancelUrl);
        let notifyUrl = document.createElement('input');
        notifyUrl.name = 'notify_url';
        notifyUrl.value = 'http://app.kabook.africa/notify';
        form.appendChild(returnUrl);
        document.body.appendChild(form);
        form.submit();
    }
}
ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(); };
ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 13, vars: 1, consts: [[1, "container"], ["id", "", 1, "container"], [1, "col-md-12"], [1, "row"], [4, "ngIf"], ["class", "card mb-3", "style", "max-width: 540px;", 4, "ngFor", "ngForOf"], [1, "card", "mb-3", 2, "max-width", "540px"], [1, "row", "g-0"], [1, "col-md-5"], ["src", "../../../assets/van.png", "width", "128px", "height", "128px", "alt", "...", 3, "click"], [1, "col-md-7"], [1, "card-body", "mxf"], [3, "routerLink"], [1, "card-title"], [1, "card-text"], [1, "text-muted"], [1, "btn1", "btn-lg", "btn-block", "btn-danger", 2, "padding-left", "30px", "padding-right", "30px", 3, "click"]], template: function ListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "section")(2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "br")(4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Select Taxi you have boarded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "confirm that the taxi you paying for is the one you are getting in");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ListComponent_div_12_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ranks);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref, _shared_nav_nav_component__WEBPACK_IMPORTED_MODULE_0__.NavComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 5238:
/*!******************************************!*\
  !*** ./src/app/trips/trips.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripsComponent": () => (/* binding */ TripsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class TripsComponent {
    constructor() { }
    ngOnInit() {
    }
}
TripsComponent.ɵfac = function TripsComponent_Factory(t) { return new (t || TripsComponent)(); };
TripsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TripsComponent, selectors: [["app-trips"]], decls: 2, vars: 0, template: function TripsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "trips works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmlwcy5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map