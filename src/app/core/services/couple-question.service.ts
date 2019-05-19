import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamsBuilder } from 'src/app/utils/params-builder';
import { UrlUtils } from 'src/app/utils/url-utils';
import { environment } from 'src/environments/environment';

import { CoupleQuestion } from '../models/couple-question.interface';
import { FilterMode } from '../models/filter-mode.interface';
import { Pagination } from '../models/pagination.interface';
import { SortMode } from '../models/sort-mode.interface';

@Injectable()
export class CoupleQuestionService {

  private readonly coupleQuestionsUrl = `${environment.apiUrl}/users/{userId}/couple-questions`;
  private readonly coupleQuestionUrl = `${environment.apiUrl}/users/{userId}/couple-questions/{id}`;
  private readonly answerCoupleQuestionUrl = `${environment.apiUrl}/users/{userId}/couple-questions/{id}/answer`;
  private readonly loveCoupleQuestionUrl = `${environment.apiUrl}/users/{userId}/couple-questions/{id}/love`;

  private readonly defaultPagination: Pagination = {
    page: 0,
    size: 15
  };

  private readonly defaultSortMode: SortMode = {
    sortBy: 'createdAt',
    isSortAscending: false
  };

  constructor(private http: HttpClient) { }

  getCoupleQuestions(
    userId: number,
    answered: boolean = false,
    pagination: Pagination = this.defaultPagination,
    sortMode: SortMode = this.defaultSortMode,
    filterMode?: FilterMode): Observable<CoupleQuestion[]> {
    const params = new ParamsBuilder()
      .setParam('answered', answered.toString())
      .applyPagination(pagination)
      .applySort(sortMode)
      .applyFilter(filterMode)
      .build();

    const url = UrlUtils.resolvePathVariables(this.coupleQuestionsUrl, { userId });
    return this.http.get<CoupleQuestion[]>(`${url}`, { params });
  }

  getCoupleQuestion(userId: number, id: number): Observable<CoupleQuestion> {
    const url = UrlUtils.resolvePathVariables(this.coupleQuestionUrl, { userId, id });
    return this.http.get<CoupleQuestion>(url);
  }

  createCoupleQuestion(userId: number, questionText: string): Observable<CoupleQuestion> {
    const url = UrlUtils.resolvePathVariables(this.coupleQuestionsUrl, { userId });
    return this.http.post<CoupleQuestion>(url, { questionText });
  }

  answerCoupleQuestion(userId: number, id: number, answerText: string): Observable<CoupleQuestion> {
    const url = UrlUtils.resolvePathVariables(this.answerCoupleQuestionUrl, { userId, id });
    return this.http.post<CoupleQuestion>(url, { answerText });
  }

  deleteCoupleQuestion(userId: number, id: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.coupleQuestionUrl, { userId, id });
    return this.http.delete<any>(url);
  }

  loveOrUnloveCoupleQuestion(userId: number, id: number): Observable<CoupleQuestion> {
    const url = UrlUtils.resolvePathVariables(this.loveCoupleQuestionUrl, { userId, id });
    return this.http.post<CoupleQuestion>(url, null);
  }
}
