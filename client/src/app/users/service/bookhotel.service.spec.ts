import { TestBed } from '@angular/core/testing';

import { BookhotelService } from './bookhotel.service';

describe('BookhotelService', () => {
  let service: BookhotelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookhotelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
