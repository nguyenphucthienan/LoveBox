import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  hasSentRequest: boolean;
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

    this.bffRequestService.checkBffRequestExists(this.myUser.id, this.user.id)
      .subscribe((result: any) => {
        this.hasSentRequest = result.exist;
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
      },
      error => this.alertService.error('Send BFF request failed'));
  }

}
