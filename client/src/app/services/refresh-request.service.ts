import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RefreshRequest } from './refresh-request'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class RefreshRequestService {
    constructor(
        private http: HttpClient
    ) { }

    getRequests(): Observable<RefreshRequest[]> {
        return this.http.get<RefreshRequest[]>('/api/refreshrequest');
    }

    getRequest(id: string): Observable<RefreshRequest> {
        return this.http.get<RefreshRequest>(`/api/refreshrequest/${id}`);
    }
}
