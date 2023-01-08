import { TestBed } from '@angular/core/testing';

import { ShareFishService } from './share-fish.service';

describe('ShareFishService', () => {
  let service: ShareFishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShareFishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
