import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { UserMeComponent } from './components/user-me/user-me.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {
  UserQuestionsAnswerQuestionComponent,
} from './components/user-questions-answer-question/user-questions-answer-question.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { MyUserResolver } from './resolvers/my-user.resolver';
import { SingleQuestionResolver } from './resolvers/single-question.resolver';
import { UserResolver } from './resolvers/user.resolver';

const routes: Routes = [
  {
    path: 'users/:userId/single-questions/:id/answer',
    component: UserQuestionsAnswerQuestionComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: MyUserResolver, singleQuestion: SingleQuestionResolver }
  },
  {
    path: 'questions',
    component: UserQuestionsComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: MyUserResolver }
  },
  {
    path: 'profile/me',
    component: UserMeComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: MyUserResolver }
  },
  {
    path: 'profile/:id',
    component: UserProfileComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: UserResolver }
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
export class UserRoutingModule { }
