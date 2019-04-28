import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeQuestionsTabComponent } from './user-me-questions-tab.component';

describe('UserMeQuestionsTabComponent', () => {
  let component: UserMeQuestionsTabComponent;
  let fixture: ComponentFixture<UserMeQuestionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMeQuestionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMeQuestionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
