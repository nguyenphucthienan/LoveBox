import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Pagination } from '../core/models/pagination.interface';
import { User } from '../core/models/user.interface';
import { UserService } from '../core/services/user.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  user: User;
  followingUsers: User[];
  pagination: Pagination;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data.user;
    });

    this.userService.getFollowing(this.user.id)
      .subscribe((result: any) => {
        this.followingUsers = result.content;
        this.pagination = result.pagination;
      });
  }

  onScrollDown() {
    if (this.pagination && this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.userService.getFollowing(this.user.id, this.pagination)
        .subscribe((result: any) => {
          this.followingUsers = [...this.followingUsers, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
