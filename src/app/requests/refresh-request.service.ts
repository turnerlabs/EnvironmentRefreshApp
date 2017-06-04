import { Injectable } from '@angular/core';
import { RefreshRequest } from './refresh-request'
import { RefreshRequestsData } from './refresh-request.mock';

@Injectable()
export class RefreshRequestService {
    getRequests(): Promise<RefreshRequest[]> {
        return Promise.resolve(RefreshRequestsData);
    }

      getRequest(id: string): Promise<RefreshRequest> {
        return Promise.resolve(RefreshRequestsData.find(x => x.id === id));
    }

}
