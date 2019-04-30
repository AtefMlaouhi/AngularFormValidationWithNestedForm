import { TestBed } from '@angular/core/testing';

import { UserMailService } from './user-mail.service';

describe('UserMailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserMailService = TestBed.get(UserMailService);
    expect(service).toBeTruthy();
  });
});
