import { TestBed, async, inject } from '@angular/core/testing';

import { CheckSelfUserGuard } from './check-self-user.guard';

describe('CheckSelfUserGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckSelfUserGuard]
    });
  });

  it('should ...', inject([CheckSelfUserGuard], (guard: CheckSelfUserGuard) => {
    expect(guard).toBeTruthy();
  }));
});
