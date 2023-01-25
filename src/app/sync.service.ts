import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { DataService } from './data.service';
import { AppConstants } from './app-constants';

@Injectable({
    providedIn: 'root'
})
export class SyncService {

    tag: string = "[SyncService] ";

    BACKEND_URL: string = "";

    constructor(private httpClient: HttpClient, private dataService: DataService) {

        if (AppConstants.BUILD_FOR_RELEASE === true) {
            this.BACKEND_URL = AppConstants.PROD_BACKEND_URL;
        }
        else {
            this.BACKEND_URL = AppConstants.DEV_BACKEND_URL;
        }
    }

    syncData() {
        console.log(this.tag + "syncData :: called with BACKEND_URL = " + this.BACKEND_URL);

        //const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let family = this.dataService.getFamily();
        let data = this.dataService.getAllData();

        try {
            let localDataObj = {
                "family": family,
                "data": data
            };

            if (localDataObj) {
                const body = localDataObj;
                console.log(this.tag + "syncData :: body = " + JSON.stringify(body, null, 2));

                this.httpClient.post<any>(this.BACKEND_URL + 'syncData', body).subscribe({
                    next: response => {
                        console.log(this.tag + "syncData :: post success :: response = " + JSON.stringify(response, null, 2));

                        this.dataService.saveAllData(response.response);
                        alert("Data synced successfully.");
                    },
                    error: error => {
                        console.error(this.tag + "syncData :: post error :: error = " + JSON.stringify(error, null, 2));
                        alert("Data sync failed.");
                    }
                });
            }
            else {
                console.warn(this.tag + "syncData :: warning :: nothing to send");
            }

        }
        catch (err) {
            console.error(this.tag + "syncData :: catch error :: err = " + JSON.stringify(err, null, 2));
            alert("Data sync failed.");
        }


    }
}
