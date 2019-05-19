import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MDBModalRef, MDBModalService } from 'angular-bootstrap-md';
import { BffDetail } from 'src/app/core/models/bff-detail.interface';
import { User } from 'src/app/core/models/user.interface';
import { DateTimeUtils } from 'src/app/utils/datetime-utils';
import { environment } from 'src/environments/environment';

import { BreakUpModalComponent } from '../../modals/break-up-modal/break-up-modal.component';

@Component({
  selector: 'app-my-profile-bff-overview',
  templateUrl: './my-profile-bff-overview.component.html',
  styleUrls: ['./my-profile-bff-overview.component.scss']
})
export class MyProfileBffOverviewComponent implements OnInit, OnChanges {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() user: User;
  @Output() breakUp = new EventEmitter();

  bffDetail: BffDetail;
  daysPassed: number;

  modalRef: MDBModalRef;

  constructor(private modalService: MDBModalService) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.bffDetail = { ...this.user.bffDetail };
    this.daysPassed = DateTimeUtils.daysBetween(new Date(this.bffDetail.createdAt), new Date());

    if (this.user.id === this.bffDetail.secondUser.id) {
      this.bffDetail.firstUser = this.user.bffDetail.secondUser;
      this.bffDetail.secondUser = this.user.bffDetail.firstUser;
    }
  }

  openBreakUpModal() {
    this.modalRef = this.modalService.show(BreakUpModalComponent, {
      backdrop: true,
      keyboard: true,
      focus: true,
      show: false,
      ignoreBackdropClick: true,
      class: 'modal-dialog-centered',
      containerClass: 'top',
      animated: true
    });

    this.modalRef.content.breakUp
      .subscribe(() => this.onBreakUp());
  }

  onBreakUp() {
    this.breakUp.emit();
    this.modalRef.hide();
  }

}
