import { TestBed } from '@angular/core/testing';

import { SharedApiServiceService } from './shared-api-service.service';

describe('SharedApiServiceService', () => {
  let service: SharedApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
