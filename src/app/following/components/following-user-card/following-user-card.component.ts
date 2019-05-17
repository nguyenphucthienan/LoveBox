import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-following-user-card',
  templateUrl: './following-user-card.component.html',
  styleUrls: ['./following-user-card.component.scss']
})
export class FollowingUserCardComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
