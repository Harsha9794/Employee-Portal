import { TestBed } from '@angular/core/testing';

import { EmployyeService } from './employye.service';

describe('EmployyeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployyeService = TestBed.get(EmployyeService);
    expect(service).toBeTruthy();
  });
});
