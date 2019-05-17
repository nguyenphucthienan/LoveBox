import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileBffTabComponent } from './user-profile-bff-tab.component';

describe('UserProfileBffTabComponent', () => {
  let component: UserProfileBffTabComponent;
  let fixture: ComponentFixture<UserProfileBffTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileBffTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileBffTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
