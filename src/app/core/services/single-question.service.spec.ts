import { TestBed } from '@angular/core/testing';

import { SingleQuestionService } from './single-question.service';

describe('SingleQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SingleQuestionService = TestBed.get(SingleQuestionService);
    expect(service).toBeTruthy();
  });
});
