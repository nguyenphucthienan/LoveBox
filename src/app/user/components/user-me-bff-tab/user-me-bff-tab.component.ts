import { Component, OnInit, Input } from '@angular/core';
import { BffRequest } from 'src/app/core/models/bff-request.interface';
import { BffRequestService } from 'src/app/core/services/bff-request.service';
import { User } from 'src/app/core/models/user.interface';

@Component({
  selector: 'app-user-me-bff-tab',
  templateUrl: './user-me-bff-tab.component.html',
  styleUrls: ['./user-me-bff-tab.component.scss']
})
export class UserMeBffTabComponent implements OnInit {

  @Input() myUser: User;

  receivedBffRequests: BffRequest[] = [];

  constructor(private bffRequestService: BffRequestService) { }

  ngOnInit() {
    this.bffRequestService.getReceivedBffRequests(this.myUser.id)
      .subscribe((receivedBffRequests: any) => this.receivedBffRequests = receivedBffRequests.content);
  }

}
