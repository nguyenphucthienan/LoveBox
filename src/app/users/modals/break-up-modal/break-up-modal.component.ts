import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MDBModalRef } from 'angular-bootstrap-md';

@Component({
  selector: 'app-break-up-modal',
  templateUrl: './break-up-modal.component.html',
  styleUrls: ['./break-up-modal.component.scss']
})
export class BreakUpModalComponent implements OnInit {

  @Output() breakUp = new EventEmitter();

  constructor(public modalRef: MDBModalRef) { }

  ngOnInit() {
  }

  yes() {
    this.breakUp.emit();
  }

}
