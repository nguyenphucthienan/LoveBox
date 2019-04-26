import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SingleQuestion } from 'src/app/core/models/single-question.interface';
import { AlertService } from 'src/app/core/services/alert.service';
import { SingleQuestionService } from 'src/app/core/services/single-question.service';

@Injectable()
export class SingleQuestionResolver implements Resolve<SingleQuestion> {

  constructor(
    private router: Router,
    private singleQuestionService: SingleQuestionService,
    private alertService: AlertService
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<SingleQuestion> {
    const userId = route.paramMap.get('userId');
    const id = route.paramMap.get('id');

    return this.singleQuestionService.getSingleQuestion(Number(userId), Number(id))
      .pipe(
        catchError(error => {
          this.router.navigate(['/']);
          this.alertService.error('Problem retrieving data');
          return of(null);
        })
      );
  }

}
