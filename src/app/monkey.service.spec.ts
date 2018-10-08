import { TestBed, inject } from '@angular/core/testing';

import { MonkeyService } from './services/monkey.service';

describe('MonkeyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonkeyService]
    });
  });

  it('should be created', inject([MonkeyService], (service: MonkeyService) => {
    expect(service).toBeTruthy();
  }));
});
