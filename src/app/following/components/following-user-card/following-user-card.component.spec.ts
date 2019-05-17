import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingUserCardComponent } from './following-user-card.component';

describe('FollowingUserCardComponent', () => {
  let component: FollowingUserCardComponent;
  let fixture: ComponentFixture<FollowingUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FollowingUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
