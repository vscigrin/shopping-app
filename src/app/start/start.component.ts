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
    user: any = {};

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private dataService: DataService
    ) { }

    ngOnInit() {
        console.log(this.tag + "ngOnInit :: Called");

        let originalUser = this.dataService.getOriginalUser();

        if (originalUser) {
            console.log(this.tag + "ngOnInit :: User already registered");
            this.router.navigate(['shop-list'], {});
        }
    }

    register() {
        console.log(this.tag + "register :: Called");

        if (this.user.name.length > 0 && this.user.email.length > 0) {
            console.log(this.tag + "register :: Successfully registered with user: " + JSON.stringify(this.user, null, 2));

            this.dataService.setOriginalUser(this.user);
            this.dataService.setSelectedUser(this.user);
            this.router.navigate(['shop-list'], {});
        }
        else {
            console.log(this.tag + "register :: Error :: Please register first");
        }
    }

}
