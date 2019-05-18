import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/core/models/user.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-brief-detail-user-card',
  templateUrl: './brief-detail-user-card.component.html',
  styleUrls: ['./brief-detail-user-card.component.scss']
})
export class BriefDetailUserCardComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() user: User;

  constructor() { }

  ngOnInit() {
  }

}
