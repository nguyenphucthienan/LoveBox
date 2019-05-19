import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoupleQuestionListComponent } from './couple-question-list.component';

describe('CoupleQuestionListComponent', () => {
  let component: CoupleQuestionListComponent;
  let fixture: ComponentFixture<CoupleQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoupleQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoupleQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
