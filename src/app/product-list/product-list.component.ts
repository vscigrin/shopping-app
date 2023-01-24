import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../data.service';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})

export class ProductListComponent implements OnInit {

    tag: string = "[ProductListComponent] ";
    title: string = "";
    shop: any = {};
    productList: any = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) {

    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            console.log(this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = " + JSON.stringify(params, null, 2));

            let parsedShopId = JSON.parse(params.shopId);
            console.log(this.tag + "ngOnInit :: parsedShopId = ", parsedShopId);

            this.shop = this.dataService.getShop(parsedShopId);
            console.log(this.tag + "ngOnInit :: this.shop = " + JSON.stringify(this.shop, null, 2));

            this.title = "Products for " + this.shop.name;

            this.productList = this.dataService.getProducts(parsedShopId);

        });
    }

    goBack() {
        console.log(this.tag + "goBack :: Called");

        this.router.navigate(['']);
    }

    addProduct() {
        console.log(this.tag + "addProduct :: Called");

        this.router.navigate(['add-product'], { queryParams: { shopId: JSON.stringify(this.shop.id), product: JSON.stringify(null) } });
    }

    editProduct(extProduct) {
        console.log(this.tag + "editProduct :: Called with extProduct = " + JSON.stringify(extProduct, null, 2));

        this.router.navigate(['add-product'], { queryParams: { shopId: JSON.stringify(this.shop.id), product: JSON.stringify(extProduct) } });
    }

    deleteProduct(extProduct) {
        console.log(this.tag + "deleteProduct :: Called with extProduct = " + JSON.stringify(extProduct, null, 2));

        //if (confirm("Delete product?") == true) {
        this.dataService.deleteProduct(this.shop.id, extProduct);
        this.productList = this.dataService.getProducts(this.shop.id);
        //}
    }

    clearProducts() {
        console.log(this.tag + "clearProducts :: Called");

        if (confirm("Clear list?") == true) {
            this.dataService.clearProducts(this.shop.id);
            this.productList = this.dataService.getProducts(this.shop.id);
        }
    }

    checkProduct(extProduct) {
        console.log(this.tag + "checkProduct :: Called with extProduct = " + JSON.stringify(extProduct, null, 2));

        extProduct.bought = (extProduct.bought === false) ? true : false;

        this.dataService.editProduct(this.shop.id, extProduct);
    }

}
