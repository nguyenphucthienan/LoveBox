import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserMeComponent } from './components/user-me/user-me.component';
import { UserProfileOverviewComponent } from './components/user-profile-overview/user-profile-overview.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyUserResolver } from './resolvers/my-user.resolver';
import { UserResolver } from './resolvers/user.resolver';
import { UserRoutingModule } from './user-routing.module';
import { UserQuestionTextareaComponent } from './components/user-question-textarea/user-question-textarea.component';
import { UserProfileQuestionsTabComponent } from './components/user-profile-questions-tab/user-profile-questions-tab.component';
import { UserProfileQuestionCardComponent } from './components/user-profile-question-card/user-profile-question-card.component';
import { UserQuestionsComponent } from './components/user-questions/user-questions.component';
import { UserQuestionsListComponent } from './components/user-questions-list/user-questions-list.component';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileOverviewComponent,
    UserMeComponent,
    UserQuestionTextareaComponent,
    UserProfileQuestionsTabComponent,
    UserProfileQuestionCardComponent,
    UserQuestionsComponent,
    UserQuestionsListComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    MyUserResolver,
    UserResolver
  ]
})
export class UserModule { }
