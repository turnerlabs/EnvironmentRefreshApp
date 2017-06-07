import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';

import { ConfigService } from './config.service';

describe('ConfigService', () => {
    const httpStub = {
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                ConfigService,
                { provide: Http, useValue: httpStub }
            ]
        });
    });

    it('should be created', inject([ConfigService], (service: ConfigService) => {
        expect(service).toBeTruthy();
    }));
});
