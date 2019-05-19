import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsFeedQuestionListComponent } from './news-feed-question-list.component';

describe('NewsFeedQuestionListComponent', () => {
  let component: NewsFeedQuestionListComponent;
  let fixture: ComponentFixture<NewsFeedQuestionListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsFeedQuestionListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsFeedQuestionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
