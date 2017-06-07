import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';

import { RefreshRequestService } from './refresh-request.service';

describe('RefreshRequestService', () => {
    const httpStub = {
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                RefreshRequestService,
                { provide: Http, useValue: httpStub }]
        });
    });

    it('should be created', inject([RefreshRequestService], (service: RefreshRequestService) => {
        expect(service).toBeTruthy();
    }));
});
