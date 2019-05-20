import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-photo-view-upload-modal',
  templateUrl: './photo-view-upload-modal.component.html',
  styleUrls: ['./photo-view-upload-modal.component.scss']
})
export class PhotoViewUploadModalComponent implements OnInit {

  @Input() title: string;
  @Input() uploadUrl: string;
  @Input() photoUrl: string;

  @Output() photoUploaded = new EventEmitter();

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  uploadSucceed(data: any) {
    this.photoUrl = data.photo && data.photo.url;
    this.photoUploaded.emit(data);
  }

}
