import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefDetailUserCardComponent } from './brief-detail-user-card.component';

describe('BriefDetailUserCardComponent', () => {
  let component: BriefDetailUserCardComponent;
  let fixture: ComponentFixture<BriefDetailUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BriefDetailUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BriefDetailUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
