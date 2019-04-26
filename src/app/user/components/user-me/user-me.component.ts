import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-me',
  templateUrl: './user-me.component.html',
  styleUrls: ['./user-me.component.scss']
})
export class UserMeComponent implements OnInit {

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
