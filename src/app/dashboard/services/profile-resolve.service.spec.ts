import { TestBed } from '@angular/core/testing';

import { ProfileResolveService } from './profile-resolve.service';

describe('ProfileResolveService', () => {
  let service: ProfileResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfileResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
