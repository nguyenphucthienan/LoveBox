import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { environment } from 'src/environments/environment';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  readonly defaultPhotoUrl = environment.defaultUserPhotoUrl;

  user: User;

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.authService.decodedToken$
      .pipe(
        switchMap(
          () => this.authService.getMyUserInfo()
        )
      )
      .subscribe((user: User) => this.user = user);
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
    this.alertService.info('Logout successfully');
    this.router.navigate(['/']);
  }

  search(value: string) {
    if (value.length < 3) {
      this.alertService.info('Search value must be at least 3 characters');
    } else {
      this.router.navigate(['/users', 'search'], { queryParams: { username: value } });
    }
  }

}
