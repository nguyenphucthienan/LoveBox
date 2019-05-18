import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamsBuilder } from 'src/app/utils/params-builder';
import { UrlUtils } from 'src/app/utils/url-utils';
import { environment } from 'src/environments/environment';

import { Pagination } from '../models/pagination.interface';
import { User } from '../models/user.interface';

@Injectable()
export class UserService {

  private readonly userUrl = `${environment.apiUrl}/users`;
  private readonly followingUrl = `${environment.apiUrl}/users/{id}/following`;
  private readonly followersUrl = `${environment.apiUrl}/users/{id}/followers`;
  private readonly followUrl = `${environment.apiUrl}/users/{id}/follow`;
  private readonly searchUrl = `${environment.apiUrl}/users/search`;

  private readonly defaultPagination: Pagination = {
    page: 0,
    size: 15
  };

  constructor(private http: HttpClient) { }

  getFollowing(id: number, pagination: Pagination = this.defaultPagination): Observable<User[]> {
    const params = new ParamsBuilder()
      .applyPagination(pagination)
      .build();

    const url = UrlUtils.resolvePathVariables(this.followingUrl, { id });
    return this.http.get<User[]>(`${url}`, { params });
  }

  getFollowers(id: number, pagination: Pagination = this.defaultPagination): Observable<User[]> {
    const params = new ParamsBuilder()
      .applyPagination(pagination)
      .build();

    const url = UrlUtils.resolvePathVariables(this.followersUrl, { id });
    return this.http.get<User[]>(`${url}`, { params });
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.userUrl}/${id}`);
  }

  followOrUnfollowUser(id: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.followUrl, { id });
    return this.http.post<User>(url, null);
  }

  searchUsers(value: string, pagination: Pagination = this.defaultPagination): Observable<User[]> {
    const params = new ParamsBuilder()
      .applyPagination(pagination)
      .setParam('username', value)
      .build();

    return this.http.get<User[]>(this.searchUrl, { params });
  }

}
