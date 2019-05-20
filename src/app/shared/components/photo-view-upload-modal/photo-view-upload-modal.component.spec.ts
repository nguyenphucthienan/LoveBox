import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoViewUploadModalComponent } from './photo-view-upload-modal.component';

describe('PhotoViewUploadModalComponent', () => {
  let component: PhotoViewUploadModalComponent;
  let fixture: ComponentFixture<PhotoViewUploadModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoViewUploadModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoViewUploadModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
