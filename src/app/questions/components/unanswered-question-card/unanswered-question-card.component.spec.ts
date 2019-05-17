import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnansweredQuestionCardComponent } from './unanswered-question-card.component';

describe('UnansweredQuestionCardComponent', () => {
  let component: UnansweredQuestionCardComponent;
  let fixture: ComponentFixture<UnansweredQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnansweredQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnansweredQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
