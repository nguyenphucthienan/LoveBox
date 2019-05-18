import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamsBuilder } from 'src/app/utils/params-builder';
import { UrlUtils } from 'src/app/utils/url-utils';
import { environment } from 'src/environments/environment';

import { BffRequest } from '../models/bff-request.interface';
import { FilterMode } from '../models/filter-mode.interface';
import { Pagination } from '../models/pagination.interface';
import { SortMode } from '../models/sort-mode.interface';

@Injectable()
export class BffRequestService {

  private readonly bffRequestsUrl = `${environment.apiUrl}/users/{userId}/bff-requests`;
  private readonly bffRequestUrl = `${environment.apiUrl}/users/{userId}/bff-requests/{id}`;
  private readonly checkExistsBffRequestUrl = `${environment.apiUrl}/users/{userId}/bff-requests/exist`;
  private readonly approveBffRequestnUrl = `${environment.apiUrl}/users/{userId}/bff-requests/{id}/approve`;
  private readonly rejectBffRequestUrl = `${environment.apiUrl}/users/{userId}/bff-requests/{id}/reject`;
  private readonly breakUpUrl = `${environment.apiUrl}/users/{userId}/bff-requests/break-up`;

  private readonly defaultPagination: Pagination = {
    page: 0,
    size: 15
  };

  private readonly defaultSortMode: SortMode = {
    sortBy: 'createdAt',
    isSortAscending: false
  };

  constructor(private http: HttpClient) { }

  getSentBffRequests(
    userId: number,
    pagination: Pagination = this.defaultPagination,
    sortMode: SortMode = this.defaultSortMode,
    filterMode?: FilterMode
  ): Observable<BffRequest[]> {
    const params = new ParamsBuilder()
      .setParam('type', 'sent')
      .applyPagination(pagination)
      .applySort(sortMode)
      .applyFilter(filterMode)
      .build();

    const url = UrlUtils.resolvePathVariables(this.bffRequestsUrl, { userId });
    return this.http.get<BffRequest[]>(`${url}`, { params });
  }

  getReceivedBffRequests(
    userId: number,
    pagination: Pagination = this.defaultPagination,
    sortMode: SortMode = this.defaultSortMode,
    filterMode?: FilterMode
  ): Observable<BffRequest[]> {
    const params = new ParamsBuilder()
      .setParam('type', 'received')
      .applyPagination(pagination)
      .applySort(sortMode)
      .applyFilter(filterMode)
      .build();

    const url = UrlUtils.resolvePathVariables(this.bffRequestsUrl, { userId });
    return this.http.get<BffRequest[]>(`${url}`, { params });
  }

  getBffRequest(userId: number, id: number): Observable<BffRequest> {
    const url = UrlUtils.resolvePathVariables(this.bffRequestUrl, { userId, id });
    return this.http.get<BffRequest>(url);
  }

  getExistBffRequest(fromUserId: number, toUserId): Observable<BffRequest> {
    const params = new ParamsBuilder()
      .setParam('fromUserId', fromUserId.toString())
      .setParam('toUserId', toUserId.toString())
      .build();

    const url = UrlUtils.resolvePathVariables(this.checkExistsBffRequestUrl, { userId: 0 });
    return this.http.get<BffRequest>(`${url}`, { params });
  }

  createBffRequest(userId: number, text: string): Observable<BffRequest> {
    const url = UrlUtils.resolvePathVariables(this.bffRequestsUrl, { userId });
    return this.http.post<BffRequest>(url, { text });
  }

  approveBffRequest(userId: number, id: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.approveBffRequestnUrl, { userId, id });
    return this.http.post<any>(url, null);
  }

  rejectBffRequest(userId: number, id: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.rejectBffRequestUrl, { userId, id });
    return this.http.post<any>(url, null);
  }

  breakUp(userId: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.breakUpUrl, { userId });
    return this.http.post<any>(url, null);
  }
}
