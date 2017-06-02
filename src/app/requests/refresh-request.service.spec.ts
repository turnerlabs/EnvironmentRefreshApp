import { TestBed, inject } from '@angular/core/testing';

import { RefreshRequestService } from './refresh-request.service';

describe('RefreshRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshRequestService]
    });
  });

  it('should be created', inject([RefreshRequestService], (service: RefreshRequestService) => {
    expect(service).toBeTruthy();
  }));
});
