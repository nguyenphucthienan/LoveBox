import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { environment } from 'src/environments/environment';

import { BffRequestModalComponent } from '../../modals/bff-request-modal/bff-request-modal.component';

@Component({
  selector: 'app-my-profile-bff-request-card',
  templateUrl: './my-profile-bff-request-card.component.html',
  styleUrls: ['./my-profile-bff-request-card.component.scss']
})
export class MyProfileBffRequestCardComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() bffRequest: BffRequest;
  @Output() approved = new EventEmitter();
  @Output() rejected = new EventEmitter();

  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit() {
  }

  openBffRequestModal() {
    this.modalRef = this.modalService.show(BffRequestModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered',
      containerClass: 'top',
      animated: true,
      data: {
        bffRequest: this.bffRequest
      }
    });

    this.modalRef.content.approved
      .subscribe((bffRequest: BffRequest) => this.onRequestApproved(bffRequest));

    this.modalRef.content.rejected
      .subscribe((bffRequest: BffRequest) => this.onRequestRejected(bffRequest));
  }

  onRequestApproved(bffRequest: BffRequest) {
    this.approved.emit(bffRequest);
    this.modalRef.hide();
  }

  onRequestRejected(bffRequest: BffRequest) {
    this.rejected.emit(bffRequest);
    this.modalRef.hide();
  }

}
