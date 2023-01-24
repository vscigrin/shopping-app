import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { DataService } from '../data.service';
import { SyncService } from '../sync.service';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

    tag: string = "[SettingsComponent] ";

    title: string = "Settings";

    family: string = "";

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private syncService: SyncService) {

    }

    ngOnInit() {
        console.log(this.tag + "ngOnInit :: Called");

        this.family = this.dataService.getFamily();
    }

    goBack() {
        console.log(this.tag + "goBack :: Called");

        this.router.navigate(['shop-list']);
    }

    sync() {
        console.log(this.tag + "sync :: Called");

        this.syncService.syncData();

        /*
        if (confirm("Do you want to syncronize you data with server?") == true) {

        }
        */
    }

}
