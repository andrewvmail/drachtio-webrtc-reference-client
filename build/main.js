webpackJsonp([0],{

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 162:
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
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrarTabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialer_dialer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrarTabsPage = /** @class */ (function () {
    function RegistrarTabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.dialer = __WEBPACK_IMPORTED_MODULE_1__dialer_dialer__["a" /* DialerPage */];
        this.settings = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    RegistrarTabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab tabTitle="Dialer" tabIcon="call" [root]="dialer"></ion-tab>\n  <ion-tab tabTitle="Settings" tabIcon="settings" [root]="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], RegistrarTabsPage);
    return RegistrarTabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_tags__ = __webpack_require__(26);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DialerPage = /** @class */ (function (_super) {
    __extends(DialerPage, _super);
    function DialerPage(cdr, controller) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        return _this;
    }
    DialerPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-dialer",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/dialer/dialer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{registered ? \'Registered as \' + (name || authUsername) : \'Not Registered\' }}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n    <audio id="remoteAudio"></audio>\n    <ion-item>\n      <ion-input class="text--large"\n                 type="text"\n                 value="{{toCall}}"\n                 placeholder="Enter a number or name"\n                 (blur)="saveInput({target: \'toCall\', value: $event.target.value})">\n      </ion-input>\n    </ion-item>\n    <!--<img class="momo" width="100%" src="../assets/imgs/momo.jpeg" />-->\n</ion-content>\n\n\n<ion-footer no-border>\n  <button class="btn--no-border" color="secondary" full large ion-button item-end\n          (click)="registered ? unregister() : register()"\n  >\n    {{registered ? \'Unregister\' : \'Register\' }}\n  </button>\n  <button class="btn--no-border" full large ion-button item-end (click)="call()">Call</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/dialer/dialer.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["connect"])({
            name: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["username"]),
            authUsername: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["settings.username"]),
            toCall: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["toCall"]),
            registered: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["registered"]),
            call: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["call"]),
            register: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["register"]),
            unregister: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["unregister"]),
            saveInput: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["saveInput"])
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"]) === "function" && _a || Object])
    ], DialerPage);
    return DialerPage;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["CerebralComponent"]));

//# sourceMappingURL=dialer.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_tags__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menu__ = __webpack_require__(216);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SettingsPage = /** @class */ (function (_super) {
    __extends(SettingsPage, _super);
    function SettingsPage(cdr, controller, popoverCtrl) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        _this.popoverCtrl = popoverCtrl;
        return _this;
    }
    SettingsPage.prototype.presentRadioPopover = function (ev) {
        this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__menu__["a" /* SettingsMenu */]).present({
            ev: ev
        });
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-settings",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/settings/settings.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Settings</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentRadioPopover($event)">\n        <ion-icon name="more"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content class="outer-content">\n\n  <ion-list>\n    <ion-list-header>\n      Settings\n    </ion-list-header>\n\n    <button ion-item>\n      <ion-icon name="globe" item-start color="primary"\n               ></ion-icon>\n      <ion-label>Server</ion-label>\n      <ion-input text-right item-end value="{{server}}"\n                 (blur)="saveInput({target: \'settings.server\', value: $event.target.value})"\n      ></ion-input>\n    </button>\n\n    <button ion-item>\n      <ion-icon name="globe" item-start color="primary"></ion-icon>\n      <ion-label>Domain</ion-label>\n      <ion-input text-right item-end value="{{domain}}"\n                 (blur)="saveInput({target: \'settings.domain\', value: $event.target.value})"\n      ></ion-input>\n    </button>\n\n    <button ion-item>\n      <ion-icon name="person" item-start color="primary"></ion-icon>\n      <ion-label>Auth Username</ion-label>\n      <ion-input text-right item-end value="{{username}}"\n                 (blur)="saveInput({target: \'settings.username\', value: $event.target.value})"\n\n      ></ion-input>\n    </button>\n\n    <button ion-item>\n      <ion-icon name="wifi" item-start color="primary"></ion-icon>\n      <ion-label>Password</ion-label>\n      <ion-input text-right item-end value="{{password}}"\n                 (blur)="saveInput({target: \'settings.password\', value: $event.target.value})"\n\n      ></ion-input>\n    </button>\n\n    <ion-item-divider>\n     Ice Options\n    </ion-item-divider>\n\n    <ion-row *ngFor="let iceServer of iceServers; let index = index;">\n      <ion-col col-5>\n        <ion-item class="padding-left-2px">\n          <ion-label floating>STUN/TURN URI: </ion-label>\n          <ion-input\n            (blur)="saveInput({target: \'settings.iceServers.\' + index + \'.url\', value: $event.target.value})"\n                     type="text" value="{{iceServer.url}}">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <ion-item class="padding-left-2px">\n          <ion-label floating>Username</ion-label>\n          <ion-input\n            (blur)="saveInput({target: \'settings.iceServers.\' + index + \'.username\', value: $event.target.value})"\n                     type="text" value="{{iceServer.username}}">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-3>\n        <ion-item class="padding-left-2px">\n          <ion-label floating>Credential</ion-label>\n          <ion-input\n            (blur)="saveInput({target: \'settings.iceServers.\' + index + \'.credential\', value: $event.target.value})"\n                     type="text" value="{{iceServer.credential}}">\n          </ion-input>\n        </ion-item>\n      </ion-col>\n      <ion-col col-1>\n        <ion-icon (click)="deleteIceServer({index: index})" name="close-circle" style="position: absolute; bottom: 0.5em; font-size: 2em;"\n                  item-start color="primary"></ion-icon>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/settings/settings.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["connect"])({
            server: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["settings.server"]),
            domain: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["settings.domain"]),
            username: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["settings.username"]),
            password: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["settings.password"]),
            iceServers: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["settings.iceServers"]),
            saveInput: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["saveInput"]),
            addIceServer: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["addIceServer"]),
            deleteIceServer: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["deleteIceServer"]),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* PopoverController */]])
    ], SettingsPage);
    return SettingsPage;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["CerebralComponent"]));

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_tags__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__libraries_we_use_libraries_we_use__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__about_about__ = __webpack_require__(218);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsMenu = /** @class */ (function (_super) {
    __extends(SettingsMenu, _super);
    function SettingsMenu(cdr, controller, navCtrl) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        _this.navCtrl = navCtrl;
        return _this;
    }
    SettingsMenu.prototype.navigate = function (component) {
        if (component === "about") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__about_about__["a" /* About */]);
            return;
        }
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__libraries_we_use_libraries_we_use__["a" /* LibrariesWeUse */]);
    };
    SettingsMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n    <ion-list>\n    <ion-list-header color=\"primary\">Menu</ion-list-header>\n    <button ion-item (tap)=\"addIceServer()\">\n      <ion-icon name=\"add\" item-start></ion-icon>Add an Ice Server\n    </button>\n    <button ion-item (tap)=\"navigate()\">\n      <ion-icon name=\"book\" item-start></ion-icon>\n      Libraries We Use\n    </button>\n    <button ion-item (tap)=\"navigate('about')\">\n      <ion-icon name=\"information\" item-start></ion-icon>\n      About\n    </button>\n    </ion-list>\n  "
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["connect"])({
            addIceServer: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["addIceServer"])
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* NavController */]])
    ], SettingsMenu);
    return SettingsMenu;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["CerebralComponent"]));

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LibrariesWeUse; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LibrariesWeUse = /** @class */ (function () {
    function LibrariesWeUse() {
    }
    LibrariesWeUse = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-libraries-we-use",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/libraries-we-use/libraries-we-use.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Libraries We Use</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="outer-content">\n  <h3 ion-text color="primary">Ionic</h3>\n  <p ion-text color="secondary">Copyright 2015-present Drifty Co.\n    http://drifty.com/\n\n    MIT License\n\n    Permission is hereby granted, free of charge, to any person obtaining\n    a copy of this software and associated documentation files (the\n    "Software"), to deal in the Software without restriction, including\n    without limitation the rights to use, copy, modify, merge, publish,\n    distribute, sublicense, and/or sell copies of the Software, and to\n    permit persons to whom the Software is furnished to do so, subject to\n    the following conditions:\n\n    The above copyright notice and this permission notice shall be\n    included in all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,\n    EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n    MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n    NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE\n    LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION\n    OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION\n    WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>\n\n  <h3 ion-text color="primary">Cerebral</h3>\n  <p ion-text color="secondary">\n    Copyright (c) 2016 Cerebral\n\n    Permission is hereby granted, free of charge, to any person obtaining a copy\n    of this software and associated documentation files (the "Software"), to deal\n    in the Software without restriction, including without limitation the rights\n    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n    copies of the Software, and to permit persons to whom the Software is\n    furnished to do so, subject to the following conditions:\n\n    The above copyright notice and this permission notice shall be included in all\n    copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\n    SOFTWARE.</p>\n\n  <h3 ion-text color="primary">cordova-plugin-iosrtc</h3>\n  <p ion-text color="secondary">\n    The MIT License (MIT)\n\n    Copyright (c) 2015-2017 eFace2Face, Inc. (https://eface2face.com)\n    Copyright (c) 2017 BasqueVoIPMafia (https://github.com/BasqueVoIPMafia)\n\n    Permission is hereby granted, free of charge, to any person obtaining a copy\n    of this software and associated documentation files (the "Software"), to deal\n    in the Software without restriction, including without limitation the rights\n    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n    copies of the Software, and to permit persons to whom the Software is\n    furnished to do so, subject to the following conditions:\n\n    The above copyright notice and this permission notice shall be included in\n    all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n    THE SOFTWARE.</p>\n\n\n  <h3 ion-text color="primary">WebRTC</h3>\n  <p ion-text color="secondary">\n    Copyright (c) 2011, The WebRTC project authors. All rights reserved.\n\n    Redistribution and use in source and binary forms, with or without\n    modification, are permitted provided that the following conditions are\n    met:\n\n    * Redistributions of source code must retain the above copyright\n    notice, this list of conditions and the following disclaimer.\n\n    * Redistributions in binary form must reproduce the above copyright\n    notice, this list of conditions and the following disclaimer in\n    the documentation and/or other materials provided with the\n    distribution.\n\n    * Neither the name of Google nor the names of its contributors may\n    be used to endorse or promote products derived from this software\n    without specific prior written permission.\n\n    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS\n    "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT\n    LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR\n    A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT\n    HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,\n    SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT\n    LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,\n    DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY\n    THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE\n    OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.</p>\n\n\n  <h3 ion-text color="primary">SIP.js</h3>\n  <p ion-text color="secondary">\n    Copyright (c) 2018 Junction Networks, Inc. http://www.onsip.com\n\n    The MIT License\n    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n    NOTE: The original MIT License text can be found at opensource.org.\n\n    ** SIP.js contains substantial portions of the JsSIP software under the following license: **\n\n    Copyright (c) 2012-2013 José Luis Millán - Versatica http://www.versatica.com\n\n    License: The MIT License\n\n    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\n    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\n    THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n    ** end JsSIP license **</p>\n\n\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/libraries-we-use/libraries-we-use.html"*/,
        })
    ], LibrariesWeUse);
    return LibrariesWeUse;
}());

//# sourceMappingURL=libraries-we-use.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var About = /** @class */ (function () {
    function About() {
    }
    About = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-about",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/about/about.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle left>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-grid>\n    <ion-row>\n      <p padding>Version: 1.0.0</p>\n    </ion-row>\n    <ion-row>\n      <p padding>iOS WebRTC: GoogleWebRTC-1.1.25102</p>\n    </ion-row>\n    <ion-row>\n      <p padding>SIP.js: 0.11.3</p>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/about/about.html"*/,
        })
    ], About);
    return About;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_cerebral_tags__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(37);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalPage = /** @class */ (function (_super) {
    __extends(ModalPage, _super);
    function ModalPage(cdr, controller, viewCtrl) {
        var _this = _super.call(this, cdr, controller) || this;
        _this.cdr = cdr;
        _this.controller = controller;
        _this.viewCtrl = viewCtrl;
        return _this;
    }
    ModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "page-in-call-modal",template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/in-call-modal/in-call-modal.html"*/'<ion-content padding>\n  <ion-grid>\n    <h1 ion-text color="primary">{{name}}</h1>\n    <h3 *ngIf="type === \'incoming\'" ion-text color="secondary">\n      {{ connected ? "Connected" : "Incoming Call" }}\n    </h3>\n    <h3 *ngIf="type === \'outgoing\'" ion-text color="secondary">\n      {{ connected ? "Connected" : "Outgoing Call" }}\n    </h3>\n  </ion-grid>\n</ion-content>\n\n<ion-footer no-border>\n\n  <ion-grid  *ngIf="!connected && type === \'incoming\'">\n    <ion-row>\n      <ion-col col-6>\n        <button (click)="answer()" color="primary" ion-button full large>\n          Answer\n        </button>\n      </ion-col>\n      <ion-col col-6>\n        <button (click)="hangup()" color="secondary" ion-button full large>\n          Hang-up\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <button *ngIf="connected || type === \'outgoing\'" (click)="hangup()" color="secondary" ion-button full large>\n    Hang-up\n  </button>\n</ion-footer>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/pages/in-call-modal/in-call-modal.html"*/,
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ChangeDetectionStrategy */].OnPush
        }),
        Object(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["connect"])({
            name: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["call.name"]),
            connected: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["call.connected"]),
            type: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["c" /* state */])(["call.type"]),
            answer: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["answer"]),
            hangup: Object(__WEBPACK_IMPORTED_MODULE_2_cerebral_tags__["b" /* signal */])(["hangup"]),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* ChangeDetectorRef */], typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["ControllerService"]) === "function" && _a || Object, __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* ViewController */]])
    ], ModalPage);
    return ModalPage;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_1__cerebral_angular__["CerebralComponent"]));

//# sourceMappingURL=in-call-modal.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return callSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return registerSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return unregisterSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return onInvite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return hangupSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return answerSequence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return onAccepted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return onTerminated; });
/* unused harmony export onBye */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return onRejected; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return onCancel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return onRegistrationFailed; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral_operators__ = __webpack_require__(320);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral_tags__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__actions__ = __webpack_require__(338);



var callSequence = [
    __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* checkSettings */],
    {
        next: [
            Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.type"]), "outgoing"),
            Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.name"]), Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["toCall"])),
            __WEBPACK_IMPORTED_MODULE_2__actions__["e" /* decideWhatToDo */],
            {
                setToCallWithLastRedialed: [
                    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["toCall"]), Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["lastDialed"]))
                ],
                doNothing: [],
                call: [
                    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["lastDialed"]), Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["toCall"])),
                    __WEBPACK_IMPORTED_MODULE_2__actions__["b" /* call */],
                    {
                        next: [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["toCall"]), "")],
                        error: [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["toCall"]), "")]
                    },
                    __WEBPACK_IMPORTED_MODULE_2__actions__["g" /* openInCallModal */],
                    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), false)
                ]
            }
        ],
        checkSettings: []
    }
];
var registerSequence = [
    __WEBPACK_IMPORTED_MODULE_2__actions__["c" /* checkSettings */],
    {
        next: [
            __WEBPACK_IMPORTED_MODULE_2__actions__["h" /* register */],
            {
                next: [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["registered"]), true)],
                error: []
            }
        ],
        checkSettings: []
    }
];
var unregisterSequence = [__WEBPACK_IMPORTED_MODULE_2__actions__["j" /* unregister */]];
var onInvite = [
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.type"]), "incoming"),
    __WEBPACK_IMPORTED_MODULE_2__actions__["i" /* setCallName */],
    __WEBPACK_IMPORTED_MODULE_2__actions__["g" /* openInCallModal */]
];
var hangupSequence = [
    __WEBPACK_IMPORTED_MODULE_2__actions__["f" /* hangup */],
    __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* closeModal */],
    Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), false)
];
var answerSequence = [__WEBPACK_IMPORTED_MODULE_2__actions__["a" /* answer */], Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), true)];
var onAccepted = [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), true)];
var onTerminated = [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), false), __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* closeModal */]];
var onBye = [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), false), __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* closeModal */]];
var onRejected = [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), false), __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* closeModal */]];
var onCancel = [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["call.connected"]), false), __WEBPACK_IMPORTED_MODULE_2__actions__["d" /* closeModal */]];
var onRegistrationFailed = [Object(__WEBPACK_IMPORTED_MODULE_0_cerebral_operators__["a" /* set */])(Object(__WEBPACK_IMPORTED_MODULE_1_cerebral_tags__["c" /* state */])(["registered"]), false)];
//# sourceMappingURL=sequences.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    defaultIceServers: [
        { url: "stun:stun.l.google.com:19302", username: "", credential: "" }
    ]
});
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export configureController */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cerebral_angular__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cerebral_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__cerebral_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dialer_dialer__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_in_call_modal_in_call_modal__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_settings_menu__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_libraries_we_use_libraries_we_use__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_about__ = __webpack_require__(218);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















function configureController(modal, toast) {
    var cerebral = Object(__WEBPACK_IMPORTED_MODULE_12__main__["a" /* cerebralFactory */])(modal, toast);
    return new __WEBPACK_IMPORTED_MODULE_5__cerebral_angular__["ControllerService"](cerebral, {});
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* RegistrarTabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dialer_dialer__["a" /* DialerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_in_call_modal_in_call_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_menu__["a" /* SettingsMenu */],
                __WEBPACK_IMPORTED_MODULE_13__pages_libraries_we_use_libraries_we_use__["a" /* LibrariesWeUse */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* About */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                })],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_tabs_tabs__["a" /* RegistrarTabsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dialer_dialer__["a" /* DialerPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_in_call_modal_in_call_modal__["a" /* ModalPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_settings_menu__["a" /* SettingsMenu */],
                __WEBPACK_IMPORTED_MODULE_13__pages_libraries_we_use_libraries_we_use__["a" /* LibrariesWeUse */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_about__["a" /* About */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__cerebral_angular__["ControllerService"],
                    useFactory: configureController,
                    deps: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* ToastController */]]
                },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 314:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* RegistrarTabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/app/app.html"*/'<ion-nav #mycontent [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/andrew/projects/drachtio-webrtc-reference-client/client/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = cerebralFactory;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cerebral_storage__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__cerebral_storage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__cerebral_storage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_Sip__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sequences__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_Modal__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_Toast__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__(223);








var urlParams = new URLSearchParams(window.location.search);
var username = urlParams.get("username");
function cerebralFactory(modal, toast) {
    return Object(__WEBPACK_IMPORTED_MODULE_1_cerebral__["Module"])({
        state: {
            settings: {
                server: "127.0.0.1",
                domain: "ctel.com",
                username: "1234",
                password: "1234",
                iceServers: __WEBPACK_IMPORTED_MODULE_6__config__["a" /* default */].defaultIceServers
                // autoRegister: true,
            },
            lastDialed: "",
            toCall: "",
            registered: false,
            username: username || "",
            call: {
                type: "",
                name: "",
                connected: false
            }
        },
        catch: [],
        providers: {
            toast: Object(__WEBPACK_IMPORTED_MODULE_5__providers_Toast__["a" /* default */])(toast),
            modal: Object(__WEBPACK_IMPORTED_MODULE_4__providers_Modal__["a" /* default */])(modal),
            sip: Object(__WEBPACK_IMPORTED_MODULE_2__providers_Sip__["a" /* default */])({
                onAccepted: __WEBPACK_IMPORTED_MODULE_3__sequences__["d" /* onAccepted */],
                onRejected: __WEBPACK_IMPORTED_MODULE_3__sequences__["h" /* onRejected */],
                onFailed: __WEBPACK_IMPORTED_MODULE_3__sequences__["e" /* onCancel */],
                onConnecting: [],
                onTerminated: __WEBPACK_IMPORTED_MODULE_3__sequences__["i" /* onTerminated */],
                onCancel: __WEBPACK_IMPORTED_MODULE_3__sequences__["e" /* onCancel */],
                onRegistrationFailed: __WEBPACK_IMPORTED_MODULE_3__sequences__["g" /* onRegistrationFailed */],
                onRefer: [],
                onBye: __WEBPACK_IMPORTED_MODULE_3__sequences__["e" /* onCancel */],
                onProgress: [],
                onDtmf: [],
                // onMuted: [],
                // onUnmuted: [],
                onInfo: [],
                onInvite: __WEBPACK_IMPORTED_MODULE_3__sequences__["f" /* onInvite */]
            })
        },
        signals: {
            saveInput: [
                function saveInput(_a) {
                    var props = _a.props, state = _a.state;
                    state.set(props.target, props.value);
                }
            ],
            addIceServer: [
                function addIceServer(_a) {
                    var state = _a.state;
                    var iceServers = state.get("settings.iceServers");
                    iceServers.push({
                        url: "",
                        username: "",
                        credential: ""
                    });
                    state.set("settings.iceServers", iceServers);
                }
            ],
            deleteIceServer: [
                function deleteIceServer(_a) {
                    var props = _a.props, state = _a.state;
                    var index = props.index;
                    var iceServers = state.get("settings.iceServers");
                    iceServers.splice(index, 1);
                    state.set("settings.iceServers", iceServers);
                }
            ],
            call: __WEBPACK_IMPORTED_MODULE_3__sequences__["b" /* callSequence */],
            register: __WEBPACK_IMPORTED_MODULE_3__sequences__["j" /* registerSequence */],
            unregister: __WEBPACK_IMPORTED_MODULE_3__sequences__["k" /* unregisterSequence */],
            hangup: __WEBPACK_IMPORTED_MODULE_3__sequences__["c" /* hangupSequence */],
            answer: __WEBPACK_IMPORTED_MODULE_3__sequences__["a" /* answerSequence */],
            onRegistrationFailed: __WEBPACK_IMPORTED_MODULE_3__sequences__["g" /* onRegistrationFailed */]
        },
        modules: {
            storage: __WEBPACK_IMPORTED_MODULE_0__cerebral_storage___default()({
                target: localStorage,
                json: true,
                sync: {
                    settings: "settings",
                    lastDialed: "lastDialed"
                }
            })
        }
    });
}
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Sip;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sip_js__ = __webpack_require__(319);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sip_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sip_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_cerebral__ = __webpack_require__(21);

document.addEventListener("deviceready", function () {
    if (window.device.platform === "iOS") {
        cordova.plugins.iosrtc.registerGlobals();
    }
});
var EVENT_NAMES_TO_SIGNAL = [
    { event: "accepted", sequence: "onAccepted" },
    { event: "rejected", sequence: "onRejected" },
    { event: "failed", sequence: "onFailed" },
    { event: "connecting", sequence: "onConnecting" },
    { event: "terminated", sequence: "onTerminated" },
    { event: "cancel", sequence: "onCancel" },
    { event: "refer", sequence: "onRefer" },
    { event: "bye", sequence: "onBye" },
    { event: "progress", sequence: "onProgress" },
    { event: "dtmf", sequence: "onDtmf" }
    // { event: "muted", sequence: "onMuted" },
    // { event: "unmuted", sequence: "onUnmuted" }
];

function Sip(_a) {
    var onAccepted = _a.onAccepted, onRejected = _a.onRejected, onFailed = _a.onFailed, onConnecting = _a.onConnecting, onTerminated = _a.onTerminated, onCancel = _a.onCancel, onRegistrationFailed = _a.onRegistrationFailed, onRefer = _a.onRefer, onBye = _a.onBye, onProgress = _a.onProgress, onDtmf = _a.onDtmf, 
    // onMuted,
    // onUnmuted,
    onInfo = _a.onInfo, onInvite = _a.onInvite;
    var ua;
    var session;
    var sequences = {
        onAccepted: onAccepted,
        onRejected: onRejected,
        onFailed: onFailed,
        onConnecting: onConnecting,
        onTerminated: onTerminated,
        onCancel: onCancel,
        onRefer: onRefer,
        onBye: onBye,
        onProgress: onProgress,
        onDtmf: onDtmf
        // onMuted,
        // onUnmuted
    };
    return Object(__WEBPACK_IMPORTED_MODULE_1_cerebral__["Provider"])({
        connect: function (_a, cb) {
            var _this = this;
            var uri = _a.uri, wsServer = _a.wsServer, password = _a.password, authorizationUser = _a.authorizationUser;
            try {
                ua = new __WEBPACK_IMPORTED_MODULE_0_sip_js___default.a.UA({
                    uri: uri,
                    transportOptions: {
                        wsServers: [wsServer]
                    },
                    authorizationUser: authorizationUser,
                    password: password,
                    register: true,
                    sessionDescriptionHandlerFactoryOptions: {
                        constraints: {
                            audio: true,
                            video: false
                        },
                        peerConnectionOptions: {
                            rtcConfiguration: {
                                iceServers: this.context.state.get("settings.iceServers"),
                                // on ios this settings is overriden by cordova plugin
                                iceTransportPolicy: "all",
                                bundlePolicy: "max-compat",
                                rtcpMuxPolicy: "negotiate"
                            },
                            iceCheckingTimeout: 800 // on ios this is overridden by the cordova plugin
                        }
                    }
                });
            }
            catch (error) {
                console.error(error);
                cb("disconnected");
            }
            ua.transport.on("connected", function (transport) {
                console.log("connected");
                cb();
            });
            ua.transport.on("connecting", function (connecting) {
                console.log("connecting");
            });
            ua.transport.on("disconnected", function (disc) {
                console.log("disconnected");
                cb("disconnected");
            });
            ua.on("registrationFailed", function (response, cause) {
                _this.context.controller.runSignal("onRegistrationFailed", onRegistrationFailed);
            });
            ua.on("invite", function (sess) {
                session = sess;
                session.on("cancel", function () {
                    _this.context.controller.runSignal("onCancel", onCancel);
                });
                session.on("terminate", function () {
                    _this.context.controller.runSignal("onTerminated", onTerminated);
                });
                session.on("bye", function () {
                    _this.context.controller.runSignal("onBye", onBye);
                });
                _this.context.controller.runSignal("onInvite", onInvite, {
                    name: session.request.from.displayName ||
                        session.request.from.friendlyName
                });
            });
        },
        attachEvents: function (session, controller) {
            EVENT_NAMES_TO_SIGNAL.map(function (action) {
                session.on(action.event, function (response, cause) {
                    controller.runSignal(action.event, sequences[action.sequence], {
                        response: response && response.method === "BYE"
                            ? ""
                            : response && response.data
                                ? response.data
                                : "",
                        cause: cause || ""
                    });
                });
            });
        },
        unregister: function () {
            if (ua.isRegistered()) {
                ua.unregister();
            }
        },
        answer: function () {
            try {
                session.accept();
            }
            catch (error) {
                console.log("error answering");
            }
        },
        invite: function (target, options, cb) {
            var _this = this;
            try {
                var sess = ua.invite(target, options);
                var call_id = sess.request.call_id;
                session = sess;
                this.attachEvents(session, this.context.controller);
                session.onInfo = function (request) {
                    return _this.context.controller.runSignal("onInfo", onInfo, { request: request });
                };
                session.on("trackAdded", function () {
                    var remoteAudio = document.getElementById("remoteAudio");
                    var pc = session.sessionDescriptionHandler.peerConnection;
                    var remoteStream;
                    remoteStream = pc.getRemoteStreams()[0];
                    remoteAudio.srcObject = remoteStream;
                    remoteAudio.volume = 1;
                    remoteAudio.play();
                });
                cb(null, call_id);
            }
            catch (error) {
                console.log(error);
                cb("error invite");
            }
        },
        hangup: function () {
            try {
                session.bye();
            }
            catch (error) {
                console.log("error hanging up");
            }
        },
        reject: function () {
            try {
                session.reject();
            }
            catch (error) {
                console.log("error rejecting");
            }
        },
        cancel: function () {
            try {
                session.cancel();
            }
            catch (error) {
                console.log("error cancelling", error);
            }
        }
    });
}
//# sourceMappingURL=Sip.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["h"] = register;
/* harmony export (immutable) */ __webpack_exports__["j"] = unregister;
/* harmony export (immutable) */ __webpack_exports__["b"] = call;
/* harmony export (immutable) */ __webpack_exports__["e"] = decideWhatToDo;
/* harmony export (immutable) */ __webpack_exports__["c"] = checkSettings;
/* harmony export (immutable) */ __webpack_exports__["g"] = openInCallModal;
/* harmony export (immutable) */ __webpack_exports__["i"] = setCallName;
/* harmony export (immutable) */ __webpack_exports__["a"] = answer;
/* harmony export (immutable) */ __webpack_exports__["f"] = hangup;
/* harmony export (immutable) */ __webpack_exports__["d"] = closeModal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_in_call_modal_in_call_modal__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(223);


function register(_a) {
    var sip = _a.sip, state = _a.state, path = _a.path;
    return new Promise(function (resolve, reject) {
        var server = state.get("settings.server");
        var domain = state.get("settings.domain");
        var authUsername = state.get("settings.username");
        var password = state.get("settings.password");
        var username = state.get("username");
        sip.connect({
            uri: (username || authUsername) + "@" + domain,
            wsServer: "ws://" + server,
            authorizationUser: authUsername,
            password: password
        }, function (error, result) {
            if (error) {
                return resolve(path.error());
            }
            resolve(path.next());
        });
    });
}
function unregister(_a) {
    var sip = _a.sip, state = _a.state, path = _a.path;
    sip.unregister();
    state.set("registered", false);
}
function call(_a) {
    var sip = _a.sip, state = _a.state, path = _a.path;
    return new Promise(function (resolve, reject) {
        var domain = state.get("settings.domain");
        var toCall = state.get("toCall");
        sip.invite(toCall + "@" + domain, {
            sessionDescriptionHandlerOptions: {
                constraints: {
                    audio: true,
                    video: false
                }
            }
        }, function (error, result) {
            if (error) {
                return resolve(path.error());
            }
            resolve(path.next());
        });
    });
}
function decideWhatToDo(_a) {
    var state = _a.state, path = _a.path;
    var lastDialed = state.get("lastDialed");
    var toCall = state.get("toCall");
    if (!toCall && !lastDialed) {
        return path.doNothing();
    }
    if (!toCall && lastDialed) {
        return path.setToCallWithLastRedialed();
    }
    if (toCall) {
        return path.call();
    }
    return path.doNothing();
}
function checkSettings(_a) {
    var state = _a.state, path = _a.path, toast = _a.toast;
    var iceServers = state.get("settings.iceServers");
    if (iceServers === []) {
        state.push('settings.iceServers', __WEBPACK_IMPORTED_MODULE_1__config__["a" /* default */].defaultIceServers);
    }
    var error = false;
    iceServers.forEach(function (server) {
        if (server.url.indexOf("stun:") === -1 && server.url.indexOf("turn:") === -1) {
            error = true;
        }
    });
    if (error) {
        toast.show('Check your settings and ice configuration');
        return path.checkSettings();
    }
    return path.next();
}
function openInCallModal(_a) {
    var modal = _a.modal;
    modal.create(__WEBPACK_IMPORTED_MODULE_0__pages_in_call_modal_in_call_modal__["a" /* ModalPage */]);
}
function setCallName(_a) {
    var state = _a.state, props = _a.props;
    state.set("call.name", props.name.split("@")[0] || "Unknown");
}
function answer(_a) {
    var sip = _a.sip;
    sip.answer();
}
function hangup(_a) {
    var sip = _a.sip, state = _a.state;
    var type = state.get("call.type");
    var connected = state.get("call.connected");
    if (type === "incoming") {
        if (!connected) {
            sip.reject();
        }
        else {
            sip.hangup();
        }
    }
    else {
        if (connected) {
            sip.hangup();
        }
        else {
            sip.cancel();
        }
    }
}
function closeModal(_a) {
    var modal = _a.modal;
    modal.close();
}
//# sourceMappingURL=actions.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Modal;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(21);

function Modal(modal) {
    var modalInstance;
    return Object(__WEBPACK_IMPORTED_MODULE_0_cerebral__["Provider"])({
        create: function (modalPage) {
            if (!modalInstance) {
                modalInstance = modal.create(modalPage);
                modalInstance.present();
            }
        },
        close: function () {
            if (modalInstance) {
                modalInstance
                    .dismiss()
                    .then(function (error) {
                    console.log(error);
                    modalInstance = null;
                })
                    .catch(function (error) {
                    console.log(error);
                    modalInstance = null;
                });
            }
        }
    });
}
//# sourceMappingURL=Modal.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = Toast;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cerebral__ = __webpack_require__(21);

function Toast(toast) {
    var toastInstance;
    return Object(__WEBPACK_IMPORTED_MODULE_0_cerebral__["Provider"])({
        show: function (message) {
            toastInstance = toast.create({
                message: message,
                duration: 3000,
                position: "top"
            });
            toastInstance.present();
        }
    });
}
//# sourceMappingURL=Toast.js.map

/***/ })

},[224]);
//# sourceMappingURL=main.js.map