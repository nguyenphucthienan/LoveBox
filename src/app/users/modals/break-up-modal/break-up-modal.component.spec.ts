import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakUpModalComponent } from './break-up-modal.component';

describe('BreakUpModalComponent', () => {
  let component: BreakUpModalComponent;
  let fixture: ComponentFixture<BreakUpModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakUpModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakUpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
