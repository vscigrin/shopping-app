import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {

    tag: string = "[DataService] ";

    family: string = "";
    data: any = [];

    constructor() { }

    loadData() {
        console.log(this.tag + "loadData :: Called");

        let tmpData = localStorage.getItem("data");
        console.log(this.tag + "loadData :: tmpData = " + tmpData);

        try {

            let tmpDataJson = JSON.parse(tmpData);

            if (tmpDataJson.length > 0) {
                this.data = tmpDataJson;
            }
        }
        catch (err) {
            console.log(this.tag + "loadData :: error :: failed to parse JSON.");
        }
    }

    saveData() {
        console.log(this.tag + "saveData :: Called");

        localStorage.setItem("data", JSON.stringify(this.data));
    }

    getAllData() {
        console.log(this.tag + "getAllData :: Called");

        return this.data;
    }

    saveAllData(extData) {
        console.log(this.tag + "saveAllData :: Called");

        localStorage.setItem("data", JSON.stringify(extData));
    }

    // Shops

    getFamily() {
        console.log(this.tag + "getFamily :: Called");

        this.family = localStorage.getItem("family");

        return this.family;
    }

    setFamily(family) {
        console.log(this.tag + "setFamily :: Called with family = " + family);

        this.family = family;
        localStorage.setItem("family", this.family);
    }

    getShops() {
        console.log(this.tag + "getShops :: Called");

        let retVal = null;

        this.loadData();

        let foundShops = this.data.filter(item => { return !item.deleted; });

        if (foundShops.length > 0) {
            retVal = foundShops;
        }

        return retVal;
    }

    getShop(shopId) {
        console.log(this.tag + "getShop :: Called with shopId = " + shopId);

        let retVal = null;

        let foundShops = this.data.find(item => item.id === shopId);

        if (foundShops) {
            retVal = foundShops;
        }

        return retVal;
    }

    addShop(shop) {
        console.log(this.tag + "addShop :: Called with shop = " + JSON.stringify(shop, null, 2));

        shop.family = this.family;
        shop.date = "" + Date.now();
        shop.deleted = false;
        shop.products = [];

        this.data.push(shop);

        this.saveData();
    }

    editShop(shop) {
        console.log(this.tag + "editShop :: Called with shop = " + JSON.stringify(shop, null, 2));

        let foundShop = this.getShop(shop.id);
        console.log(this.tag + "editShop :: foundShop = " + JSON.stringify(foundShop, null, 2));

        if (foundShop) {
            foundShop.name = shop.name;
            foundShop.date = "" + Date.now();
        }

        this.saveData();
    }

    deleteShop(shopId) {
        console.log(this.tag + "deleteShop :: Called with shop = " + JSON.stringify(shopId, null, 2));

        let foundShop = this.getShop(shopId);

        if (foundShop) {

            foundShop.deleted = true;
            foundShop.date = "" + Date.now();
            this.saveData();
        }
        else {
            console.log(this.tag + "deleteShop :: shop not found");
        }
    }

    // Products

    getProducts(shopId) {
        console.log(this.tag + "getProducts :: Called with shopId = " + shopId);

        let retVal = [];

        let foundShop = this.getShop(shopId);

        if (foundShop) {

            let foundProducts = foundShop.products.filter(item => {
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
    }

    addProduct(shopId, product) {
        console.log(this.tag + "addProduct :: Called with product = " + JSON.stringify(product, null, 2));

        product.family = this.getFamily();
        product.date = "" + Date.now();
        product.deleted = false;

        let foundShop = this.getShop(shopId);
        if (foundShop) {
            foundShop.products.push(product);
            this.saveData();
        }
        else {
            console.log(this.tag + "addProduct :: products not found for shop");
        }
    }

    editProduct(shopId, product) {
        console.log(this.tag + "editProduct :: Called with product = " + JSON.stringify(product, null, 2));

        let foundShop = this.getShop(shopId);
        if (foundShop) {

            let foundProduct = foundShop.products.find(item => item.id === product.id);

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
    }

    deleteProduct(shopId, product) {
        console.log(this.tag + "deleteProduct :: Called with product = " + JSON.stringify(product, null, 2));

        let foundShop = this.getShop(shopId);
        if (foundShop) {

            let foundProduct = foundShop.products.find(item => item.id === product.id);

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
    }

    clearProducts(shopId) {
        console.log(this.tag + "clearProducts :: Called with shopId = " + JSON.stringify(shopId, null, 2));

        let foundShop = this.getShop(shopId);
        if (foundShop) {

            let foundProducts = foundShop.products.filter(element => element.shopId === shopId);

            if (foundProducts.length > 0) {
                foundProducts.forEach(item => {
                    item.deleted = true;
                    item.date = "" + Date.now();
                });
            }
            this.saveData();
        }
        else {
            console.log(this.tag + "deleteProduct :: products not found for shop");
        }
    }
}
