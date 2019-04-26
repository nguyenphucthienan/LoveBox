import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  public readonly tabNames = {
    questions: 'QUESTIONS',
    bffDetail: 'BFF_DETAIL',
  };

  userInfo: User;
  currentTab: string = this.tabNames.questions;

  constructor() { }

  ngOnInit() {
  }

  selectTab(tabName: string) {
    this.currentTab = tabName;
  }

}
