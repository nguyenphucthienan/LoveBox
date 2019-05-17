import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileQuestionsTabComponent } from './my-profile-questions-tab.component';

describe('MyProfileQuestionsTabComponent', () => {
  let component: MyProfileQuestionsTabComponent;
  let fixture: ComponentFixture<MyProfileQuestionsTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileQuestionsTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileQuestionsTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
