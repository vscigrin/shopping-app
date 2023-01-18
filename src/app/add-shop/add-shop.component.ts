import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';

import { DataService } from '../data.service';

@Component({
  selector: 'app-add-shop',
  templateUrl: './add-shop.component.html',
  styleUrls: ['./add-shop.component.css']
})
export class AddShopComponent implements OnInit {

  tag: string = "[AddShopComponent] ";
  title: string = "";
  shop: any = {};
  isEdit: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(this.tag + "ngOnInit :: this.route.queryParams.subscribe :: params = ", params);

      this.title = "Add Shop";
      this.isEdit = false;
      this.shop.id = "" + Date.now();
      this.shop.name = "";

      let parsedShop = JSON.parse(params.shop);
      console.log(this.tag + "ngOnInit :: parsedShop = ", parsedShop);

      if (parsedShop) {
        console.log(this.tag + "ngOnInit :: params are not empty");

        this.title = "Edit Shop";
        this.isEdit = true;
        this.shop.id = parsedShop.id;
        this.shop.name = parsedShop.name;
      }

      console.log(this.tag + "ngOnInit :: this.shop = " + JSON.stringify(this.shop, null, 2));
    });
  }

  goBack() {
    console.log(this.tag + "goBack :: Called");

    this.router.navigate(['']);
  }

  saveShop() {
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
  }


}
