import { TestBed, inject } from '@angular/core/testing';

import { Http } from '@angular/http';

import { EnvironmentService } from './environment.service';

describe('EnvironmentService', () => {
    const httpStub = {
    };

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                EnvironmentService,
                { provide: Http, useValue: httpStub }
            ]
        });
    });

    it('should be created', inject([EnvironmentService], (service: EnvironmentService) => {
        expect(service).toBeTruthy();
    }));
});
