import { Component, Input, OnInit } from '@angular/core';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { BffRequestService } from 'src/app/core/services/bff-request.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-me-bff-tab',
  templateUrl: './user-me-bff-tab.component.html',
  styleUrls: ['./user-me-bff-tab.component.scss']
})
export class UserMeBffTabComponent implements OnInit {

  @Input() myUser: User;

  receivedBffRequests: BffRequest[] = [];
  pagination: Pagination;

  constructor(
    private userService: UserService,
    private bffRequestService: BffRequestService,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    this.bffRequestService.getReceivedBffRequests(this.myUser.id)
      .subscribe((result: any) => {
        this.receivedBffRequests = result.content;
        this.pagination = result.pagination;
      });
  }

  onScrollDown() {
    if (this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.bffRequestService.getReceivedBffRequests(this.myUser.id, this.pagination)
        .subscribe((result: any) => {
          this.receivedBffRequests = [...this.receivedBffRequests, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

  approveRequest(bffRequest: BffRequest) {
    this.bffRequestService.approveBffRequest(this.myUser.id, bffRequest.id)
      .subscribe(
        (result: any) => {
          if (result.success) {
            this.alertService.success('Approve BFF request successfully');
            this.refreshUserBffDetail();
          }
        },
        error => this.alertService.error('Approve BFF request failed'));
  }

  rejectRequest(bffRequest: BffRequest) {
    this.bffRequestService.rejectBffRequest(this.myUser.id, bffRequest.id)
      .subscribe(
        result => {
          if (result.success) {
            this.alertService.success('Reject BFF request successfully');
            this.refreshUserBffDetail();
            this.filterRejectedRequest(bffRequest);
          }
        },
        error => this.alertService.error('Reject BFF request failed'));
  }

  refreshUserBffDetail() {
    this.userService.getUser(this.myUser.id)
      .subscribe(user => this.myUser.bffDetail = user.bffDetail);
  }

  filterRejectedRequest(bffRequest: BffRequest) {
    this.receivedBffRequests = this.receivedBffRequests
      .filter(request => request.id !== bffRequest.id);
  }

}
