import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import {
  MyProfileBffRequestCardComponent,
} from './components/my-profile-bff-request-card/my-profile-bff-request-card.component';
import { MyProfileBffTabComponent } from './components/my-profile-bff-tab/my-profile-bff-tab.component';
import { MyProfileQuestionsTabComponent } from './components/my-profile-questions-tab/my-profile-questions-tab.component';
import { MyProfileComponent } from './components/my-profile/my-profile.component';
import { SearchUserComponent } from './components/search-user/search-user.component';
import { UserProfileBffOverviewComponent } from './components/user-profile-bff-overview/user-profile-bff-overview.component';
import { UserProfileBffTabComponent } from './components/user-profile-bff-tab/user-profile-bff-tab.component';
import {
  UserProfileQuestionsTabComponent,
} from './components/user-profile-questions-tab/user-profile-questions-tab.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { BffRequestModalComponent } from './modals/bff-request-modal/bff-request-modal.component';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileQuestionsTabComponent,
    UserProfileBffTabComponent,
    UserProfileBffOverviewComponent,
    MyProfileComponent,
    MyProfileQuestionsTabComponent,
    MyProfileBffTabComponent,
    MyProfileBffRequestCardComponent,
    BffRequestModalComponent,
    SearchUserComponent
  ],
  imports: [
    SharedModule,
    UsersRoutingModule
  ],
  entryComponents: [
    BffRequestModalComponent
  ]
})
export class UsersModule { }
