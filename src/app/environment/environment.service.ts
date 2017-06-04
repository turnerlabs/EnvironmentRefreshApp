import { Injectable } from '@angular/core';
import { Environment } from './environment'
import { EnvironmentListData } from './environment.mock';

@Injectable()
export class EnvironmentService {
    getEnvironments(): Promise<Environment[]> {
        return Promise.resolve(EnvironmentListData);
    }
}
