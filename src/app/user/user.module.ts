import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserProfileOverviewComponent } from './components/user-profile-overview/user-profile-overview.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MyUserResolver } from './resolvers/my-user.resolver';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserProfileComponent,
    UserProfileOverviewComponent
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ],
  providers: [
    MyUserResolver
  ]
})
export class UserModule { }
