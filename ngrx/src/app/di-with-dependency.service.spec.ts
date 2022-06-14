import { TestBed } from '@angular/core/testing';

import { DiWithDependencyService } from './di-with-dependency.service';

describe('DiWithDependencyService', () => {
  let service: DiWithDependencyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiWithDependencyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
