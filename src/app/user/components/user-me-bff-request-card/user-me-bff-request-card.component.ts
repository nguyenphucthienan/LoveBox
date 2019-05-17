import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
// import { ModalDirective } from 'angular-bootstrap-md';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-me-bff-request-card',
  templateUrl: './user-me-bff-request-card.component.html',
  styleUrls: ['./user-me-bff-request-card.component.scss']
})
export class UserMeBffRequestCardComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() bffRequest: BffRequest;
  @Output() approved = new EventEmitter();
  @Output() rejected = new EventEmitter();

  // @ViewChild('bffRequestModal') bffRequestModal: ModalDirective;

  constructor() { }

  ngOnInit() {
  }

  openBffRequestModal() {
    // this.bffRequestModal.show();
  }

  approveRequest() {
    this.approved.emit(this.bffRequest);
    // this.bffRequestModal.hide();
  }

  rejectRequest() {
    this.rejected.emit(this.bffRequest);
    // this.bffRequestModal.hide();
  }

}
