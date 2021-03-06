import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  myUser: User;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.myUser = data.myUser;
      this.user = data.user;
    });
  }

  followOrUnfollowUser() {
    this.user.followed = !this.user.followed;
    if (this.user.followed) {
      this.user.followersCount += 1;
    } else {
      this.user.followersCount -= 1;
    }

    this.userService.followOrUnfollowUser(this.user.id)
      .subscribe((result: any) => {
        if (result.success) {
          if (this.user.followed) {
            this.alertService.success('Follow user successfully');
          } else {
            this.alertService.success('Unfollow user successfully');
          }
        } else {
          if (this.user.followed) {
            this.alertService.error('Follow user failed');
            this.user.followersCount -= 1;
          } else {
            this.alertService.error('Unfollow user failed');
            this.user.followersCount += 1;
          }
          this.user.followed = !this.user.followed;
        }
      });
  }

}
