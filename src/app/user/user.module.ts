import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserFollowingUserCardComponent } from './components/user-following-user-card/user-following-user-card.component';
import { UserFollowingComponent } from './components/user-following/user-following.component';
import { UserMeBffRequestCardComponent } from './components/user-me-bff-request-card/user-me-bff-request-card.component';
import { UserMeBffTabComponent } from './components/user-me-bff-tab/user-me-bff-tab.component';
import { UserMeQuestionsTabComponent } from './components/user-me-questions-tab/user-me-questions-tab.component';
import { UserMeComponent } from './components/user-me/user-me.component';
import { UserProfileBffOverviewComponent } from './components/user-profile-bff-overview/user-profile-bff-overview.component';
import { UserProfileBffTabComponent } from './components/user-profile-bff-tab/user-profile-bff-tab.component';
import {
  UserProfileQuestionCardComponent,
} from './components/user-profile-question-card/user-profile-question-card.component';
import {
  UserProfileQuestionsTabComponent,
} from './components/user-profile-questions-tab/user-profile-questions-tab.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserMeComponent,
    UserProfileQuestionsTabComponent,
    UserProfileQuestionCardComponent,
    UserMeQuestionsTabComponent,
    UserFollowingComponent,
    UserFollowingUserCardComponent,
    UserProfileBffTabComponent,
    UserMeBffTabComponent,
    UserMeBffRequestCardComponent,
    UserProfileBffOverviewComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
