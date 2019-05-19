import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RoleName } from '../core/constant/role-name';
import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { CoupleQuestionResolver } from '../core/resolvers/couple-question.resolver';
import { MyUserResolver } from '../core/resolvers/my-user.resolver';
import { SingleQuestionResolver } from '../core/resolvers/single-question.resolver';
import { AnswerCoupleQuestionComponent } from './components/answer-couple-question/answer-couple-question.component';
import { AnswerQuestionComponent } from './components/answer-question/answer-question.component';
import { CoupleQuestionDetailComponent } from './components/couple-question-detail/couple-question-detail.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionsComponent } from './questions.component';

const routes: Routes = [
  {
    path: 'questions',
    component: QuestionsComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: { user: MyUserResolver }
  },
  {
    path: 'users/:userId/single-questions/:id',
    component: QuestionDetailComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: {
      user: MyUserResolver,
      singleQuestion: SingleQuestionResolver
    }
  },
  {
    path: 'users/:userId/single-questions/:id/answer',
    component: AnswerQuestionComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: {
      user: MyUserResolver,
      singleQuestion: SingleQuestionResolver
    }
  },
  {
    path: 'users/:userId/couple-questions/:id',
    component: CoupleQuestionDetailComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: {
      user: MyUserResolver,
      coupleQuestion: CoupleQuestionResolver
    }
  },
  {
    path: 'users/:userId/couple-questions/:id/answer',
    component: AnswerCoupleQuestionComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: [RoleName.USER] },
    resolve: {
      user: MyUserResolver,
      coupleQuestion: CoupleQuestionResolver
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class QuestionsRoutingModule { }
