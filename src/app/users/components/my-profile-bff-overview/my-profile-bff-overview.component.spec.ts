import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileBffOverviewComponent } from './my-profile-bff-overview.component';

describe('MyProfileBffOverviewComponent', () => {
  let component: MyProfileBffOverviewComponent;
  let fixture: ComponentFixture<MyProfileBffOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileBffOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileBffOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
