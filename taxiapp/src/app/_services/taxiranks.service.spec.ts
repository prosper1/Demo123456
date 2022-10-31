import { TestBed } from '@angular/core/testing';

import { TaxiranksService } from './taxiranks.service';

describe('TaxiranksService', () => {
  let service: TaxiranksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxiranksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
