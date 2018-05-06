import { TestBed, inject } from '@angular/core/testing';

import { FollowerServiceService } from './follower-service.service';

describe('FollowerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FollowerServiceService]
    });
  });

  it('should be created', inject([FollowerServiceService], (service: FollowerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
