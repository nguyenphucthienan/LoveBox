import { TestBed } from '@angular/core/testing';

import { CoupleQuestionService } from './couple-question.service';

describe('CoupleQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoupleQuestionService = TestBed.get(CoupleQuestionService);
    expect(service).toBeTruthy();
  });
});
