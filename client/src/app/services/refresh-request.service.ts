import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RefreshRequest, RefreshRequestSystem } from './refresh-request';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

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

    submitRequest(refreshRequest: RefreshRequest): Observable<RefreshRequest> {
        return this.http.post<RefreshRequest>('/api/refreshrequest', refreshRequest);
    }

    getSystems(): Observable<Array<RefreshRequestSystem>> {
        const systemsObservable = new Observable<Array<RefreshRequestSystem>>((observer) => {
            const systems = Array<RefreshRequestSystem>();
            systems.push(<RefreshRequestSystem>{
                systemName : 'Folio',
                databaseName : 'Folio'
            });
            systems.push(<RefreshRequestSystem>{
                systemName : 'EngageTV',
                databaseName : 'EngageTV',
            });
            systems.push(<RefreshRequestSystem>{
                systemName : 'Crossroad',
                databaseName : 'Crossroad'
            });
            observer.next(systems);
            observer.complete();
        });
        return systemsObservable;
    }

    getSystemUsers(): Observable<Array<string>> {
        const usersObservable = new Observable<Array<string>>((observer) => {
            observer.next(['testuser5', 'testuser6']);
            observer.complete();
        });
        return usersObservable;
    }
}
