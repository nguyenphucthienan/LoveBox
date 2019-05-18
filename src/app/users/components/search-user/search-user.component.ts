import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pagination } from 'src/app/core/models/pagination.interface';
import { User } from 'src/app/core/models/user.interface';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {

  value: string;
  users: User[] = [];
  pagination: Pagination;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.value = params.get('username');
      this.userService.searchUsers(this.value)
        .subscribe((result: any) => {
          this.users = result.content;
          this.pagination = result.pagination;
        });
    });
  }

  onScrollDown() {
    if (this.pagination && this.pagination.page < this.pagination.totalPages) {
      this.pagination.page += 1;
      this.userService.searchUsers(this.value, this.pagination)
        .subscribe((result: any) => {
          this.users = [...this.users, ...result.content];
          this.pagination = result.pagination;
        });
    }
  }

}
