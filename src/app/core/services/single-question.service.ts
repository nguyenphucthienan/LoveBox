import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ParamsBuilder } from 'src/app/utils/params-builder';
import { UrlUtils } from 'src/app/utils/url-utils';
import { environment } from 'src/environments/environment';

import { Pagination } from '../models/pagination.interface';
import { SingleQuestion } from '../models/single-question.interface';

@Injectable()
export class SingleQuestionService {

  private readonly singleQuestionsUrl = `${environment.apiUrl}/users/{userId}/single-questions`;
  private readonly singleQuestionUrl = `${environment.apiUrl}/users/{userId}/single-questions/{id}`;

  private readonly defaultPagination: Pagination = {
    page: 0,
    size: 10
  };

  constructor(private http: HttpClient) { }

  getSingleQuestions(
    userId: number,
    answered: boolean = false,
    pagination: Pagination = this.defaultPagination): Observable<SingleQuestion[]> {
    const params = new ParamsBuilder()
      .setParam('answered', answered.toString())
      .applyPagination(pagination)
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

  deleteSingleQuestion(userId: number, id: number): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.singleQuestionUrl, { userId, id });
    return this.http.delete<any>(url);
  }

  loveOrUnloveSingleQuestion(userId: number, id: string): Observable<any> {
    const url = UrlUtils.resolvePathVariables(this.singleQuestionUrl, { userId, id });
    return this.http.post<SingleQuestion>(url, null);
  }

}
