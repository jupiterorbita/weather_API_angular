import { TestBed, inject } from '@angular/core/testing';

import { CityfindService } from './cityfind.service';

describe('CityfindService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityfindService]
    });
  });

  it('should be created', inject([CityfindService], (service: CityfindService) => {
    expect(service).toBeTruthy();
  }));
});
