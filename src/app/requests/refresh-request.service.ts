import { Injectable } from '@angular/core';
import { RefreshRequest } from './refresh-request'
import { RefreshRequestsListData } from './refresh-request.mock';

@Injectable()
export class RefreshRequestService {
    getRequests(): Promise<RefreshRequest[]> {
        return Promise.resolve(RefreshRequestsListData);
    }
}
