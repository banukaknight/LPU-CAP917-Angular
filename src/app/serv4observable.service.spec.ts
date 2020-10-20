import { TestBed } from '@angular/core/testing';

import { Serv4observableService } from './serv4observable.service';

describe('Serv4observableService', () => {
  let service: Serv4observableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serv4observableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
