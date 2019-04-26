import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileOverviewComponent } from './user-profile-overview.component';

describe('UserProfileOverviewComponent', () => {
  let component: UserProfileOverviewComponent;
  let fixture: ComponentFixture<UserProfileOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
