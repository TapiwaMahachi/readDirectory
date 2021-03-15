import { TestBed } from '@angular/core/testing';

import { DirentService } from './dirent.service';

describe('DirentService', () => {
  let service: DirentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
