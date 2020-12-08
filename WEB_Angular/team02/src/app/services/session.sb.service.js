"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SessionSbService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var SessionSbService = /** @class */ (function () {
    function SessionSbService(http, router) {
        this.http = http;
        this.router = router;
        this.BACKEND_AUTH_URL = "http://localhost:8080/authenticate";
        this.currentUserName = null;
        this.errorMessage = null;
        this.getTokenFromSessionStorage();
    }
    SessionSbService.prototype.isAuthenticated = function () {
        return this.currentUserName != null;
    };
    SessionSbService.prototype.signIn = function (eMail, password, targetUrl) {
        var _this = this;
        console.log("login " + eMail + "/" + password);
        var signInResponse = this.http.post(http_1.HttpResponse < User >> (this.BACKEND_AUTH_URL + "authenticate/login",
            { eMail: email, passWord: password },
            { observe: "response" }).pipe(operators_1.shareReplay(1)));
        signInResponse
            .subscribe(function (response) {
            console.log(response);
            _this.saveTokenIntoSessionStorage(response.headers.get('Authorization'), (response.body.name));
            _this.router.navigate([targetUrl || '/']);
        }, function (error) {
            console.log(error);
            _this.saveTokenIntoSessionStorage(null, null);
            _this.setError(error.error.message);
        });
        return signInResponse;
    };
    SessionSbService.prototype.signOff = function () {
        this.saveTokenIntoSessionStorage(null, null);
    };
    // @ts-ignore
    SessionSbService.prototype.getTokenFromSessionStorage = function () {
        var token = sessionStorage.getItem(this.BS_TOKEN_NAME);
        if (token == null) {
            token = localStorage.getItem(this.BS_TOKEN_NAME);
            sessionStorage.setItem(this.BS_TOKEN_NAME, token);
        }
        if (token != null) {
            var tokenParts = token.split('/');
            this.currentUserName = tokenParts[1];
            return tokenParts[0];
        }
        return null;
    };
    SessionSbService.prototype.saveTokenIntoSessionStorage = function (token, username) {
        var namedToken = token + '/' + username;
        var oldTokenSession = sessionStorage.getItem(this.BS_TOKEN_NAME);
        if (namedToken == oldTokenSession) {
            return;
        }
        console.log("New token for " + username + ": " + token);
        if (token == null) {
            this.currentUserName = null;
            var oldLocalToken = localStorage.getItem(this.BS_TOKEN_NAME);
            sessionStorage.removeItem(this.BS_TOKEN_NAME);
            if (oldTokenSession == oldLocalToken) {
                localStorage.removeItem(this.BS_TOKEN_NAME);
            }
        }
        else {
            this.currentUserName = username;
            sessionStorage.setItem(this.BS_TOKEN_NAME, namedToken);
            localStorage.setItem(this.BS_TOKEN_NAME, namedToken);
        }
    };
    SessionSbService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SessionSbService);
    return SessionSbService;
}());
exports.SessionSbService = SessionSbService;
this.errorMessage = msg;
