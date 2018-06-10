import { TestBed, inject } from '@angular/core/testing';

import { HttpServiceTestService } from './http-service-test.service';

describe('HttpServiceTestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpServiceTestService]
    });
  });

  it('should be created', inject([HttpServiceTestService], (service: HttpServiceTestService) => {
    expect(service).toBeTruthy();
  }));
});
