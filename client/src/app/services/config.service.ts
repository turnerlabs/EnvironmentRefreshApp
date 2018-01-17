import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './config'
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ConfigService {
    constructor(
        private http: HttpClient
    ) { }

    getConfig(environment: string): Observable<Config> {
        return this.http.get<Config>(`/api/config/${environment}`);
    }
}
