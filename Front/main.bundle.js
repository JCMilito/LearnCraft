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

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <router-outlet> </router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

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

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__features_login_login_module__ = __webpack_require__("../../../../../src/app/features/login/login.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__features_master_questions_questions_module__ = __webpack_require__("../../../../../src/app/features/master/questions/questions.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__features_master_master_module__ = __webpack_require__("../../../../../src/app/features/master/master.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__features_masterPlayer_masterPlayer_module__ = __webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_7__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__features_master_master_module__["a" /* MasterModule */],
                __WEBPACK_IMPORTED_MODULE_1__features_master_questions_questions_module__["a" /* QuestionsModule */],
                __WEBPACK_IMPORTED_MODULE_0__features_login_login_module__["a" /* LoginModule */],
                __WEBPACK_IMPORTED_MODULE_3__features_masterPlayer_masterPlayer_module__["a" /* MasterPlayerModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <h4 class=\"text-center\">Login</h4>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Digite o email aqui\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Senha</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Digite a senha aqui\">\n  </div>\n  <button class=\"btn btn-primary btn-block\" (click)=\"logon()\">Entrar</button>\n  <a routerLink=\"/subscribe\" class=\"btn btn-outline-info btn-block\" role=\"button\" aria-pressed=\"true\">Cadastrar</a>\n</form>"

/***/ }),

/***/ "../../../../../src/app/features/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin: 15px;\n  padding: 15px;\n  display: block;\n  background-color: white;\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_service__ = __webpack_require__("../../../../../src/app/features/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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



var LoginComponent = (function () {
    function LoginComponent(loginService, route) {
        this.loginService = loginService;
        this.route = route;
        this.user = {
            email: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logon = function () {
        var _this = this;
        this.loginService.logon(this.user).subscribe(function (data) {
            if (data) {
                localStorage.setItem('user', JSON.stringify(data));
                _this.route.navigate(['/playermaster']);
            }
            else {
                alert('Logon inválido!');
            }
        }, function (error) { return console.log(error); });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/features/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/login/login.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_component__ = __webpack_require__("../../../../../src/app/features/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_routing__ = __webpack_require__("../../../../../src/app/features/login/login.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__subscribe_character_character_component__ = __webpack_require__("../../../../../src/app/features/login/subscribe/character/character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__subscribe_subscribe_component__ = __webpack_require__("../../../../../src/app/features/login/subscribe/subscribe.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LoginModule = (function () {
    function LoginModule() {
    }
    LoginModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__login_routing__["a" /* LoginRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_6__subscribe_subscribe_component__["a" /* SubscribeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__subscribe_character_character_component__["a" /* CharacterComponent */]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/login/login.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/features/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__subscribe_character_character_component__ = __webpack_require__("../../../../../src/app/features/login/subscribe/character/character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__subscribe_subscribe_component__ = __webpack_require__("../../../../../src/app/features/login/subscribe/subscribe.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_component__["a" /* LoginComponent */] },
    { path: 'subscribe', component: __WEBPACK_IMPORTED_MODULE_2__subscribe_subscribe_component__["a" /* SubscribeComponent */] },
    { path: 'character', component: __WEBPACK_IMPORTED_MODULE_1__subscribe_character_character_component__["a" /* CharacterComponent */] },
];
var LoginRoutingModule = (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */]],
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.create = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/user/add', user, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.logon = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/user/logon', user, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    LoginService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    LoginService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/features/login/subscribe/character/character.component.html":
/***/ (function(module, exports) {

module.exports = "<h4 class=\"text-center\">Personagem</h4>\r\n<div class=\"form-group\">\r\n    <label for=\"name\">Nome do personagem</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" maxlength=\"12\" [(ngModel)]=\"character.name\" placeholder=\"Digite o nome aqui\">\r\n</div>\r\n<div class=\"row\">\r\n    <div class=\"col\" id=\"mage\" (click)=\"selectClass('mage')\">\r\n        <img src=\"assets/images/mage.png\" alt=\"\">\r\n        <p>Feiticeiro arcano, que domina os poderes do fogo, da água e do espaço, para atacar seus inimigos com\r\n            força destruidora, e se transportar celeremente pelo campo de batalha </p>\r\n    </div>\r\n    <div class=\"col\" id=\"knight\" (click)=\"selectClass('knight')\">\r\n        <img src=\"assets/images/knight.png\" alt=\"\">\r\n        <p>Cavaleiro templário, de grande vigor e força física, contando ainda com o favor divino, para \r\n            usar sua espada com justiça, na defesa da virtude e da honra </p>\r\n    </div>\r\n</div>\r\n<div class=\"row\">\r\n    <button (click)=\"create()\" [disabled]=\"!character.class || !character.name\" class=\"btn btn-success btn-block\">Criar personagem</button>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/login/subscribe/character/character.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin: 15px;\n  padding: 15px;\n  display: block;\n  background-color: white;\n  color: black; }\n\n#knight, #mage {\n  border: 4px solid white;\n  margin: 15px; }\n  #knight img, #mage img {\n    width: 150px;\n    display: block;\n    margin: 5px auto; }\n\n#mage img {\n  width: 200px;\n  margin-bottom: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/login/subscribe/character/character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/features/login/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CharacterComponent = (function () {
    function CharacterComponent(loginService, route) {
        this.loginService = loginService;
        this.route = route;
        this.character = {
            name: '',
            class: ''
        };
    }
    CharacterComponent.prototype.ngOnInit = function () { };
    CharacterComponent.prototype.selectClass = function (string) {
        document.getElementById('knight').style.borderColor = 'white';
        document.getElementById('mage').style.borderColor = 'white';
        document.getElementById(string).style.borderColor = 'red';
        this.character.class = string;
    };
    CharacterComponent.prototype.create = function () {
        var _this = this;
        var user = JSON.parse(localStorage.getItem('userIncomplete'));
        user.character = this.character;
        this.loginService.create(user).subscribe(function (data) {
            console.log(data);
            alert('Criado com sucesso!');
            _this.route.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    CharacterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-character',
            template: __webpack_require__("../../../../../src/app/features/login/subscribe/character/character.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/login/subscribe/character/character.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], CharacterComponent);
    return CharacterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/login/subscribe/subscribe.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <h4 class=\"text-center\">Cadastrar</h4>\n  <div class=\"form-group\">\n    <label for=\"name\">Nome</label>\n    <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"user.name\" placeholder=\"Digite o nome aqui\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"email\">Email</label>\n    <input type=\"email\" class=\"form-control\" id=\"email\" name=\"email\" [(ngModel)]=\"user.email\" placeholder=\"Digite o email aqui\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"password\">Senha</label>\n    <input type=\"password\" class=\"form-control\" id=\"password\" name=\"password\" [(ngModel)]=\"user.password\" placeholder=\"Digite a senha aqui\">\n  </div>\n  <button class=\"btn btn-success btn-block\" (click)=\"create()\" [disabled]=\"!user.password || !user.name || !user.email\">Cadastrar</button>\n  <button class=\"btn btn-outline-info btn-block\" routerLink=\"/login\"> Voltar </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/features/login/subscribe/subscribe.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  margin: 15px;\n  padding: 15px;\n  display: block;\n  background-color: white;\n  color: black; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/login/subscribe/subscribe.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubscribeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubscribeComponent = (function () {
    function SubscribeComponent(route) {
        this.route = route;
        this.user = {
            name: '',
            email: '',
            password: '',
        };
    }
    SubscribeComponent.prototype.ngOnInit = function () {
    };
    SubscribeComponent.prototype.create = function () {
        localStorage.setItem('userIncomplete', JSON.stringify(this.user));
        this.route.navigate(['/character']);
    };
    SubscribeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-subscribe',
            template: __webpack_require__("../../../../../src/app/features/login/subscribe/subscribe.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/login/subscribe/subscribe.component.scss")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], SubscribeComponent);
    return SubscribeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/map-name/map-name.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n    <h1 class=\"text-center\">MAPA</h1>\n\n    <div class=\"form-group\">\n        <label for=\"name\">Nome do mapa</label>\n        <input type=\"text\" class=\"form-control\" id=\"name\" name=\"name\" [(ngModel)]=\"map.name\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"enigma\">Enigma</label>\n        <textarea class=\"form-control\" name=\"enigma\" [(ngModel)]=\"map.enigma\" id=\"enigma\" rows=\"3\"></textarea>\n\n    </div>\n    <div class=\"form-group\">\n        <label for=\"rows\">Nº de linhas</label>\n        <input type=\"number\" class=\"form-control\" min=\"1\" max=\"30\" id=\"rows\" name=\"rows\" [(ngModel)]=\"map.rows\">\n    </div>\n    <div class=\"form-group\">\n        <label for=\"cols\">Nº de colunas</label>\n        <input type=\"number\" class=\"form-control\" min=\"1\" max=\"30\" id=\"cols\" name=\"cols\" [(ngModel)]=\"map.cols\">\n    </div>\n    <button [disabled]=\"!map.name || !map.enigma || !map.cols || !map.rows\" class=\"btn btn-primary btn-block\" (click)=\"save()\">Continuar</button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/features/master/map-name/map-name.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  background-color: white;\n  color: black;\n  padding: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/master/map-name/map-name.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapNameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapNameComponent = (function () {
    function MapNameComponent(router) {
        this.router = router;
        this.map = {
            name: '',
            enigma: '',
            rows: 3,
            cols: 3,
        };
    }
    MapNameComponent.prototype.save = function () {
        if ((this.map.cols < 16 && this.map.cols > 2) && (this.map.rows < 16 && this.map.rows > 2)) {
            localStorage.setItem('map', JSON.stringify(this.map));
            this.router.navigate(['world']);
        }
        else {
            alert('Minimo de linhas e colunas 3x3 e máximo 30x30');
        }
    };
    MapNameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-map-name',
            template: __webpack_require__("../../../../../src/app/features/master/map-name/map-name.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/master/map-name/map-name.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], MapNameComponent);
    return MapNameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/map-name/map-name.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapNameModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__map_name_routing__ = __webpack_require__("../../../../../src/app/features/master/map-name/map-name.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__map_name_component__ = __webpack_require__("../../../../../src/app/features/master/map-name/map-name.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Angular Imports

// This Module's Components

var MapNameModule = (function () {
    function MapNameModule() {
    }
    MapNameModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__map_name_routing__["a" /* MapNameRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__map_name_component__["a" /* MapNameComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__map_name_component__["a" /* MapNameComponent */],
            ]
        })
    ], MapNameModule);
    return MapNameModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/map-name/map-name.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapNameRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__map_name_component__ = __webpack_require__("../../../../../src/app/features/master/map-name/map-name.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'mapname', component: __WEBPACK_IMPORTED_MODULE_0__map_name_component__["a" /* MapNameComponent */] },
];
var MapNameRoutingModule = (function () {
    function MapNameRoutingModule() {
    }
    MapNameRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        })
    ], MapNameRoutingModule);
    return MapNameRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/master.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n    Bem vindo professor!\n</p>\n<button class=\"btn btn-success btn-lg\" (click)=\"new()\">Novo MAPA</button>"

/***/ }),

/***/ "../../../../../src/app/features/master/master.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/master/master.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MasterComponent = (function () {
    function MasterComponent(router) {
        this.router = router;
    }
    MasterComponent.prototype.ngOnInit = function () {
    };
    MasterComponent.prototype.new = function () {
        this.router.navigate(['mapname']);
    };
    MasterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-master',
            template: __webpack_require__("../../../../../src/app/features/master/master.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/master/master.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], MasterComponent);
    return MasterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/master.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__world_world_module__ = __webpack_require__("../../../../../src/app/features/master/world/world.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__map_name_map_name_module__ = __webpack_require__("../../../../../src/app/features/master/map-name/map-name.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__master_routing__ = __webpack_require__("../../../../../src/app/features/master/master.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__master_component__ = __webpack_require__("../../../../../src/app/features/master/master.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var MasterModule = (function () {
    function MasterModule() {
    }
    MasterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__map_name_map_name_module__["a" /* MapNameModule */],
                __WEBPACK_IMPORTED_MODULE_0__world_world_module__["a" /* WorldModule */],
                __WEBPACK_IMPORTED_MODULE_2__master_routing__["a" /* MasterRoutingModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__master_component__["a" /* MasterComponent */]]
        })
    ], MasterModule);
    return MasterModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/master.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__master_component__ = __webpack_require__("../../../../../src/app/features/master/master.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_0__master_component__["a" /* MasterComponent */] },
];
var MasterRoutingModule = (function () {
    function MasterRoutingModule() {
    }
    MasterRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        })
    ], MasterRoutingModule);
    return MasterRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/master.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MasterService = (function () {
    function MasterService(http) {
        this.http = http;
    }
    MasterService.prototype.create = function (map) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http.post('http://localhost:3000/map/add', map, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MasterService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    MasterService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    MasterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MasterService);
    return MasterService;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/questions/questions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row justify-content-center\">\n        <div id=\"hint\" class=\"col-8\">\n            <div #divs *ngFor=\"let town of world.towns; let i = index;\" class=\"text-center\">\n                Cidade {{town.name}}\n                <br> Pergaminho\n                <button class=\"btn btn-sm btn-primary\" (click)=\"showHide(i)\">+</button>\n                <div style=\"display:none\" id=\"hint{{i}}\">\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" [(ngModel)]=\"hint\" name=\"hint\" rows=\"3\" placeholder=\"Digite o pergaminho\"></textarea>\n                    </div>\n                    <button class=\"btn btn-primary btn-block\" (click)=\"addHint(i)\">Adicionar pergaminho</button>\n                </div>\n                <div class=\" box\" *ngFor=\"let hint of town.hints;let j = index\">\n                    {{hint}}\n                    <button class=\"btn btn-danger btn-sm\" (click)=\"deleteHint(i, j)\">x</button>\n                </div>\n            </div>\n\n\n            <br>\n            <button class=\"btn btn-success btn-block\" (click)=\"finish()\">Continuar</button>\n            <br>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/master/questions/questions.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#hint {\n  color: black;\n  background-color: #fff; }\n\n.box {\n  margin: 10px;\n  border: .3px solid #ddd; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/master/questions/questions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__master_service__ = __webpack_require__("../../../../../src/app/features/master/master.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QuestionsComponent = (function () {
    function QuestionsComponent(config, modalService, masterService, route) {
        this.config = config;
        this.modalService = modalService;
        this.masterService = masterService;
        this.route = route;
        this.validQuestion = false;
        this.hint = '';
        config.closeOthers = true;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.world = JSON.parse(localStorage.getItem('world'));
        console.log(this.world);
    };
    QuestionsComponent.prototype.addHint = function (indexTown) {
        if (this.world.towns[indexTown].hints) {
            this.world.towns[indexTown].hints.push(this.hint);
        }
        else {
            this.world.towns[indexTown].hints = [];
            this.world.towns[indexTown].hints.push(this.hint);
        }
    };
    QuestionsComponent.prototype.deleteHint = function (indexTown, indexHint) {
        if (this.world.towns[indexTown].hints.length > 1) {
            this.world.towns[indexTown].hints.splice(indexHint, 1);
        }
        else {
            this.world.towns[indexTown].hints = [];
        }
    };
    QuestionsComponent.prototype.finish = function () {
        var _this = this;
        this.world.map = JSON.parse(localStorage.map);
        console.log(this.world);
        var finish = {
            name: this.world.map.name,
            enigma: this.world.map.enigma,
            numberOfColumns: this.world.numberOfColumns,
            numberOfRows: this.world.numberOfRows,
            contents: this.world.contents,
            towns: this.world.towns,
            idMaster: JSON.parse(localStorage.getItem('user'))._id,
            startPoint: {
                column: this.world.startPoint.column,
                row: this.world.startPoint.row
            },
            startGame: true
        };
        console.log(finish);
        localStorage.setItem('finish', JSON.stringify(finish));
        this.masterService.create(finish)
            .subscribe(function (data) {
            alert('Jogo criado com sucesso!');
            console.log('data' + data);
            _this.route.navigate(['/playermaster']);
        }, function (error) { return console.log('data' + error); });
    };
    QuestionsComponent.prototype.showHide = function (i) {
        if (this.divs.toArray()[i].nativeElement.childNodes[5].style.display == 'none') {
            this.divs.toArray()[i].nativeElement.childNodes[5].style.display = 'block';
        }
        else {
            this.divs.toArray()[i].nativeElement.childNodes[5].style.display = 'none';
        }
    };
    QuestionsComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_11" /* ViewChildren */])('divs'),
        __metadata("design:type", Object)
    ], QuestionsComponent.prototype, "divs", void 0);
    QuestionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-questions',
            template: __webpack_require__("../../../../../src/app/features/master/questions/questions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/master/questions/questions.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAccordionConfig */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */],
                __WEBPACK_IMPORTED_MODULE_0__master_service__["a" /* MasterService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["b" /* NgbAccordionConfig */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_0__master_service__["a" /* MasterService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/questions/questions.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__questions_routing__ = __webpack_require__("../../../../../src/app/features/master/questions/questions.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questions_component__ = __webpack_require__("../../../../../src/app/features/master/questions/questions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Angular Imports

// This Module's Components

var QuestionsModule = (function () {
    function QuestionsModule() {
    }
    QuestionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4__questions_routing__["a" /* QuestionsRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__questions_component__["a" /* QuestionsComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_6__questions_component__["a" /* QuestionsComponent */],
            ]
        })
    ], QuestionsModule);
    return QuestionsModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/questions/questions.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__questions_component__ = __webpack_require__("../../../../../src/app/features/master/questions/questions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'questions', component: __WEBPACK_IMPORTED_MODULE_0__questions_component__["a" /* QuestionsComponent */] },
];
var QuestionsRoutingModule = (function () {
    function QuestionsRoutingModule() {
    }
    QuestionsRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        })
    ], QuestionsRoutingModule);
    return QuestionsRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/world/world.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"background\" class=\"container background\">\n  <div id=\"matrix\" class=\"column\" *ngFor=\"let col of matrix;let colIndex = index\">\n    <div id=\"col{{colIndex}}row{{rowIndex}}\" class=\"water\" *ngFor=\"let row of matrix[colIndex]; let rowIndex = index\" (click)=\"getPlace(rowIndex, colIndex, content)\">\n\n    </div>\n  </div>\n\n  <div id=\"my-col\" class=\"my-col\">\n    <div>\n      <img id=\"forest\" (click)=\"pick('forest')\" class=\"img\" src=\"assets/images/forest.jpg\" alt=\"\">\n      <span> Floresta</span>\n    </div>\n    <div>\n      <img class=\"img\" id=\"desert\" (click)=\"pick('desert')\" src=\"assets/images/desert.jpg\" alt=\"\">\n      <span> Deserto</span>\n    </div>\n    <div>\n      <img class=\"img\" id=\"water\" (click)=\"pick('water')\" src=\"assets/images/water.jpg\" alt=\"\">\n      <span> Água</span>\n    </div>\n    <div>\n      <img class=\"img\" id=\"countryside\" (click)=\"pick('countryside')\" src=\"assets/images/countryside.jpg\" alt=\"\">\n      <span> Campo</span>\n    </div>\n    <div>\n      <img class=\"img\" id=\"town\" (click)=\"pick('town')\" src=\"assets/images/town.png\" alt=\"\">\n      <span> Cidade</span>\n\n    </div>\n    <div>\n      <button class=\"btn btn-block btn-primary\" (click)=\"getFinalMatrix()\">Finalizar mapa </button>\n\n    </div>\n\n  </div>\n  <div *ngIf=\"confirmVar\" class=\"my-col\">\n    Escolha a posição inicial <br/>\n    <button class=\"btn btn-primary btn-large\" (click)=\"confirm()\">Confirmar</button>\n  </div>\n  <div class=\"row\">\n    <div class=\"col\">\n      <ul>\n        <li *ngFor=\"let town of towns\">\n          {{town.number}}. {{town.name}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\">Modal title</h4>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n\n    <input type=\"text\" class=\"form-control\" id=\"town\" name=\"town\" [(ngModel)]=\"town.name\" placeholder=\"Nome da cidade\">\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" [disabled]=\"!town.name\" class=\"btn btn-success\" (click)=\"addTown()\">Adicionar cidade</button>\n    <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Cancelar</button>\n  </div>\n</ng-template>\n\n<!--<button class=\"btn btn-lg btn-outline-primary\" (click)=\"open(content)\">Launch demo modal</button>-->"

/***/ }),

/***/ "../../../../../src/app/features/master/world/world.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".background {\n  width: 90%;\n  margin: 20px auto;\n  display: block; }\n\n.my-col {\n  width: 200px;\n  display: block;\n  margin-left: 10px;\n  margin-top: 5px;\n  float: left; }\n  .my-col div {\n    display: block;\n    margin: 15px;\n    float: left; }\n    .my-col div img {\n      width: 50px;\n      display: block;\n      float: left; }\n    .my-col div span {\n      margin-left: 8px;\n      text-transform: uppercase;\n      height: 50px;\n      float: left;\n      display: block;\n      width: 50px;\n      line-height: 50px;\n      text-align: center;\n      font-weight: bold;\n      font-size: 21px; }\n\n.column {\n  margin: 0;\n  float: left;\n  width: 50px;\n  display: block; }\n\n.water {\n  margin: 0;\n  height: 50px;\n  border: 2px solid white;\n  padding: 0;\n  height: 50px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/water.jpg") + ");\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  display: block;\n  background-size: 100% 100%; }\n\n.forest {\n  border: 2px solid white;\n  padding: 0;\n  height: 50px;\n  width: 50px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/forest.jpg") + ");\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  display: block;\n  width: 100%;\n  background-size: 100% 100%; }\n\n.desert {\n  border: 2px solid white;\n  padding: 0;\n  height: 50px;\n  width: 50px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/desert.jpg") + ");\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  display: block;\n  background-size: 100% 100%; }\n\n.town {\n  border: 2px solid white;\n  padding: 0;\n  height: 50px;\n  width: 50px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/town.png") + ");\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  display: block;\n  background-size: 100% 100%; }\n\n.countryside {\n  padding: 0;\n  height: 50px;\n  width: 50px;\n  background: url(" + __webpack_require__("../../../../../src/assets/images/countryside.jpg") + ");\n  background-repeat: no-repeat;\n  background-origin: content-box;\n  background-size: 100% 100%;\n  border: 2px solid white;\n  display: block; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/master/world/world.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WorldComponent = (function () {
    function WorldComponent(modalService, modalActive, route) {
        this.modalService = modalService;
        this.modalActive = modalActive;
        this.route = route;
        this.matrix = [];
        this.place = 'forest';
        this.mark = { col: null, row: null };
        this.finalMatrix = [];
        this.towns = [];
        this.town = {
            name: '',
            col: '',
            row: '',
            number: 0
        };
        this.numberOfNextTown = 0;
        this.confirmVar = false;
    }
    WorldComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    WorldComponent.prototype.ngOnInit = function () {
        document.getElementById('forest').style.border = '2px solid white';
        this.map = JSON.parse(localStorage.getItem('map'));
        this.changeMatrix(this.map.rows, this.map.cols);
    };
    WorldComponent.prototype.changeMatrix = function (rowNumber, colNumber) {
        for (var i = 0; i < colNumber; i++) {
            var row = [];
            for (var j = 0; j < rowNumber; j++) {
                row.push('water');
            }
            this.matrix.push(row);
        }
    };
    WorldComponent.prototype.pick = function (place) {
        this.place = place;
        document.getElementById('town').style.border = 'none';
        document.getElementById('desert').style.border = 'none';
        document.getElementById('water').style.border = 'none';
        document.getElementById('forest').style.border = 'none';
        document.getElementById('countryside').style.border = 'none';
        document.getElementById(place).style.border = '2px solid white';
    };
    WorldComponent.prototype.selectStartCoordinates = function () {
        if (this.towns.length > 0) {
            document.getElementById("col" + this.col + "row" + this.row).innerHTML += "<img src=\"assets/images/start.png\" width=\"50px\"> ";
        }
        else {
            alert('Inclua ao menos uma cidade no mapa');
        }
    };
    WorldComponent.prototype.getPlace = function (row, col, content) {
        var _this = this;
        this.col = col;
        this.row = row;
        // console.log(this.matrix[col][row]);
        console.log("col" + col + "row" + row);
        var id = "col" + col + "row" + row;
        if (this.place === 'town') {
            for (var i = 0; i < this.towns.length; i++) {
                var town = this.towns[i];
                if (town.col == col && town.row == row) {
                    document.getElementById(id).innerHTML = '';
                    this.towns.splice(i, 1);
                }
            }
            this.modalRef = this.modalService.open(content);
            this.modalRef.result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (this.place == 'mark') {
            if (this.mark.col != null) {
                document.getElementById("col" + this.mark.col + "row" + this.mark.row).innerHTML = '';
            }
            this.mark.col = this.col;
            this.mark.row = this.row;
            document.getElementById("col" + this.col + "row" + this.row).innerHTML = "<img src=\"assets/images/start.png\" width=\"50px\" style=\"margin-top:-30px\"> ";
            document.getElementById("col" + this.col + "row" + this.row).innerHTML = "";
            document.getElementById("col" + this.col + "row" + this.row).innerHTML = "<img src=\"assets/images/start.png\" width=\"50px\"> ";
        }
        else {
            document.getElementById(id).className = this.place;
        }
    };
    WorldComponent.prototype.getFinalMatrix = function () {
        var rows = [];
        console.log(this.map);
        for (var i = 0; i < this.map.rows; i++) {
            var row = [];
            for (var j = 0; j < this.map.cols; j++) {
                row.push(document.getElementById("col" + j + "row" + i).className);
            }
            rows.push(row);
        }
        this.finalMatrix = rows;
        if (this.towns.length > 0) {
            document.getElementById('my-col').innerHTML = "";
            this.place = 'mark';
            this.confirmVar = true;
        }
        else {
            alert('Posicione ao menos uma cidade');
        }
        console.log(this.towns);
    };
    WorldComponent.prototype.confirm = function () {
        console.log(this.mark);
        if (this.mark.col != null) {
            if (this.finalMatrix[this.mark.row][this.mark.col] != 'water') {
                var world = {
                    numberOfColumns: this.map.cols,
                    numberOfRows: this.map.rows,
                    contents: this.finalMatrix,
                    towns: this.towns,
                    startPoint: {
                        column: this.mark.col,
                        row: this.mark.row,
                    }
                };
                // console.log(world);
                localStorage.setItem('world', JSON.stringify(world));
                this.route.navigate(['/questions']);
            }
            else {
                alert('O jogo não pode ser iniciado na água');
            }
        }
        else {
            alert('Escolha um local para iniciar');
        }
    };
    WorldComponent.prototype.addTown = function () {
        if (this.town) {
            var id = "col" + this.col + "row" + this.row;
            console.log(id);
            this.town.col = this.col;
            this.town.row = this.row;
            this.towns.push(this.town);
            this.numberOfNextTown++;
            // this.modalActive.dismiss('Cross click');
            document.getElementById(id).innerHTML = '' + (this.town.number);
            document.getElementById(id).className = this.place;
            this.town = {
                name: '',
                col: '',
                row: '',
                number: this.numberOfNextTown
            };
            this.modalRef.close('Close click');
        }
        else {
            alert('Digite o nome da cidade');
        }
    };
    WorldComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-world',
            template: __webpack_require__("../../../../../src/app/features/master/world/world.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/master/world/world.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */],
                __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["c" /* NgbActiveModal */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]])
    ], WorldComponent);
    return WorldComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/world/world.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__world_routing__ = __webpack_require__("../../../../../src/app/features/master/world/world.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__world_component__ = __webpack_require__("../../../../../src/app/features/master/world/world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// Angular Imports

// This Module's Components


var WorldModule = (function () {
    function WorldModule() {
    }
    WorldModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__world_routing__["a" /* WorldRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["e" /* NgbModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__world_component__["a" /* WorldComponent */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__world_component__["a" /* WorldComponent */],
            ]
        })
    ], WorldModule);
    return WorldModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/master/world/world.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorldRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__world_component__ = __webpack_require__("../../../../../src/app/features/master/world/world.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'world', component: __WEBPACK_IMPORTED_MODULE_0__world_component__["a" /* WorldComponent */] },
];
var WorldRoutingModule = (function () {
    function WorldRoutingModule() {
    }
    WorldRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
        })
    ], WorldRoutingModule);
    return WorldRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/masterPlayer.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nava\">\n  <a class=\"left active\" routerLink=\"/mastering\">Mestrar</a>\n  <a class=\"left\" routerLink=\"/playing\">Jogar</a>\n  <a class=\"right\" (click)=\"logout()\">Sair</a>\n</nav>\n\n\n<div id=\"container\" class=\"row\">\n  <div class=\"col\">\n    <a class=\"btn btn-warning btn-block\" routerLink=\"/mapname\"> Criar novo jogo</a>\n      <div class=\"games\" *ngFor=\"let item of games;\">\n        <b>{{item.name}}</b> \n       <br>\n        {{item.subject}}\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/masterPlayer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  height: 44px;\n  background-color: #0275d8 !important; }\n  nav a {\n    padding: 10px;\n    color: white; }\n\n.active {\n  font-weight: bold;\n  background-color: gray; }\n\nnav .left {\n  float: left; }\n\nnav .right {\n  float: right; }\n\n#container {\n  width: 100%;\n  margin: 0px auto;\n  padding: 15px;\n  background-color: white;\n  color: black; }\n\n.games {\n  margin-top: 10px;\n  display: block;\n  text-align: center;\n  border: 1px solid gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/masterPlayer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPlayerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__masterPlayer_service__ = __webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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



var MasterPlayerComponent = (function () {
    function MasterPlayerComponent(route, masterService) {
        this.route = route;
        this.masterService = masterService;
    }
    MasterPlayerComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.list();
    };
    MasterPlayerComponent.prototype.list = function () {
        var _this = this;
        this.masterService.list(this.user._id)
            .subscribe(function (data) {
            console.log(data.data);
            _this.games = data.data;
        }, function (error) { return console.log(error); });
    };
    MasterPlayerComponent.prototype.logout = function () {
        localStorage.clear();
        this.route.navigate(['/login']);
    };
    MasterPlayerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-masterPlayer',
            template: __webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__masterPlayer_service__["a" /* MasterPlayerService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__masterPlayer_service__["a" /* MasterPlayerService */]])
    ], MasterPlayerComponent);
    return MasterPlayerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/masterPlayer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPlayerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__masterPlayer_component__ = __webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mastering_mastering_component__ = __webpack_require__("../../../../../src/app/features/masterPlayer/mastering/mastering.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__masterPlayer_routing__ = __webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__playing_playing_component__ = __webpack_require__("../../../../../src/app/features/masterPlayer/playing/playing.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var MasterPlayerModule = (function () {
    function MasterPlayerModule() {
    }
    MasterPlayerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__masterPlayer_routing__["a" /* MasterPlayerRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__masterPlayer_component__["a" /* MasterPlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_6__playing_playing_component__["a" /* PlayingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__mastering_mastering_component__["a" /* MasteringComponent */]
            ]
        })
    ], MasterPlayerModule);
    return MasterPlayerModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/masterPlayer.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPlayerRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__masterPlayer_component__ = __webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playing_playing_component__ = __webpack_require__("../../../../../src/app/features/masterPlayer/playing/playing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mastering_mastering_component__ = __webpack_require__("../../../../../src/app/features/masterPlayer/mastering/mastering.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'playermaster', component: __WEBPACK_IMPORTED_MODULE_2__masterPlayer_component__["a" /* MasterPlayerComponent */] },
    { path: 'playing', component: __WEBPACK_IMPORTED_MODULE_3__playing_playing_component__["a" /* PlayingComponent */] },
    { path: 'mastering', component: __WEBPACK_IMPORTED_MODULE_4__mastering_mastering_component__["a" /* MasteringComponent */] },
];
var MasterPlayerRoutingModule = (function () {
    function MasterPlayerRoutingModule() {
    }
    MasterPlayerRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]],
        })
    ], MasterPlayerRoutingModule);
    return MasterPlayerRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/masterPlayer.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterPlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MasterPlayerService = (function () {
    function MasterPlayerService(http) {
        this.http = http;
    }
    MasterPlayerService.prototype.list = function (idMaster) {
        return this.http.get("http://localhost:3000/map/list/" + idMaster)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MasterPlayerService.prototype.listAll = function () {
        return this.http.get("http://localhost:3000/map/list")
            .map(this.extractData)
            .catch(this.handleError);
    };
    MasterPlayerService.prototype.extractData = function (res) {
        var body = res.json();
        return body;
    };
    MasterPlayerService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["f" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(errMsg);
    };
    MasterPlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], MasterPlayerService);
    return MasterPlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/mastering/mastering.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/mastering/mastering.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  mastering works!\n</p>"

/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/mastering/mastering.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasteringComponent; });
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

var MasteringComponent = (function () {
    function MasteringComponent() {
    }
    MasteringComponent.prototype.ngOnInit = function () {
    };
    MasteringComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mastering',
            template: __webpack_require__("../../../../../src/app/features/masterPlayer/mastering/mastering.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/masterPlayer/mastering/mastering.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MasteringComponent);
    return MasteringComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/playing/playing.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"nava\">\n  <a class=\"left \" routerLink=\"/playermaster\">Mestrar</a>\n  <a class=\"left active\" routerLink=\"/playing\">Jogar</a>\n  <a class=\"right\" (click)=\"logout()\">Sair</a>\n</nav>\n\n\n<div id=\"container\" class=\"row\">\n  <div class=\"col\">\n      <div class=\"games\" *ngFor=\"let item of games;\" (click)=\"getData(item)\">\n        <b>{{item.name}}</b> \n       <br>\n        {{item.subject}}\n      </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/playing/playing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  height: 44px;\n  background-color: #0275d8 !important; }\n  nav a {\n    padding: 10px;\n    color: white; }\n\n.active {\n  font-weight: bold;\n  background-color: gray; }\n\nnav .left {\n  float: left; }\n\nnav .right {\n  float: right; }\n\n#container {\n  width: 100%;\n  margin: 0px auto;\n  padding: 15px;\n  background-color: white;\n  color: black; }\n\n.games {\n  margin-top: 10px;\n  display: block;\n  text-align: center;\n  border: 1px solid gray; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/masterPlayer/playing/playing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__masterPlayer_service__ = __webpack_require__("../../../../../src/app/features/masterPlayer/masterPlayer.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
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



var PlayingComponent = (function () {
    function PlayingComponent(route, masterService) {
        this.route = route;
        this.masterService = masterService;
    }
    PlayingComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem('user'));
        this.list();
    };
    PlayingComponent.prototype.list = function () {
        var _this = this;
        this.masterService.listAll()
            .subscribe(function (data) {
            console.log(data);
            _this.games = data;
        }, function (error) { return console.log(error); });
    };
    PlayingComponent.prototype.getData = function (data) {
        window.location.replace('http://localhost:3001/gametime');
        localStorage.setItem('gameData', JSON.stringify(data));
        localStorage.setItem('startPlaying', 'true');
    };
    PlayingComponent.prototype.logout = function () {
        localStorage.clear();
        this.route.navigate(['/login']);
    };
    PlayingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-playing',
            template: __webpack_require__("../../../../../src/app/features/masterPlayer/playing/playing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/masterPlayer/playing/playing.component.scss")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_0__masterPlayer_service__["a" /* MasterPlayerService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__masterPlayer_service__["a" /* MasterPlayerService */]])
    ], PlayingComponent);
    return PlayingComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/images/countryside.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "countryside.64f6cd7d62d9cd244254.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/desert.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "desert.c906062ac153be8d5d7c.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/forest.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "forest.56e943c752c358f836aa.jpg";

/***/ }),

/***/ "../../../../../src/assets/images/town.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "town.847cebada21368d592a2.png";

/***/ }),

/***/ "../../../../../src/assets/images/water.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "water.a9789c8756e8affe4ea5.jpg";

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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map