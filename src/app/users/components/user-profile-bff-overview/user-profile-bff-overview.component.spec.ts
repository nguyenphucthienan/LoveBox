import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileBffOverviewComponent } from './user-profile-bff-overview.component';

describe('UserProfileBffOverviewComponent', () => {
  let component: UserProfileBffOverviewComponent;
  let fixture: ComponentFixture<UserProfileBffOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileBffOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileBffOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
