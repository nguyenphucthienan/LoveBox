import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AnswerCoupleQuestionComponent } from './components/answer-couple-question/answer-couple-question.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { CoupleQuestionDetailComponent } from './components/couple-question-detail/couple-question-detail.component';
import { CoupleQuestionListComponent } from './components/couple-question-list/couple-question-list.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import {
  UnansweredCoupleQuestionCardComponent,
} from './components/unanswered-couple-question-card/unanswered-couple-question-card.component';
import { UnansweredQuestionCardComponent } from './components/unanswered-question-card/unanswered-question-card.component';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionListComponent,
    UnansweredQuestionCardComponent,
    AnswerQuestionComponent,
    QuestionDetailComponent,
    CoupleQuestionListComponent,
    UnansweredCoupleQuestionCardComponent,
    AnswerCoupleQuestionComponent,
    CoupleQuestionDetailComponent
  ],
  imports: [
    SharedModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
