import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';
import { QuestionsListComponent } from './components/questions-list/questions-list.component';
import { UnansweredQuestionCardComponent } from './components/unanswered-question-card/unanswered-question-card.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';

@NgModule({
  declarations: [
    QuestionsComponent,
    QuestionsListComponent,
    UnansweredQuestionCardComponent,
    AnswerQuestionComponent,
    QuestionDetailComponent
  ],
  imports: [
    SharedModule,
    QuestionsRoutingModule
  ]
})
export class QuestionsModule { }
