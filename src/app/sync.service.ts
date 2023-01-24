import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
    providedIn: 'root'
})
export class SyncService {

    tag: string = "[SyncService] ";

    constructor(private httpClient: HttpClient, private dataService: DataService) { }

    syncData() {
        console.log(this.tag + "syncData :: called");

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

                //this.httpClient.post<any>('http://localhost:9000/.netlify/functions/api/sendData', body, { headers }).subscribe({

                this.httpClient.post<any>('http://localhost:9000/.netlify/functions/api/syncData', body).subscribe({
                    next: response => {
                        console.log(this.tag + "syncData :: post success :: response = " + JSON.stringify(response, null, 2));

                        this.dataService.saveAllData(response.response);
                    },
                    error: error => {
                        console.error(this.tag + "syncData :: post error :: error = " + JSON.stringify(error, null, 2));
                    }
                });
            }
            else {
                console.warn(this.tag + "syncData :: warning :: nothing to send");
            }

        }
        catch (err) {
            console.error(this.tag + "syncData :: catch error :: err = " + JSON.stringify(err, null, 2));
        }


    }
}
