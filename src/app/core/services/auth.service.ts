import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Role } from '../models/role.interface';
import { User } from '../models/user.interface';

@Injectable()
export class AuthService {

  private readonly AUTH_URL = `${environment.apiUrl}/auth`;

  private jwtHelper = new JwtHelperService();
  private decodedToken: any;
  private decodedTokenSubject = new BehaviorSubject(this.decodedToken);
  decodedToken$ = this.decodedTokenSubject.asObservable();

  constructor(private http: HttpClient) { }

  readTokenFromStorage() {
    const token = localStorage.getItem('token');
    this.getMyUserInfo(token)
      .subscribe(
        (user: User) => {
          if (user.username) {
            this.changeDecodedToken(token);
          }
        },
        error => this.logout()
      );
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  register(user: User) {
    return this.http.post(`${this.AUTH_URL}/sign-up`, user);
  }

  login(model: { usernameOrEmail: string, password: string }) {
    return this.http.post(`${this.AUTH_URL}/sign-in`, model)
      .pipe(
        map(({ accessToken }: any) => {
          if (accessToken) {
            localStorage.setItem('token', accessToken);
            this.changeDecodedToken(accessToken);
          }
        })
      );
  }

  logout() {
    this.changeDecodedToken(null);
    localStorage.removeItem('token');
  }

  private getMyUserInfo(token: string) {
    const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
    return this.http.get(`${this.AUTH_URL}/me`, { headers });
  }

  private changeDecodedToken(token: string) {
    this.decodedToken = this.jwtHelper.decodeToken(token);
    this.decodedTokenSubject.next(this.decodedToken);
  }

  isRoleMatch(allowedRoles: string[]): boolean {
    let result = false;

    if (this.decodedToken) {
      const userRoles = this.decodedToken.roles as Array<Role>;
      const userRoleNames = userRoles.map(role => role.authority);

      allowedRoles.forEach(allowedRole => {
        if (userRoleNames.includes(allowedRole)) {
          result = true;
          return;
        }
      });
    }

    return result;
  }

}
