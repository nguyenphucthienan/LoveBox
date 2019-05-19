import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedCoupleQuestionListComponent } from './news-feed-couple-question-list.component';

describe('NewsFeedCoupleQuestionListComponent', () => {
  let component: NewsFeedCoupleQuestionListComponent;
  let fixture: ComponentFixture<NewsFeedCoupleQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedCoupleQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedCoupleQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
