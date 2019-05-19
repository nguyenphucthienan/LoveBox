import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnansweredCoupleQuestionCardComponent } from './unanswered-couple-question-card.component';

describe('UnansweredCoupleQuestionCardComponent', () => {
  let component: UnansweredCoupleQuestionCardComponent;
  let fixture: ComponentFixture<UnansweredCoupleQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnansweredCoupleQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnansweredCoupleQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
