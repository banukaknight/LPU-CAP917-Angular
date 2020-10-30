import { TestBed } from '@angular/core/testing';

import { Serv4pracService } from './serv4prac.service';

describe('Serv4pracService', () => {
  let service: Serv4pracService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Serv4pracService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
