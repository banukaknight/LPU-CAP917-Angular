import { TestBed } from '@angular/core/testing';

import { Ca1Service } from './ca1.service';

describe('Ca1Service', () => {
  let service: Ca1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Ca1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
