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

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileOverviewComponent,
    UserMeComponent,
    UserQuestionTextareaComponent,
    UserProfileQuestionsTabComponent
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
