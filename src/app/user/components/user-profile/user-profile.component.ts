import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  user: User;
  currentTab: string = this.tabNames.questions;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });
  }

  selectTab(tabName: string) {
    this.currentTab = tabName;
  }

}
