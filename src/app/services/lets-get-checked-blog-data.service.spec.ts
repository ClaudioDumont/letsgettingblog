import { TestBed } from '@angular/core/testing';

import { LetsGetCheckedBlogDataService } from './lets-get-checked-blog-data.service';

describe('LetsGetCheckedBlogDataService', () => {
  let service: LetsGetCheckedBlogDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LetsGetCheckedBlogDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
