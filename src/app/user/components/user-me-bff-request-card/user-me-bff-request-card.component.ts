import { Component, Input, OnInit } from '@angular/core';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-user-me-bff-request-card',
  templateUrl: './user-me-bff-request-card.component.html',
  styleUrls: ['./user-me-bff-request-card.component.scss']
})
export class UserMeBffRequestCardComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  @Input() bffRequest: BffRequest;

  constructor() { }

  ngOnInit() {
  }

}
