import { TestBed } from '@angular/core/testing';

import { BffRequestService } from './bff-request.service';

describe('BffRequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BffRequestService = TestBed.get(BffRequestService);
    expect(service).toBeTruthy();
  });
});
