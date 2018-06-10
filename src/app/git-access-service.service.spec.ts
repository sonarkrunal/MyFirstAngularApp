import { TestBed, inject } from '@angular/core/testing';

import { GitAccessServiceService } from './git-access-service.service';

describe('GitAccessServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GitAccessServiceService]
    });
  });

  it('should be created', inject([GitAccessServiceService], (service: GitAccessServiceService) => {
    expect(service).toBeTruthy();
  }));
});
