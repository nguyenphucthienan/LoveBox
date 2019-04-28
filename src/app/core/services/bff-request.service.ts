import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamsBuilder } from 'src/app/utils/params-builder';
import { UrlUtils } from 'src/app/utils/url-utils';
import { environment } from 'src/environments/environment';

import { BffRequest } from '../models/bff-request.interface';
import { Pagination } from '../models/pagination.interface';

@Injectable()
export class BffRequestService {

  private readonly bffRequestsUrl = `${environment.apiUrl}/users/{userId}/bff-requests`;
  private readonly bffRequestUrl = `${environment.apiUrl}/users/{userId}/bff-requests/{id}`;
  private readonly checkExistsBffRequestUrl = `${environment.apiUrl}/users/{userId}/bff-requests/check-exists`;
  private readonly approveBffRequestnUrl = `${environment.apiUrl}/users/{userId}/bff-requests/{id}/approve`;
  private readonly rejectBffRequestUrl = `${environment.apiUrl}/users/{userId}/bff-requests/{id}/reject`;

  private readonly defaultPagination: Pagination = {
    page: 0,
    size: 15
  };

  constructor(private http: HttpClient) { }

  getSentBffRequests(
    userId: number,
    pagination: Pagination = this.defaultPagination): Observable<BffRequest[]> {
    const params = new ParamsBuilder()
      .setParam('type', 'sent')
      .applyPagination(pagination)
      .build();

    const url = UrlUtils.resolvePathVariables(this.bffRequestsUrl, { userId });
    return this.http.get<BffRequest[]>(`${url}`, { params });
  }

  getReceivedBffRequests(
    userId: number,
    pagination: Pagination = this.defaultPagination): Observable<BffRequest[]> {
    const params = new ParamsBuilder()
      .setParam('type', 'received')
      .applyPagination(pagination)
      .build();

    const url = UrlUtils.resolvePathVariables(this.bffRequestsUrl, { userId });
    return this.http.get<BffRequest[]>(`${url}`, { params });
  }

  getBffRequest(userId: number, id: number): Observable<BffRequest> {
    const url = UrlUtils.resolvePathVariables(this.bffRequestUrl, { userId, id });
    return this.http.get<BffRequest>(url);
  }

  checkBffRequestExists(fromUserId: number, toUserId): Observable<any> {
    const params = new ParamsBuilder()
      .setParam('fromUserId', fromUserId.toString())
      .setParam('toUserId', toUserId.toString())
      .build();

    const url = UrlUtils.resolvePathVariables(this.checkExistsBffRequestUrl, { userId: 0 });
    return this.http.get<any[]>(`${url}`, { params });
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

}
