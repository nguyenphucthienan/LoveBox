import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserMeComponent } from './components/user-me/user-me.component';
import { UserProfileOverviewComponent } from './components/user-profile-overview/user-profile-overview.component';
import {
  UserProfileQuestionCardComponent,
} from './components/user-profile-question-card/user-profile-question-card.component';
import {
  UserProfileQuestionsTabComponent,
} from './components/user-profile-questions-tab/user-profile-questions-tab.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import {
  UserQuestionsAnswerQuestionComponent,
} from './components/user-questions-answer-question/user-questions-answer-question.component';
import { UserQuestionsListComponent } from './components/user-questions-list/user-questions-list.component';
import {
  UserQuestionsQuestionCardComponent,
} from './components/user-questions-question-card/user-questions-question-card.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { MyUserResolver } from './resolvers/my-user.resolver';
import { SingleQuestionResolver } from './resolvers/single-question.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { UserRoutingModule } from './user-routing.module';
import { UserMeQuestionsTabComponent } from './components/user-me-questions-tab/user-me-questions-tab.component';
import { UserFollowingComponent } from './components/user-following/user-following.component';
import { UserFollowingUserCardComponent } from './components/user-following-user-card/user-following-user-card.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileOverviewComponent,
    UserMeComponent,
    UserProfileQuestionsTabComponent,
    UserProfileQuestionCardComponent,
    UserQuestionsComponent,
    UserQuestionsListComponent,
    UserQuestionsQuestionCardComponent,
    UserQuestionsAnswerQuestionComponent,
    UserMeQuestionsTabComponent,
    UserFollowingComponent,
    UserFollowingUserCardComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    MyUserResolver,
    UserResolver,
    SingleQuestionResolver
  ]
})
export class UserModule { }
