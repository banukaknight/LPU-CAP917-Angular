import { TestBed } from '@angular/core/testing';

import { LpuService } from './lpu.service';

describe('LpuService', () => {
  let service: LpuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LpuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
