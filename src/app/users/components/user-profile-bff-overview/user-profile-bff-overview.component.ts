import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BffDetail } from 'src/app/core/models/bff-detail.interface';
import { User } from 'src/app/core/models/user.interface';
import { DateTimeUtils } from 'src/app/utils/datetime-utils';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile-bff-overview',
  templateUrl: './user-profile-bff-overview.component.html',
  styleUrls: ['./user-profile-bff-overview.component.scss']
})
export class UserProfileBffOverviewComponent implements OnInit, OnChanges {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() user: User;

  bffDetail: BffDetail;
  daysPassed: number;

  constructor() { }

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

}
