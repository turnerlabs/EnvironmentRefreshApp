import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { RefreshRequest } from './refresh-request'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RefreshRequestService {
    constructor(
        private http: Http
    ) { }

    getRequests(): Promise<RefreshRequest[]> {
        return this.http.get('/api/refreshrequest')
            .toPromise()
            .then(response => response.json() as RefreshRequest[]);
    }

      getRequest(id: string): Promise<RefreshRequest> {
        return this.http.get(`/api/refreshrequest/${id}`)
            .toPromise()
            .then(response => response.json() as RefreshRequest);
    }
}
