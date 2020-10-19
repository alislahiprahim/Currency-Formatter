import { TestBed } from '@angular/core/testing';

import { CurrServiceService } from './curr-service.service';

describe('CurrServiceService', () => {
  let service: CurrServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
