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

    users: any = [];
    originalUser: string = "";
    selectedUser: string = "";

    constructor(private route: ActivatedRoute, private router: Router, private dataService: DataService, private syncService: SyncService) {
        this.users = [];
        this.selectedUser = "";
    }

    ngOnInit() {
        console.log(this.tag + "ngOnInit :: Called");

        let tmpOriginalUser = this.dataService.getOriginalUser();
        console.log(this.tag + "ngOnInit :: tmpOriginalUser = " + JSON.stringify(tmpOriginalUser, null, 2));

        if (tmpOriginalUser) {

            this.originalUser = tmpOriginalUser;
            this.users.push(tmpOriginalUser);
            this.selectedUser = tmpOriginalUser.email;

            let tmpSelectedUser = this.dataService.getSelectedUser();
            console.log(this.tag + "ngOnInit :: tmpSelectedUser = " + JSON.stringify(tmpSelectedUser, null, 2));

            if (tmpSelectedUser && tmpSelectedUser.email !== tmpOriginalUser.email) {

                this.users.push(tmpSelectedUser);
                this.selectedUser = tmpSelectedUser.email;
            }
            else {
                this.dataService.setSelectedUser(tmpOriginalUser);
            }
        }
    }

    goBack() {
        console.log(this.tag + "goBack :: Called");

        this.router.navigate(['shop-list']);
    }

    sync() {
        console.log(this.tag + "sync :: Called");

        if (confirm("Do you want to syncronize you data with server?") == true) {

            this.syncService.sendData();
            //syncService
            /*
            let newUsers = [
                { "email": "vitalij.scigrin@gmail.com", "name": "Vitalij" },
                { "email": "arina.avdejeva@gmail.com", "name": "Arina" },
                { "email": "ksenia.scigrin@gmail.com", "name": "Ksenia" },
                { "email": "polina.scigrin@gmail.com", "name": "Polina" }
            ];

            this.users = newUsers;

            let tmpSelectedUser = this.dataService.getSelectedUser();

            if (tmpSelectedUser) {

                let tmpSelectedUserFound = this.users.find(item => item.email === tmpSelectedUser.email);
                if (tmpSelectedUserFound) {
                    this.selectedUser = tmpSelectedUserFound.email;
                }
                else {
                    this.selectedUser = this.originalUser;
                }
            }
            */
        }
    }

    selectUsersChange(event) {
        console.log(this.tag + "selectUsersChange :: Called with event: " + JSON.stringify(event, null, 2));

        let tmpSelectedUser = this.users.find(item => item.email === event);
        console.log(this.tag + "selectUsersChange :: tmpSelectedUser: " + JSON.stringify(tmpSelectedUser, null, 2));

        this.dataService.setSelectedUser(tmpSelectedUser);
    }

}
