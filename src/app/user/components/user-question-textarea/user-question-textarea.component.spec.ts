import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserQuestionTextareaComponent } from './user-question-textarea.component';

describe('UserQuestionTextareaComponent', () => {
  let component: UserQuestionTextareaComponent;
  let fixture: ComponentFixture<UserQuestionTextareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserQuestionTextareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserQuestionTextareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
