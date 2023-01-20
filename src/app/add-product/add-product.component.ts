import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

    tag: string = "[AddProductComponent] ";
    title: string = "";
    shop: any = {};
    product: any = {};
    isEdit: boolean = false;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit() {

        this.route.queryParams.subscribe(params => {
            console.log(this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = " + JSON.stringify(params, null, 2));

            this.title = "Add Product";
            this.isEdit = false;

            let parsedShop = JSON.parse(params.shop);
            this.shop = parsedShop;
            console.log(this.tag + "ngOnInit :: parsedShop = ", parsedShop);

            let parsedProduct = JSON.parse(params.product);
            console.log(this.tag + "ngOnInit :: parsedProduct = ", parsedProduct);

            this.product.id = "" + Date.now();
            this.product.name = "";
            this.product.amount = 1;
            this.product.bought = false;


            this.product.shopId = parsedShop.id;

            if (parsedProduct) {

                this.title = "Edit Product";
                this.isEdit = true;

                this.product.id = parsedProduct.id;
                this.product.name = parsedProduct.name;
                this.product.amount = parsedProduct.amount;
                this.product.bought = parsedProduct.bought;
            }

            console.log(this.tag + "ngOnInit :: this.product = " + JSON.stringify(this.product, null, 2));
        });
    }

    goBack() {
        console.log(this.tag + "goBack :: Called");

        this.router.navigate(['product-list'], { queryParams: { shop: JSON.stringify(this.shop) } });
    }

    saveProduct() {
        console.log(this.tag + "saveProduct :: Called");

        this.product.name = this.product.name.trim();

        if (this.product.name !== "") {

            if (this.isEdit) {
                this.dataService.editProduct(this.product);
            }
            else {
                this.dataService.addProduct(this.product);
            }

            this.goBack();

        }
        else {
            alert("Please enter the product name!");
        }
    }

    minusAmount() {
        console.log(this.tag + "minusAmount :: Called");

        if (parseInt(this.product.amount, 10) > 1) {

            this.product.amount--;
            //this.dataService.editProduct(this.product);
        }
        else {
            console.log(this.tag + "minusAmount :: Called, but not needed to change this.");
            //alert("Product amount must be positive!");
        }
    }

    plusAmount() {
        console.log(this.tag + "plusAmount :: Called");

        this.product.amount++;
        //this.dataService.editProduct(this.product);
    }

}
