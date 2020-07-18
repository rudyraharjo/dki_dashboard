import { TestBed } from '@angular/core/testing';

import { DatareportService } from './datareport.service';

describe('DatareportService', () => {
  let service: DatareportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatareportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
