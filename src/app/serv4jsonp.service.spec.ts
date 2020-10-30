import { TestBed } from '@angular/core/testing';

import { Serv4jsonpService } from './serv4jsonp.service';

describe('Serv4jsonpService', () => {
  let service: Serv4jsonpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serv4jsonpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
