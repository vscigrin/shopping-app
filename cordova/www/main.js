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

/***/ "./src/app/add-product/add-product.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-product/add-product.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1wcm9kdWN0L2FkZC1wcm9kdWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-product/add-product.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-product/add-product.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\n  <div></div>\n  <div>{{ title }}</div>\n  <div></div>\n</div>\n<div class=\"top-submenu\">\n  <div>\n    <button (click)=\"goBack()\" style=\"background: url('assets/images/back.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n  <div>\n    <button (click)=\"saveProduct()\" style=\"background: url('assets/images/save.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n</div>\n<div class=\"content\">\n  <div style=\"padding-top: 50px;\"></div>\n  <form>\n    <div class=\"row\">\n      <div class=\"left\">\n        <label for=\"productName\">Name:</label>\n      </div>\n      <div class=\"right\">\n        <input id=\"productName\" name=\"productName\" type=\"text\" [(ngModel)]=\"product.name\" />\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"left\">\n        <label>Amount:</label>\n      </div>\n      <div class=\"right\">\n        <button (click)=\"minusAmount()\" style=\"background: url('assets/images/minus.png') no-repeat; background-position: 50% 50%;\"></button>\n        <span>{{ product.amount }}</span>\n        <button (click)=\"plusAmount()\" style=\"background: url('assets/images/plus.png') no-repeat; background-position: 50% 50%;\"></button>\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-product/add-product.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-product/add-product.component.ts ***!
  \******************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.tag = "[AddProductComponent] ";
        this.title = "";
        this.shop = {};
        this.product = {};
        this.isEdit = false;
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(_this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = " + JSON.stringify(params, null, 2));
            _this.title = "Add Product";
            _this.isEdit = false;
            var parsedShopId = JSON.parse(params.shopId);
            console.log(_this.tag + "ngOnInit :: parsedShopId = ", parsedShopId);
            _this.shop = _this.dataService.getShop(parsedShopId);
            console.log(_this.tag + "ngOnInit :: this.shop = " + JSON.stringify(_this.shop, null, 2));
            var parsedProduct = JSON.parse(params.product);
            console.log(_this.tag + "ngOnInit :: parsedProduct = ", parsedProduct);
            _this.product.id = "" + Date.now();
            _this.product.name = "";
            _this.product.amount = 1;
            _this.product.bought = false;
            _this.product.shopId = parsedShopId;
            if (parsedProduct) {
                _this.title = "Edit Product";
                _this.isEdit = true;
                _this.product.id = parsedProduct.id;
                _this.product.name = parsedProduct.name;
                _this.product.amount = parsedProduct.amount;
                _this.product.bought = parsedProduct.bought;
            }
            console.log(_this.tag + "ngOnInit :: this.product = " + JSON.stringify(_this.product, null, 2));
        });
    };
    AddProductComponent.prototype.goBack = function () {
        console.log(this.tag + "goBack :: Called");
        this.router.navigate(['product-list'], { queryParams: { shopId: JSON.stringify(this.shop.id) } });
    };
    AddProductComponent.prototype.saveProduct = function () {
        console.log(this.tag + "saveProduct :: Called");
        this.product.name = this.product.name.trim();
        if (this.product.name !== "") {
            if (this.isEdit) {
                this.dataService.editProduct(this.shop.id, this.product);
            }
            else {
                this.dataService.addProduct(this.shop.id, this.product);
            }
            this.goBack();
        }
        else {
            alert("Please enter the product name!");
        }
    };
    AddProductComponent.prototype.minusAmount = function () {
        console.log(this.tag + "minusAmount :: Called");
        if (parseInt(this.product.amount, 10) > 1) {
            this.product.amount--;
            //this.dataService.editProduct(this.product);
        }
        else {
            console.log(this.tag + "minusAmount :: Called, but not needed to change this.");
            //alert("Product amount must be positive!");
        }
    };
    AddProductComponent.prototype.plusAmount = function () {
        console.log(this.tag + "plusAmount :: Called");
        this.product.amount++;
        //this.dataService.editProduct(this.product);
    };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/add-product/add-product.component.html"),
            styles: [__webpack_require__(/*! ./add-product.component.css */ "./src/app/add-product/add-product.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/add-shop/add-shop.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-shop/add-shop.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1zaG9wL2FkZC1zaG9wLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/add-shop/add-shop.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-shop/add-shop.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\n  <div></div>\n  <div>{{ title }}</div>\n  <div></div>\n</div>\n<div class=\"top-submenu\">\n  <div>\n    <button style=\"background: url('assets/images/back.png') no-repeat; background-position: 50% 50%;\" (click)=\"goBack()\"></button>\n  </div>\n  <div>\n    <button *ngIf=\"isEdit\" style=\"background: url('assets/images/delete.png') no-repeat; background-position: 50% 50%;\" (click)=\"deleteShop()\"></button>\n    <button style=\"background: url('assets/images/save.png') no-repeat; background-position: 50% 50%;\" (click)=\"saveShop()\"></button>\n  </div>\n</div>\n<div class=\"content\">\n  <div style=\"padding-top: 50px;\"></div>\n  <form>\n    <div class=\"row\">\n      <div class=\"left\">\n        <label for=\"shopName\">Name:</label>\n      </div>\n      <div class=\"right\">\n        <input id=\"shopName\" name=\"shopName\" type=\"text\" [(ngModel)]=\"shop.name\" />\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/add-shop/add-shop.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-shop/add-shop.component.ts ***!
  \************************************************/
/*! exports provided: AddShopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddShopComponent", function() { return AddShopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var AddShopComponent = /** @class */ (function () {
    function AddShopComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.tag = "[AddShopComponent] ";
        this.title = "";
        this.shop = {};
        this.isEdit = false;
    }
    AddShopComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(_this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = ", params);
            _this.title = "Add Shop";
            _this.isEdit = false;
            var parsedShopId = JSON.parse(params.shopId);
            console.log(_this.tag + "ngOnInit :: parsedShopId = ", parsedShopId);
            if (parsedShopId) {
                console.log(_this.tag + "ngOnInit :: params are not empty");
                _this.shop = _this.dataService.getShop(parsedShopId);
                _this.title = "Edit Shop";
                _this.isEdit = true;
            }
            else {
                _this.shop.id = "" + Date.now();
                _this.shop.name = "";
            }
            console.log(_this.tag + "ngOnInit :: this.shop = " + JSON.stringify(_this.shop, null, 2));
        });
    };
    AddShopComponent.prototype.goBack = function () {
        console.log(this.tag + "goBack :: Called");
        this.router.navigate(['']);
    };
    AddShopComponent.prototype.saveShop = function () {
        console.log(this.tag + "saveShop :: Called");
        this.shop.name = this.shop.name.trim();
        if (this.shop.name !== "") {
            if (this.isEdit) {
                this.dataService.editShop(this.shop);
            }
            else {
                this.dataService.addShop(this.shop);
            }
            this.goBack();
        }
        else {
            alert("Please enter the shop name!");
        }
    };
    AddShopComponent.prototype.deleteShop = function () {
        console.log(this.tag + "deleteShop :: Called");
        if (confirm("Delete shop?") == true) {
            this.dataService.deleteShop(this.shop.id);
            this.goBack();
        }
    };
    AddShopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-shop',
            template: __webpack_require__(/*! ./add-shop.component.html */ "./src/app/add-shop/add-shop.component.html"),
            styles: [__webpack_require__(/*! ./add-shop.component.css */ "./src/app/add-shop/add-shop.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], AddShopComponent);
    return AddShopComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _shop_list_shop_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shop-list/shop-list.component */ "./src/app/shop-list/shop-list.component.ts");
/* harmony import */ var _add_shop_add_shop_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-shop/add-shop.component */ "./src/app/add-shop/add-shop.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");









var routes = [
    { path: '', component: _start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"] },
    { path: 'shop-list', component: _shop_list_shop_list_component__WEBPACK_IMPORTED_MODULE_4__["ShopListComponent"] },
    { path: 'add-shop', component: _add_shop_add_shop_component__WEBPACK_IMPORTED_MODULE_5__["AddShopComponent"] },
    { path: 'product-list', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_6__["ProductListComponent"] },
    { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_7__["AddProductComponent"] },
    { path: 'settings', component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'shopping-cart';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _start_start_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./start/start.component */ "./src/app/start/start.component.ts");
/* harmony import */ var _shop_list_shop_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shop-list/shop-list.component */ "./src/app/shop-list/shop-list.component.ts");
/* harmony import */ var _add_shop_add_shop_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-shop/add-shop.component */ "./src/app/add-shop/add-shop.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-product/add-product.component */ "./src/app/add-product/add-product.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _shop_list_shop_list_component__WEBPACK_IMPORTED_MODULE_8__["ShopListComponent"],
                _add_shop_add_shop_component__WEBPACK_IMPORTED_MODULE_9__["AddShopComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_10__["ProductListComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_11__["AddProductComponent"],
                _start_start_component__WEBPACK_IMPORTED_MODULE_7__["StartComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_12__["SettingsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DataService = /** @class */ (function () {
    function DataService() {
        this.tag = "[DataService] ";
        this.family = "";
        this.data = [];
    }
    DataService.prototype.loadData = function () {
        console.log(this.tag + "loadData :: Called");
        var tmpData = localStorage.getItem("data");
        console.log(this.tag + "loadData :: tmpData = " + tmpData);
        try {
            var tmpDataJson = JSON.parse(tmpData);
            if (tmpDataJson.length > 0) {
                this.data = tmpDataJson;
            }
        }
        catch (err) {
            console.log(this.tag + "loadData :: error :: failed to parse JSON.");
        }
    };
    DataService.prototype.saveData = function () {
        console.log(this.tag + "saveData :: Called");
        localStorage.setItem("data", JSON.stringify(this.data));
    };
    DataService.prototype.getAllData = function () {
        console.log(this.tag + "getAllData :: Called");
        return this.data;
    };
    DataService.prototype.saveAllData = function (extData) {
        console.log(this.tag + "saveAllData :: Called");
        localStorage.setItem("data", JSON.stringify(extData));
    };
    // Shops
    DataService.prototype.getFamily = function () {
        console.log(this.tag + "getFamily :: Called");
        this.family = localStorage.getItem("family");
        return this.family;
    };
    DataService.prototype.setFamily = function (family) {
        console.log(this.tag + "setFamily :: Called with family = " + family);
        this.family = family;
        localStorage.setItem("family", this.family);
    };
    DataService.prototype.getShops = function () {
        console.log(this.tag + "getShops :: Called");
        var retVal = null;
        this.loadData();
        var foundShops = this.data.filter(function (item) { return !item.deleted; });
        if (foundShops.length > 0) {
            retVal = foundShops;
        }
        return retVal;
    };
    DataService.prototype.getShop = function (shopId) {
        console.log(this.tag + "getShop :: Called with shopId = " + shopId);
        var retVal = null;
        var foundShops = this.data.find(function (item) { return item.id === shopId; });
        if (foundShops) {
            retVal = foundShops;
        }
        return retVal;
    };
    DataService.prototype.addShop = function (shop) {
        console.log(this.tag + "addShop :: Called with shop = " + JSON.stringify(shop, null, 2));
        shop.family = this.family;
        shop.date = "" + Date.now();
        shop.deleted = false;
        shop.products = [];
        this.data.push(shop);
        this.saveData();
    };
    DataService.prototype.editShop = function (shop) {
        console.log(this.tag + "editShop :: Called with shop = " + JSON.stringify(shop, null, 2));
        var foundShop = this.getShop(shop.id);
        console.log(this.tag + "editShop :: foundShop = " + JSON.stringify(foundShop, null, 2));
        if (foundShop) {
            foundShop.name = shop.name;
            foundShop.date = "" + Date.now();
        }
        this.saveData();
    };
    DataService.prototype.deleteShop = function (shopId) {
        console.log(this.tag + "deleteShop :: Called with shop = " + JSON.stringify(shopId, null, 2));
        var foundShop = this.getShop(shopId);
        if (foundShop) {
            foundShop.deleted = true;
            foundShop.date = "" + Date.now();
            this.saveData();
        }
        else {
            console.log(this.tag + "deleteShop :: shop not found");
        }
    };
    // Products
    DataService.prototype.getProducts = function (shopId) {
        console.log(this.tag + "getProducts :: Called with shopId = " + shopId);
        var retVal = [];
        var foundShop = this.getShop(shopId);
        if (foundShop) {
            var foundProducts = foundShop.products.filter(function (item) {
                return (!item.deleted);
            });
            console.log(this.tag + "getProducts :: foundProducts = " + JSON.stringify(foundProducts, null, 2));
            if (foundProducts.length > 0) {
                retVal = foundProducts;
            }
        }
        else {
            console.log(this.tag + "getProducts :: products not found for shop");
        }
        return retVal;
    };
    DataService.prototype.addProduct = function (shopId, product) {
        console.log(this.tag + "addProduct :: Called with product = " + JSON.stringify(product, null, 2));
        product.family = this.getFamily();
        product.date = "" + Date.now();
        product.deleted = false;
        var foundShop = this.getShop(shopId);
        if (foundShop) {
            foundShop.products.push(product);
            this.saveData();
        }
        else {
            console.log(this.tag + "addProduct :: products not found for shop");
        }
    };
    DataService.prototype.editProduct = function (shopId, product) {
        console.log(this.tag + "editProduct :: Called with product = " + JSON.stringify(product, null, 2));
        var foundShop = this.getShop(shopId);
        if (foundShop) {
            var foundProduct = foundShop.products.find(function (item) { return item.id === product.id; });
            if (foundProduct) {
                foundProduct.name = product.name;
                foundProduct.amount = product.amount;
                foundProduct.bought = product.bought;
                foundProduct.date = "" + Date.now();
                this.saveData();
            }
        }
        else {
            console.log(this.tag + "editProduct :: products not found for shop");
        }
    };
    DataService.prototype.deleteProduct = function (shopId, product) {
        console.log(this.tag + "deleteProduct :: Called with product = " + JSON.stringify(product, null, 2));
        var foundShop = this.getShop(shopId);
        if (foundShop) {
            var foundProduct = foundShop.products.find(function (item) { return item.id === product.id; });
            if (foundProduct) {
                foundProduct.deleted = true;
                foundProduct.date = "" + Date.now();
                this.saveData();
            }
            else {
                console.log(this.tag + "deleteProduct :: product not found");
            }
        }
        else {
            console.log(this.tag + "deleteProduct :: products not found for shop");
        }
    };
    DataService.prototype.clearProducts = function (shopId) {
        console.log(this.tag + "clearProducts :: Called with shopId = " + JSON.stringify(shopId, null, 2));
        var foundShop = this.getShop(shopId);
        if (foundShop) {
            var foundProducts = foundShop.products.filter(function (element) { return element.shopId === shopId; });
            if (foundProducts.length > 0) {
                foundProducts.forEach(function (item) {
                    item.deleted = true;
                    item.date = "" + Date.now();
                });
            }
            this.saveData();
        }
        else {
            console.log(this.tag + "deleteProduct :: products not found for shop");
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\n  <div></div>\n  <div>{{ title }}</div>\n  <div></div>\n</div>\n<div class=\"top-submenu\">\n  <div>\n    <button (click)=\"goBack()\" style=\"background: url('assets/images/back.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n  <div>\n    <button (click)=\"clearProducts()\" style=\"background: url('assets/images/product_remove.png') no-repeat; background-position: 50% 50%;\"></button>\n    <button (click)=\"addProduct()\" style=\"background: url('assets/images/product_add.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n</div>\n<div class=\"content\">\n  <div class=\"list\" *ngFor=\"let item of productList;\">\n    <div class=\"row\" style=\"border-bottom: 1px solid lightgray;\">\n      <button *ngIf=\"item.bought === true\" (click)=\"checkProduct(item)\" style=\"background: url('assets/images/check.png') no-repeat; background-position: 50% 50%;\"></button>\n      <button *ngIf=\"item.bought === false\" (click)=\"checkProduct(item)\"></button>\n      <p (click)=\"editProduct(item)\">{{ item.amount }} x {{ item.name }}</p>\n      <button (click)=\"deleteProduct(item)\" style=\"background: url('assets/images/delete.png') no-repeat; background-position: 50% 50%;\"></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.tag = "[ProductListComponent] ";
        this.title = "";
        this.shop = {};
        this.productList = [];
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            console.log(_this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = " + JSON.stringify(params, null, 2));
            var parsedShopId = JSON.parse(params.shopId);
            console.log(_this.tag + "ngOnInit :: parsedShopId = ", parsedShopId);
            _this.shop = _this.dataService.getShop(parsedShopId);
            console.log(_this.tag + "ngOnInit :: this.shop = " + JSON.stringify(_this.shop, null, 2));
            _this.title = "Products for " + _this.shop.name;
            _this.productList = _this.dataService.getProducts(parsedShopId);
        });
    };
    ProductListComponent.prototype.goBack = function () {
        console.log(this.tag + "goBack :: Called");
        this.router.navigate(['']);
    };
    ProductListComponent.prototype.addProduct = function () {
        console.log(this.tag + "addProduct :: Called");
        this.router.navigate(['add-product'], { queryParams: { shopId: JSON.stringify(this.shop.id), product: JSON.stringify(null) } });
    };
    ProductListComponent.prototype.editProduct = function (extProduct) {
        console.log(this.tag + "editProduct :: Called with extProduct = " + JSON.stringify(extProduct, null, 2));
        this.router.navigate(['add-product'], { queryParams: { shopId: JSON.stringify(this.shop.id), product: JSON.stringify(extProduct) } });
    };
    ProductListComponent.prototype.deleteProduct = function (extProduct) {
        console.log(this.tag + "deleteProduct :: Called with extProduct = " + JSON.stringify(extProduct, null, 2));
        //if (confirm("Delete product?") == true) {
        this.dataService.deleteProduct(this.shop.id, extProduct);
        this.productList = this.dataService.getProducts(this.shop.id);
        //}
    };
    ProductListComponent.prototype.clearProducts = function () {
        console.log(this.tag + "clearProducts :: Called");
        if (confirm("Clear list?") == true) {
            this.dataService.clearProducts(this.shop.id);
            this.productList = this.dataService.getProducts(this.shop.id);
        }
    };
    ProductListComponent.prototype.checkProduct = function (extProduct) {
        console.log(this.tag + "checkProduct :: Called with extProduct = " + JSON.stringify(extProduct, null, 2));
        extProduct.bought = (extProduct.bought === false) ? true : false;
        this.dataService.editProduct(this.shop.id, extProduct);
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.css":
/*!*************************************************!*\
  !*** ./src/app/settings/settings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\n  <div></div>\n  <div>{{ title }}</div>\n  <div></div>\n</div>\n<div class=\"top-submenu\">\n  <div>\n    <button (click)=\"goBack()\" style=\"background: url('assets/images/back.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n  <div>\n    <button (click)=\"sync()\" style=\"background: url('assets/images/sync.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n</div>\n<div class=\"content\">\n  <div style=\"padding-top: 50px;\"></div>\n  <form>\n    <div class=\"row\">\n      <div class=\"left\">\n        <label for=\"email\">Family:</label>\n      </div>\n      <div class=\"right\">\n        {{ family }}\n      </div>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _sync_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sync.service */ "./src/app/sync.service.ts");





var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(route, router, dataService, syncService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.syncService = syncService;
        this.tag = "[SettingsComponent] ";
        this.title = "Settings";
        this.family = "";
    }
    SettingsComponent.prototype.ngOnInit = function () {
        console.log(this.tag + "ngOnInit :: Called");
        this.family = this.dataService.getFamily();
    };
    SettingsComponent.prototype.goBack = function () {
        console.log(this.tag + "goBack :: Called");
        this.router.navigate(['shop-list']);
    };
    SettingsComponent.prototype.sync = function () {
        console.log(this.tag + "sync :: Called");
        this.syncService.syncData();
        /*
        if (confirm("Do you want to syncronize you data with server?") == true) {

        }
        */
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.css */ "./src/app/settings/settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"], _sync_service__WEBPACK_IMPORTED_MODULE_4__["SyncService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/shop-list/shop-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/shop-list/shop-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3AtbGlzdC9zaG9wLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/shop-list/shop-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/shop-list/shop-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\n  <div></div>\n  <div>Shop List</div>\n  <div style=\"padding-left: 10px; padding-right: 10px;\">\n    <button (click)=\"showSettings()\" style=\"background: url('assets/images/settings.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n</div>\n<div class=\"top-submenu\">\n  <div></div>\n  <div style=\"padding-left: 10px; padding-right: 10px;\">\n    <button (click)=\"addShop()\" style=\"background: url('assets/images/add.png') no-repeat; background-position: 50% 50%;\"></button>\n  </div>\n</div>\n<div class=\"content\">\n  <div class=\"list\" *ngFor=\"let item of shopList;\">\n    <div class=\"row\" style=\"border-bottom: 1px solid lightgray;\">\n      <p (click)=\"viewShop(item)\">{{ item.name }}</p>\n      <button style=\"background: url('assets/images/edit.png') no-repeat; background-position: 50% 50%;\" (click)=\"editShop(item)\"></button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shop-list/shop-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/shop-list/shop-list.component.ts ***!
  \**************************************************/
/*! exports provided: ShopListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopListComponent", function() { return ShopListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var ShopListComponent = /** @class */ (function () {
    function ShopListComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.tag = "[ShopListComponent] ";
        this.shopList = [];
    }
    ShopListComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.tag + "ngOnInit :: Called");
        this.route.queryParams.subscribe(function (params) {
            console.log(_this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = " + JSON.stringify(params, null, 2));
            var family = _this.dataService.getFamily();
            if (family) {
                _this.shopList = _this.dataService.getShops();
            }
            else {
                _this.router.navigate([''], {});
            }
        });
    };
    ShopListComponent.prototype.addShop = function () {
        console.log(this.tag + "addShop :: Called");
        this.router.navigate(['add-shop'], { queryParams: { "shopId": JSON.stringify(null) } });
    };
    ShopListComponent.prototype.viewShop = function (extShop) {
        console.log(this.tag + "viewShop :: Called with extShop.id = " + JSON.stringify(extShop.id, null, 2));
        this.router.navigate(['product-list'], { queryParams: { "shopId": JSON.stringify(extShop.id) } });
    };
    ShopListComponent.prototype.editShop = function (extShop) {
        console.log(this.tag + "editShop :: Called with extShop.id = " + JSON.stringify(extShop.id, null, 2));
        this.router.navigate(['add-shop'], { queryParams: { "shopId": JSON.stringify(extShop.id) } });
    };
    ShopListComponent.prototype.showSettings = function () {
        console.log(this.tag + "showSettings :: Called");
        this.router.navigate(['settings'], {});
    };
    ShopListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shop-list',
            template: __webpack_require__(/*! ./shop-list.component.html */ "./src/app/shop-list/shop-list.component.html"),
            styles: [__webpack_require__(/*! ./shop-list.component.css */ "./src/app/shop-list/shop-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], ShopListComponent);
    return ShopListComponent;
}());



/***/ }),

/***/ "./src/app/start/start.component.css":
/*!*******************************************!*\
  !*** ./src/app/start/start.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/start/start.component.html":
/*!********************************************!*\
  !*** ./src/app/start/start.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"top-menu\">\n  <div></div>\n  <div>{{ title }}</div>\n  <div></div>\n</div>\n<div class=\"top-submenu\">\n  <div></div>\n  <div>\n    <!-- button (click)=\"register()\" style=\"background: url('assets/images/add.png') no-repeat; background-position: 50% 50%;\"></button -->\n  </div>\n</div>\n<div class=\"content\">\n  <div style=\"padding-top: 50px;\"></div>\n  <form>\n    <div class=\"row\">\n      <div class=\"left\">\n        <label for=\"email\">Family:</label>\n      </div>\n      <div class=\"right\">\n        <input id=\"family\" name=\"family\" type=\"text\" [(ngModel)]=\"family\" />\n      </div>\n    </div>\n    <div class=\"row\" style=\"justify-content: center;\">\n      <button (click)=\"register()\" style=\"width: 100px\">Register</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./src/app/start/start.component.ts":
/*!******************************************!*\
  !*** ./src/app/start/start.component.ts ***!
  \******************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");




var StartComponent = /** @class */ (function () {
    function StartComponent(route, router, dataService) {
        this.route = route;
        this.router = router;
        this.dataService = dataService;
        this.tag = "[StartComponent] ";
        this.title = "Register";
        this.family = "";
    }
    StartComponent.prototype.ngOnInit = function () {
        console.log(this.tag + "ngOnInit :: Called");
        var family = this.dataService.getFamily();
        if (family) {
            console.log(this.tag + "ngOnInit :: family already registered");
            this.router.navigate(['shop-list'], {});
        }
    };
    StartComponent.prototype.register = function () {
        console.log(this.tag + "register :: Called");
        if (this.family.length > 0) {
            console.log(this.tag + "register :: Successfully registered with family: " + JSON.stringify(this.family, null, 2));
            this.dataService.setFamily(this.family);
            this.router.navigate(['shop-list'], {});
        }
        else {
            console.log(this.tag + "register :: Error :: Please register first");
        }
    };
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-start',
            template: __webpack_require__(/*! ./start.component.html */ "./src/app/start/start.component.html"),
            styles: [__webpack_require__(/*! ./start.component.css */ "./src/app/start/start.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], StartComponent);
    return StartComponent;
}());



/***/ }),

/***/ "./src/app/sync.service.ts":
/*!*********************************!*\
  !*** ./src/app/sync.service.ts ***!
  \*********************************/
/*! exports provided: SyncService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SyncService", function() { return SyncService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");



//import { Observable } from 'rxjs';

var SyncService = /** @class */ (function () {
    function SyncService(httpClient, dataService) {
        this.httpClient = httpClient;
        this.dataService = dataService;
        this.tag = "[SyncService] ";
    }
    SyncService.prototype.syncData = function () {
        var _this = this;
        console.log(this.tag + "syncData :: called");
        //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        var family = this.dataService.getFamily();
        var data = this.dataService.getAllData();
        try {
            var localDataObj = {
                "family": family,
                "data": data
            };
            if (localDataObj) {
                var body = localDataObj;
                console.log(this.tag + "syncData :: body = " + JSON.stringify(body, null, 2));
                //this.httpClient.post<any>('http://localhost:9000/.netlify/functions/api/sendData', body, { headers }).subscribe({
                this.httpClient.post('http://localhost:9000/.netlify/functions/api/syncData', body).subscribe({
                    next: function (response) {
                        console.log(_this.tag + "syncData :: post success :: response = " + JSON.stringify(response, null, 2));
                        _this.dataService.saveAllData(response.response);
                    },
                    error: function (error) {
                        console.error(_this.tag + "syncData :: post error :: error = " + JSON.stringify(error, null, 2));
                    }
                });
            }
            else {
                console.warn(this.tag + "syncData :: warning :: nothing to send");
            }
        }
        catch (err) {
            console.error(this.tag + "syncData :: catch error :: err = " + JSON.stringify(err, null, 2));
        }
    };
    SyncService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SyncService);
    return SyncService;
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

module.exports = __webpack_require__(/*! /Users/vitalijs/Dev/Projects/shopping-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map