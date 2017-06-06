import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Config } from './config'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ConfigService {
    constructor(
        private http: Http
    ) { }

    getConfig(environment: string): Promise<Config> {
        return this.http.get(`/api/config/${environment}`)
            .toPromise()
            .then(response => response.json() as Config);
    }
}
