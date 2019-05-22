import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable()
export class CheckSelfUserGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot): boolean {
    this.authService.decodedToken$
      .subscribe(decodedToken => {
        if (decodedToken) {
          const userId = next.paramMap.get('id');
          const currentUserId = decodedToken.sub;
          if (userId === currentUserId) {
            this.router.navigate(['users', 'me']);
          }
        }
      });

    return true;
  }

}
