import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { environment } from 'src/environments/environment';

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
