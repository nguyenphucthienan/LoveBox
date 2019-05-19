import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleQuestionDetailComponent } from './couple-question-detail.component';

describe('CoupleQuestionDetailComponent', () => {
  let component: CoupleQuestionDetailComponent;
  let fixture: ComponentFixture<CoupleQuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupleQuestionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupleQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
