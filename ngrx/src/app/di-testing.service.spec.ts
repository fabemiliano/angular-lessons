import { TestBed } from '@angular/core/testing';

import { DiTestingService } from './di-testing.service';

describe('DiTestingService', () => {
  let service: DiTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
