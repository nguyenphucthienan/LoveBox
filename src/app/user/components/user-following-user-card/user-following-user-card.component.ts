import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-following-user-card',
  templateUrl: './user-following-user-card.component.html',
  styleUrls: ['./user-following-user-card.component.scss']
})
export class UserFollowingUserCardComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
