import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeBffTabComponent } from './user-me-bff-tab.component';

describe('UserMeBffTabComponent', () => {
  let component: UserMeBffTabComponent;
  let fixture: ComponentFixture<UserMeBffTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMeBffTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMeBffTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
