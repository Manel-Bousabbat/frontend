import { TestBed } from '@angular/core/testing';

import { InfoSuppService } from './info-supp.service';

describe('InfoSuppService', () => {
  let service: InfoSuppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoSuppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
