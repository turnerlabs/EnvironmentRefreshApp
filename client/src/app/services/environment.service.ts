import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from './environment'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class EnvironmentService {
    constructor(
        private http: HttpClient
    ) { }

    getEnvironments(): Observable<Environment[]> {
        return this.http.get<Environment[]>('/api/environment');
    }
}
