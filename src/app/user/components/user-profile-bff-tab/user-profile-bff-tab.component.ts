import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { BffRequestService } from 'src/app/core/services/bff-request.service';

@Component({
  selector: 'app-user-profile-bff-tab',
  templateUrl: './user-profile-bff-tab.component.html',
  styleUrls: ['./user-profile-bff-tab.component.scss']
})
export class UserProfileBffTabComponent implements OnInit {

  @Input() myUser: User;
  @Input() user: User;

  loading = true;
  existSentRequest: BffRequest;
  requestForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bffRequestService: BffRequestService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.requestForm = this.fb.group({
      text: ['', [Validators.required, Validators.maxLength(200)]]
    });

    if (!this.myUser.bffDetail) {
      this.getExistBffRequest();
    }
  }

  getExistBffRequest() {
    this.bffRequestService.getExistBffRequest(this.myUser.id, this.user.id)
      .subscribe(
        bffRequest => {
          this.existSentRequest = bffRequest;
          this.loading = false;
        },
        error => {
          this.existSentRequest = null;
          this.loading = false;
        });
  }

  getRequestTextLength() {
    return this.requestForm.controls.text.value
      && 200 - this.requestForm.controls.text.value.length
      || 200;
  }

  sendRequest() {
    this.bffRequestService.createBffRequest(
      this.user.id,
      this.requestForm.controls.text.value
    ).subscribe(
      bffRequest => {
        this.alertService.success('Send BFF request successfully');
        this.requestForm.reset();
        this.getExistBffRequest();
      },
      error => this.alertService.error('Send BFF request failed'));
  }

}
