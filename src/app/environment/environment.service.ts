import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Environment } from './environment'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EnvironmentService {
    constructor(
        private http: Http
    ) { }

    getEnvironments(): Promise<Environment[]> {
        return this.http.get('/api/environment')
            .toPromise()
            .then(response => response.json() as Environment[]);
    }
}
