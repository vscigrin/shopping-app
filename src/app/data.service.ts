import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  tag: string = "[DataService] ";
  shops: any = [];
  products: any = [];

  constructor() { }

  // Shops

  getShops() {
    console.log(this.tag + "getShops :: Called");

    return this.shops;
  }

  addShop(shop) {
    console.log(this.tag + "addShop :: Called with shop = " + JSON.stringify(shop, null, 2));

    this.shops.push(shop);

    console.log(this.tag + "addShop :: this.shops = " + JSON.stringify(this.shops, null, 2));
  }

  editShop(shop) {
    console.log(this.tag + "editShop :: Called with shop = " + JSON.stringify(shop, null, 2));

    let foundShop = this.shops.find(element => element.id === shop.id);
    console.log(this.tag + "editShop :: foundShop = " + JSON.stringify(foundShop, null, 2));

    if (foundShop) {
      foundShop.name = shop.name;
    }

    console.log(this.tag + "editShop :: this.shops = " + JSON.stringify(this.shops, null, 2));
  }

  deleteShop(shop) {
    console.log(this.tag + "deleteShop :: Called with shop = " + JSON.stringify(shop, null, 2));

    let foundShopIndex = this.shops.indexOf(shop);
    console.log(this.tag + "deleteShop :: foundShopIndex = " + foundShopIndex);
    this.shops.splice(foundShopIndex, 1);

    console.log(this.tag + "deleteShop :: this.shops = " + JSON.stringify(this.shops, null, 2));

  }

  clearShops() {
    console.log(this.tag + "clearShops :: Called");

    this.shops = [];
    return this.shops;
  }

  // Products

  getProducts(shop) {
    console.log(this.tag + "getProducts :: Called");

    let foundProducts = this.products.filter(element => element.shopId === shop.id);
    console.log(this.tag + "getProducts :: foundProducts = " + JSON.stringify(foundProducts, null, 2));

    if (!foundProducts) {
      foundProducts = [];
    }

    return foundProducts;
  }

  addProduct(product) {
    console.log(this.tag + "addProduct :: Called with product = " + JSON.stringify(product, null, 2));

    this.products.push(product);

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
    }

    console.log(this.tag + "editProduct :: this.products = " + JSON.stringify(this.products, null, 2));
  }

  deleteProduct(product) {
    console.log(this.tag + "deleteProduct :: Called with product = " + JSON.stringify(product, null, 2));

    let foundProductIndex = this.products.indexOf(product);
    console.log(this.tag + "deleteProduct :: foundProductIndex = " + foundProductIndex);
    this.products.splice(foundProductIndex, 1);

    console.log(this.tag + "deleteProduct :: this.products = " + JSON.stringify(this.products, null, 2));
  }

  clearProducts() {
    console.log(this.tag + "clearProducts :: Called");

    this.products = [];
    return this.products;
  }
}
