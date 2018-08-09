import { TestBed, inject } from '@angular/core/testing';

import { AuthGruardService } from './auth-gruard.service';

describe('AuthGruardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGruardService]
    });
  });

  it('should be created', inject([AuthGruardService], (service: AuthGruardService) => {
    expect(service).toBeTruthy();
  }));
});
