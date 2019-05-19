import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleQuestionCardComponent } from './couple-question-card.component';

describe('CoupleQuestionCardComponent', () => {
  let component: CoupleQuestionCardComponent;
  let fixture: ComponentFixture<CoupleQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupleQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupleQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
