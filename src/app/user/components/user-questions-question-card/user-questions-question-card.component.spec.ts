import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionsQuestionCardComponent } from './user-questions-question-card.component';

describe('UserQuestionsQuestionCardComponent', () => {
  let component: UserQuestionsQuestionCardComponent;
  let fixture: ComponentFixture<UserQuestionsQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionsQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionsQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
