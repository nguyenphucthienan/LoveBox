import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileBffRequestCardComponent } from './my-profile-bff-request-card.component';

describe('MyProfileBffRequestCardComponent', () => {
  let component: MyProfileBffRequestCardComponent;
  let fixture: ComponentFixture<MyProfileBffRequestCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileBffRequestCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileBffRequestCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
