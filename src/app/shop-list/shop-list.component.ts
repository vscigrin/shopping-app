import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../data.service';

@Component({
    selector: 'app-shop-list',
    templateUrl: './shop-list.component.html',
    styleUrls: ['./shop-list.component.css']
})

export class ShopListComponent implements OnInit {

    tag: string = "[ShopListComponent] ";
    shopList: any = [];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit() {
        console.log(this.tag + "ngOnInit :: Called");

        this.route.queryParams.subscribe(params => {
            console.log(this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = " + JSON.stringify(params, null, 2));

            let family = this.dataService.getFamily();
            if (family) {
                this.shopList = this.dataService.getShops();
            }
            else {
                this.router.navigate([''], {});
            }
        });
    }

    addShop() {
        console.log(this.tag + "addShop :: Called");

        this.router.navigate(['add-shop'], { queryParams: { "shopId": JSON.stringify(null) } });
    }

    viewShop(extShop) {
        console.log(this.tag + "viewShop :: Called with extShop.id = " + JSON.stringify(extShop.id, null, 2));

        this.router.navigate(['product-list'], { queryParams: { "shopId": JSON.stringify(extShop.id) } });
    }

    editShop(extShop) {
        console.log(this.tag + "editShop :: Called with extShop.id = " + JSON.stringify(extShop.id, null, 2));

        this.router.navigate(['add-shop'], { queryParams: { "shopId": JSON.stringify(extShop.id) } });
    }

    showSettings() {
        console.log(this.tag + "showSettings :: Called");

        this.router.navigate(['settings'], {});
    }
}
