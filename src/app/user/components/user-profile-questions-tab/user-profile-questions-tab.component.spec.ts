import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileQuestionsTabComponent } from './user-profile-questions-tab.component';

describe('UserProfileQuestionsTabComponent', () => {
  let component: UserProfileQuestionsTabComponent;
  let fixture: ComponentFixture<UserProfileQuestionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileQuestionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileQuestionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
