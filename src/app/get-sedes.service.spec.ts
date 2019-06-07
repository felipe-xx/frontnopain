import { TestBed } from '@angular/core/testing';

import { GetSedesService } from './get-sedes.service';

describe('GetSedesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetSedesService = TestBed.get(GetSedesService);
    expect(service).toBeTruthy();
  });
});
