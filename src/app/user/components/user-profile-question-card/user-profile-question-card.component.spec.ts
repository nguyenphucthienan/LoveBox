import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileQuestionCardComponent } from './user-profile-question-card.component';

describe('UserProfileQuestionCardComponent', () => {
  let component: UserProfileQuestionCardComponent;
  let fixture: ComponentFixture<UserProfileQuestionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileQuestionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileQuestionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
