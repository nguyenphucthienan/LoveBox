import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/models/user.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/core/services/user.service';

@Injectable()
export class MyUserResolver implements Resolve<User> {

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private alertService: AlertService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<User> {
    return Observable.create(observer => {
      this.authService.decodedToken$.subscribe(token => {
        if (token) {
          this.userService.getUser(token.sub)
            .subscribe(
              user => {
                observer.next(user);
                observer.complete();
              },
              err => {
                this.alertService.error('Problem retrieving data');
                observer.error();
                observer.complete();
              });
        }
      });
    });
  }

}
