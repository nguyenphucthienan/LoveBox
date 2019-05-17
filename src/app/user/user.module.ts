import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { UserFollowingUserCardComponent } from './components/user-following-user-card/user-following-user-card.component';
import { UserFollowingComponent } from './components/user-following/user-following.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [
    UserFollowingComponent,
    UserFollowingUserCardComponent,
  ],
  imports: [
    SharedModule,
    UserRoutingModule
  ]
})
export class UserModule { }
