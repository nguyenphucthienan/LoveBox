import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from 'src/app/core/services/alert.service';

import { CoupleQuestion } from '../models/couple-question.interface';
import { CoupleQuestionService } from '../services/couple-question.service';

@Injectable()
export class CoupleQuestionResolver implements Resolve<CoupleQuestion> {

  constructor(
    private router: Router,
    private coupleQuestionService: CoupleQuestionService,
    private alertService: AlertService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<CoupleQuestion> {
    const userId = route.paramMap.get('userId');
    const id = route.paramMap.get('id');

    return this.coupleQuestionService.getCoupleQuestion(Number(userId), Number(id))
      .pipe(
        catchError(error => {
          this.router.navigate(['/']);
          this.alertService.error('Problem retrieving data');
          return of(null);
        })
      );
  }

}
