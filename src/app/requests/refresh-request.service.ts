import { Injectable } from '@angular/core';
import { RefreshRequest } from './refreshrequest'

@Injectable()
export class RefreshRequestService {
    refreshRequests: RefreshRequest[] = [
        {
            id: 'dd5ccc36-7fdb-452e-ad08-ff6561a053f3',
            environment: 'MAIN',
            status: 'Pending',
            requestedBy: 'Cannon, Robert',
            requestedOn: 'Now',
            scheduledOn: 'Now',
            databases: 'Foundation'
        },
        {
            id: '0b8b0709-c03b-4d2a-a9ec-ec39e535f7a3',
            environment: 'ASQA',
            status: 'Pending',
            requestedBy: 'Cannon, Robert',
            requestedOn: 'Now',
            scheduledOn: 'Now',
            databases: 'EngageTV'
        }
    ];

    constructor() { }

    getRequests(): Promise<RefreshRequest[]> {
        return Promise.resolve(this.refreshRequests);
    }
}
