import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionDetailComponent } from './user-question-detail.component';

describe('UserQuestionDetailComponent', () => {
  let component: UserQuestionDetailComponent;
  let fixture: ComponentFixture<UserQuestionDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
