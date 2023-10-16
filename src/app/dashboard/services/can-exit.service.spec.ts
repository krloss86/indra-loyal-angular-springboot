import { TestBed } from '@angular/core/testing';

import { CanExitService } from './can-exit.service';

describe('CanExitService', () => {
  let service: CanExitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanExitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
