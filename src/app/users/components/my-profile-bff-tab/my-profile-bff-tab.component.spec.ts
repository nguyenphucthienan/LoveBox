import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProfileBffTabComponent } from './my-profile-bff-tab.component';

describe('MyProfileBffTabComponent', () => {
  let component: MyProfileBffTabComponent;
  let fixture: ComponentFixture<MyProfileBffTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProfileBffTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProfileBffTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
