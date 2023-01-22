import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SyncService {

    tag: string = "[SyncService] ";

    constructor(private httpClient: HttpClient) { }

    sendData() {
        //return this.httpClient.get("http://localhost:9000/.netlify/functions/api/getProducts");

        const headers = { 'Authorization': 'Bearer my-token', 'My-Custom-Header': 'foobar' };
        let localData = localStorage.getItem("shops");

        try {
            let localDataObj = JSON.parse(localData);

            if (localDataObj) {
                const body = localDataObj;
                console.log(this.tag + "sendData :: body = " + JSON.stringify(body, null, 2));

                this.httpClient.post<any>('http://localhost:9000/.netlify/functions/api/sendData', body, { headers }).subscribe({
                    next: data => {
                        console.log(this.tag + "sendData :: post success :: data = " + JSON.stringify(data, null, 2));
                    },
                    error: error => {
                        console.error(this.tag + "sendData :: post error :: error = " + JSON.stringify(error, null, 2));
                    }
                });
            }
            else {
                console.warn(this.tag + "sendData :: warning :: nothing to send");
            }

        }
        catch (err) {
            console.error(this.tag + "sendData :: catch error :: err = " + JSON.stringify(err, null, 2));
        }


    }
}
