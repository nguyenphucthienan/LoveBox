import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-profile-overview',
  templateUrl: './user-profile-overview.component.html',
  styleUrls: ['./user-profile-overview.component.scss']
})
export class UserProfileOverviewComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
