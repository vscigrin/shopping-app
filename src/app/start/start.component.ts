import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../data.service';

@Component({
    selector: 'app-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {

    tag: string = "[StartComponent] ";

    title: string = "Register";
    family: string = "";

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit() {
        console.log(this.tag + "ngOnInit :: Called");

        let family = this.dataService.getFamily();

        if (family) {
            console.log(this.tag + "ngOnInit :: family already registered");
            this.router.navigate(['shop-list'], {});
        }
    }

    register() {
        console.log(this.tag + "register :: Called");

        if (this.family.length > 0) {
            console.log(this.tag + "register :: Successfully registered with family: " + JSON.stringify(this.family, null, 2));

            this.dataService.setFamily(this.family);
            this.router.navigate(['shop-list'], {});
        }
        else {
            console.log(this.tag + "register :: Error :: Please register first");
        }
    }

}
