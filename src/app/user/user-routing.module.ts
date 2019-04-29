import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthRoleGuard } from '../core/guards/auth-role.guard';
import { UserFollowingComponent } from './components/user-following/user-following.component';
import { UserMeComponent } from './components/user-me/user-me.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserQuestionDetailComponent } from './components/user-question-detail/user-question-detail.component';
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
    resolve: {
      user: MyUserResolver,
      singleQuestion: SingleQuestionResolver
    }
  },
  {
    path: 'users/:userId/single-questions/:id',
    component: UserQuestionDetailComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: {
      user: MyUserResolver,
      singleQuestion: SingleQuestionResolver
    }
  },
  {
    path: 'questions',
    component: UserQuestionsComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: MyUserResolver }
  },
  {
    path: 'users/me',
    component: UserMeComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { myUser: MyUserResolver }
  },
  {
    path: 'users/:id',
    component: UserProfileComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: {
      myUser: MyUserResolver,
      user: UserResolver
    }
  },
  {
    path: 'following',
    component: UserFollowingComponent,
    canActivate: [AuthRoleGuard],
    data: { roles: ['ROLE_USER'] },
    resolve: { user: MyUserResolver }
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
