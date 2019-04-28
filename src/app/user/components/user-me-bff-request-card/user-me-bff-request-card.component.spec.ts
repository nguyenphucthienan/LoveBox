import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeBffRequestCardComponent } from './user-me-bff-request-card.component';

describe('UserMeBffRequestCardComponent', () => {
  let component: UserMeBffRequestCardComponent;
  let fixture: ComponentFixture<UserMeBffRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMeBffRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMeBffRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
