import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-user-following-user-card',
  templateUrl: './user-following-user-card.component.html',
  styleUrls: ['./user-following-user-card.component.scss']
})
export class UserFollowingUserCardComponent implements OnInit {

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
