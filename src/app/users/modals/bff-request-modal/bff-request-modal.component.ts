import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bff-request-modal',
  templateUrl: './bff-request-modal.component.html',
  styleUrls: ['./bff-request-modal.component.scss']
})
export class BffRequestModalComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() bffRequest: BffRequest;
  @Output() approved = new EventEmitter();
  @Output() rejected = new EventEmitter();

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  approveRequest() {
    this.approved.emit(this.bffRequest);
  }

  rejectRequest() {
    this.rejected.emit(this.bffRequest);
  }

}
