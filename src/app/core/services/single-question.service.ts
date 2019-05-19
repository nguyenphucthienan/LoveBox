import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamsBuilder } from 'src/app/utils/params-builder';
import { UrlUtils } from 'src/app/utils/url-utils';
import { environment } from 'src/environments/environment';

import { FilterMode } from '../models/filter-mode.interface';
import { Pagination } from '../models/pagination.interface';
import { SingleQuestion } from '../models/single-question.interface';
import { SortMode } from '../models/sort-mode.interface';

@Injectable()
export class SingleQuestionService {

  private readonly singleQuestionsInNewsFeedUrl = `${environment.apiUrl}/users/{userId}/single-questions/news-feed`;
  private readonly singleQuestionsUrl = `${environment.apiUrl}/users/{userId}/single-questions`;
  private readonly singleQuestionUrl = `${environment.apiUrl}/users/{userId}/single-questions/{id}`;
  private readonly answerSingleQuestionUrl = `${environment.apiUrl}/users/{userId}/single-questions/{id}/answer`;
  private readonly loveSingleQuestionUrl = `${environment.apiUrl}/users/{userId}/single-questions/{id}/love`;

  private readonly defaultPagination: Pagination = {
    page: 0,
    size: 15
  };

  private readonly defaultSortMode: SortMode = {
    sortBy: 'createdAt',
    isSortAscending: false
  };

  constructor(private http: HttpClient) { }

  getSingleQuestionsInNewsFeed(
    userId: number,
    pagination: Pagination = this.defaultPagination,
    sortMode: SortMode = this.defaultSortMode,
    filterMode?: FilterMode): Observable<SingleQuestion[]> {
    const params = new ParamsBuilder()
      .applyPagination(pagination)
      .applySort(sortMode)
      .applyFilter(filterMode)
      .build();

    const url = UrlUtils.resolvePathVariables(this.singleQuestionsInNewsFeedUrl, { userId });
    return this.http.get<SingleQuestion[]>(`${url}`, { params });
  }

  getSingleQuestions(
    userId: number,
    answered: boolean = false,
    pagination: Pagination = this.defaultPagination,
    sortMode: SortMode = this.defaultSortMode,
    filterMode?: FilterMode): Observable<SingleQuestion[]> {
    const params = new ParamsBuilder()
      .setParam('answered', answered.toString())
      .applyPagination(pagination)
      .applySort(sortMode)
      .applyFilter(filterMode)
      .build();

    const url = UrlUtils.resolvePathVariables(this.singleQuestionsUrl, { userId });
    return this.http.get<SingleQuestion[]>(`${url}`, { params });
  }

  getSingleQuestion(userId: number, id: number): Observable<SingleQuestion> {
    const url = UrlUtils.resolvePathVariables(this.singleQuestionUrl, { userId, id });
    return this.http.get<SingleQuestion>(url);
  }

  createSingleQuestion(userId: number, questionText: string): Observable<SingleQuestion> {
    const url = UrlUtils.resolvePathVariables(this.singleQuestionsUrl, { userId });
    return this.http.post<SingleQuestion>(url, { questionText });
  }

  answerSingleQuestion(userId: number, id: number, answerText: string): Observable<SingleQuestion> {
    const url = UrlUtils.resolvePathVariables(this.answerSingleQuestionUrl, { userId, id });
    return this.http.post<SingleQuestion>(url, { answerText });
  }

  deleteSingleQuestion(userId: number, id: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.singleQuestionUrl, { userId, id });
    return this.http.delete<any>(url);
  }

  loveOrUnloveSingleQuestion(userId: number, id: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.loveSingleQuestionUrl, { userId, id });
    return this.http.post<SingleQuestion>(url, null);
  }

}
