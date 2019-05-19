import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { CoupleQuestionListComponent } from './components/couple-question-list/couple-question-list.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import {
  UnansweredCoupleQuestionCardComponent,
} from './components/unanswered-couple-question-card/unanswered-couple-question-card.component';
import { UnansweredQuestionCardComponent } from './components/unanswered-question-card/unanswered-question-card.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsListComponent,
    UnansweredQuestionCardComponent,
    AnswerQuestionComponent,
    QuestionDetailComponent,
    CoupleQuestionListComponent,
    UnansweredCoupleQuestionCardComponent
  ],
  imports: [
    SharedModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
