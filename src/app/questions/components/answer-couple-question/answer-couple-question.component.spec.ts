import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerCoupleQuestionComponent } from './answer-couple-question.component';

describe('AnswerCoupleQuestionComponent', () => {
  let component: AnswerCoupleQuestionComponent;
  let fixture: ComponentFixture<AnswerCoupleQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerCoupleQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerCoupleQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
