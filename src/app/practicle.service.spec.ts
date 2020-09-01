import { TestBed } from '@angular/core/testing';

import { PracticleService } from './practicle.service';

describe('PracticleService', () => {
  let service: PracticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PracticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
