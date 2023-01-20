import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    tag: string = "[DataService] ";

    originalUser: any = {};
    selectedUser: any = {};
    shops: any = [];
    products: any = [];

    constructor() { }

    // Shops

    getOriginalUser() {
        console.log(this.tag + "getOriginalUser :: Called");

        let tmpOriginalUser = localStorage.getItem("originalUser");
        try {

            let tmpOriginalUserJson = JSON.parse(tmpOriginalUser);
            this.originalUser = tmpOriginalUserJson;
        }
        catch (err) {
            console.log(this.tag + "getOriginalUser :: error :: failed to parse JSON.");
        }

        return this.originalUser;
    }

    setOriginalUser(user) {
        console.log(this.tag + "setOriginalUser :: Called with user = " + JSON.stringify(user, null, 2));

        localStorage.setItem("originalUser", JSON.stringify(user));
        this.originalUser = user;
    }

    getSelectedUser() {
        console.log(this.tag + "getSelectedUser :: Called");

        let tmpSelectedUser = localStorage.getItem("selectedUser");
        try {

            let tmpSelectedUserJson = JSON.parse(tmpSelectedUser);
            this.selectedUser = tmpSelectedUserJson;
        }
        catch (err) {
            console.log(this.tag + "getSelectedUser :: error :: failed to parse JSON.");
        }

        return this.selectedUser;
    }

    setSelectedUser(user) {
        console.log(this.tag + "setSelectedUser :: Called with user = " + JSON.stringify(user, null, 2));

        localStorage.setItem("selectedUser", JSON.stringify(user));
        this.selectedUser = user;
    }

    getShops() {
        console.log(this.tag + "getShops :: Called");

        let retVal = [];

        let tmpShops = localStorage.getItem("shops");
        console.log(this.tag + "getShops :: tmpShops = " + tmpShops);

        try {

            let tmpShopsJson = JSON.parse(tmpShops);
            let tmpUser = this.getSelectedUser();

            this.shops = tmpShopsJson;

            let resShopsJson = tmpShopsJson.filter(function (item) { return item.user == tmpUser.email; });

            console.log(this.tag + "getShops :: resShopsJson = " + JSON.stringify(resShopsJson, null, 2));

            if (resShopsJson.length > 0) {
                retVal = resShopsJson;
            }

            console.log(this.tag + "getShops :: this.shops = " + JSON.stringify(this.shops, null, 2));

        }
        catch (err) {
            console.log(this.tag + "getShops :: error :: failed to parse JSON.");
            this.shops = [];
        }

        return retVal;
    }

    addShop(shop) {
        console.log(this.tag + "addShop :: Called with shop = " + JSON.stringify(shop, null, 2));

        shop.user = this.selectedUser.email;
        shop.date = "" + Date.now();
        this.shops.push(shop);

        localStorage.setItem("shops", JSON.stringify(this.shops));

        console.log(this.tag + "addShop :: this.shops = " + JSON.stringify(this.shops, null, 2));
    }

    editShop(shop) {
        console.log(this.tag + "editShop :: Called with shop = " + JSON.stringify(shop, null, 2));

        let foundShop = this.shops.find(element => element.id === shop.id);
        console.log(this.tag + "editShop :: foundShop = " + JSON.stringify(foundShop, null, 2));

        if (foundShop) {
            foundShop.name = shop.name;
            foundShop.date = "" + Date.now();
        }

        localStorage.setItem("shops", JSON.stringify(this.shops));

        console.log(this.tag + "editShop :: this.shops = " + JSON.stringify(this.shops, null, 2));
    }

    deleteShop(shop) {
        console.log(this.tag + "deleteShop :: Called with shop = " + JSON.stringify(shop, null, 2));

        this.clearProducts(shop);

        let foundShopIndex = this.shops.indexOf(shop);
        console.log(this.tag + "deleteShop :: foundShopIndex = " + foundShopIndex);
        this.shops.splice(foundShopIndex, 1);

        localStorage.setItem("shops", JSON.stringify(this.shops));

        console.log(this.tag + "deleteShop :: this.shops = " + JSON.stringify(this.shops, null, 2));
    }

    clearShops() {
        console.log(this.tag + "clearShops :: Called");

        this.shops = [];
        localStorage.setItem("shops", JSON.stringify(this.shops));
    }

    // Products

    getProducts(shop) {
        console.log(this.tag + "getProducts :: Called");

        let retVal = [];

        let tmpProducts = localStorage.getItem("products");

        try {

            let tmpProductsJson = JSON.parse(tmpProducts);
            let tmpUser = this.getSelectedUser();
            this.products = tmpProductsJson;

            let resProductsJson = tmpProductsJson.filter(function (item) { return item.user == tmpUser.email; });

            console.log(this.tag + "getProducts :: resProductsJson = " + JSON.stringify(resProductsJson, null, 2));

            if (resProductsJson.length > 0) {

                let foundProducts = resProductsJson.filter(element => element.shopId === shop.id);
                console.log(this.tag + "getProducts :: foundProducts = " + JSON.stringify(foundProducts, null, 2));

                if (foundProducts.length > 0) {
                    retVal = foundProducts;
                }
            }
            console.log(this.tag + "getProducts :: this.products = " + JSON.stringify(this.products, null, 2));

        }
        catch (err) {
            console.log(this.tag + "getProducts :: error :: failed to parse JSON.");
            this.products = [];
        }

        return retVal;
    }

    addProduct(product) {
        console.log(this.tag + "addProduct :: Called with product = " + JSON.stringify(product, null, 2));

        product.user = this.selectedUser.email;
        product.date = "" + Date.now();
        this.products.push(product);
        localStorage.setItem("products", JSON.stringify(this.products));

        console.log(this.tag + "addProduct :: this.products = " + JSON.stringify(this.products, null, 2));
    }

    editProduct(product) {
        console.log(this.tag + "editProduct :: Called with product = " + JSON.stringify(product, null, 2));

        let foundProduct = this.products.find(element => element.id === product.id);
        console.log(this.tag + "editProduct :: foundProduct = " + JSON.stringify(foundProduct, null, 2));

        if (foundProduct) {
            foundProduct.name = product.name;
            foundProduct.amount = product.amount;
            foundProduct.bought = product.bought;
            foundProduct.date = "" + Date.now();
        }

        localStorage.setItem("products", JSON.stringify(this.products));

        console.log(this.tag + "editProduct :: this.products = " + JSON.stringify(this.products, null, 2));
    }

    deleteProduct(product) {
        console.log(this.tag + "deleteProduct :: Called with product = " + JSON.stringify(product, null, 2));
        console.log(this.tag + "deleteProduct :: Called with this.products = " + JSON.stringify(this.products, null, 2));

        let foundProductIndex = this.products.indexOf(product);
        console.log(this.tag + "deleteProduct :: foundProductIndex = " + foundProductIndex);
        if (foundProductIndex !== -1) {
            this.products.splice(foundProductIndex, 1);
            localStorage.setItem("products", JSON.stringify(this.products));

            console.log(this.tag + "deleteProduct :: this.products = " + JSON.stringify(this.products, null, 2));
        }
        else {
            console.log(this.tag + "deleteProduct :: Error :: Product not found");
        }
    }

    clearProducts(shop) {
        console.log(this.tag + "clearProducts :: Called with shop = " + JSON.stringify(shop, null, 2));

        //this.products = [];
        //localStorage.setItem("products", JSON.stringify(this.products));

        let foundProducts = this.products.filter(element => element.shopId !== shop.id);
        console.log(this.tag + "getProducts :: foundProducts = " + JSON.stringify(foundProducts, null, 2));

        if (foundProducts.length > 0) {
            this.products = foundProducts;
        }
        else {
            this.products = [];
        }

        localStorage.setItem("products", JSON.stringify(this.products));
    }
}
