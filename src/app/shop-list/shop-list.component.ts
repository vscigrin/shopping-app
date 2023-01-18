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

      this.shopList = this.dataService.getShops();
    });
  }

  addShop() {
    console.log(this.tag + "addShop :: Called");

    this.router.navigate(['add-shop'], { queryParams: { "shop": JSON.stringify(null) } });
  }

  viewShop(extShop) {
    console.log(this.tag + "viewShop :: Called with extShop = " + JSON.stringify(extShop, null, 2));

    this.router.navigate(['product-list'], { queryParams: { "shop": JSON.stringify(extShop) } });
  }

  editShop(extShop) {
    console.log(this.tag + "editShop :: Called with extShop = " + JSON.stringify(extShop, null, 2));

    this.router.navigate(['add-shop'], { queryParams: { "shop": JSON.stringify(extShop) } });
  }

  deleteShop(extShop) {
    console.log(this.tag + "deleteShop :: Called with extShop = " + JSON.stringify(extShop, null, 2));

    if (confirm("Delete shop?") == true) {
      this.dataService.deleteShop(extShop);
    }
  }
}
