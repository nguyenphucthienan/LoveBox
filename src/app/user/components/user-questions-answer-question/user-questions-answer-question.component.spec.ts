import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionsAnswerQuestionComponent } from './user-questions-answer-question.component';

describe('UserQuestionsAnswerQuestionComponent', () => {
  let component: UserQuestionsAnswerQuestionComponent;
  let fixture: ComponentFixture<UserQuestionsAnswerQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionsAnswerQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionsAnswerQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
