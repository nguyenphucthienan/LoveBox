import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BffRequestModalComponent } from './bff-request-modal.component';

describe('BffRequestModalComponent', () => {
  let component: BffRequestModalComponent;
  let fixture: ComponentFixture<BffRequestModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BffRequestModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BffRequestModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
