import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SyncService {

    constructor(private httpClient: HttpClient) { }

    public getUsers(): Observable<any> {
        return this.httpClient.get("http://localhost:9000/.netlify/functions/api/getProducts");
    }
}
