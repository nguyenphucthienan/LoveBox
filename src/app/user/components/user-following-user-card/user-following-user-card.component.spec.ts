import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFollowingUserCardComponent } from './user-following-user-card.component';

describe('UserFollowingUserCardComponent', () => {
  let component: UserFollowingUserCardComponent;
  let fixture: ComponentFixture<UserFollowingUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFollowingUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFollowingUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
